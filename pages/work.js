import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { database, storage } from "../services/firebase";
import SyncLoader from "react-spinners/SyncLoader";
import GridLoader from "react-spinners/GridLoader";
import moment from "moment";

const WorkPage = () => {
  // STATES
  const [projects, setProjects] = useState([]);
  // WHEN MOUNTED
  useEffect(() => {
    getData();
    return;
  }, []);
  // EVENETS
  const getData = async () => {
    if (projects.length > 0) {
      setProjects([]);
    }
    await database
      .collection("projects")
      .get()
      .then(async (querySnapshot) => {
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          data.image = {
            url: (await getImage(data)) ?? "",
            loaded: false,
          };
          const _projects = projects.sort((a, b) => {
            return a.created < b.created ? 1 : -1;
          });
          setProjects((projects) => [...projects, data]);
        });
      });
  };
  const getImage = (project) => {
    let image = storage
      .child(`${project.images[0]}`)
      .getDownloadURL()
      .then((url) => {
        return url;
      });
    return image;
  };
  const imageState = (project, index) => {
    setProjects(
      projects.map((element) => {
        if (element.id === project.id) {
          element.image.loaded = true;
        }
        return element;
      })
    );
  };
  return (
    <section>
      <Head>
        <title>Work</title>
      </Head>
      <div className={`main__loader ${projects.length > 3 ? "loaded" : ""}`}>
        <SyncLoader size={50} color={"#e66f41"} />
      </div>
      {projects.length > 3 ? (
        <div className="work__projects_container">
          {projects.map((project, index) => {
            return (
              <Link key={project.id} href={`/work/${project.id}`}>
                <div className="work__image_container">
                  <div
                    className={`work__image_loader ${
                      project.image.loaded ? "loaded" : ""
                    }`}
                  >
                    <GridLoader size={25} color={"#e66f41"} />
                  </div>
                  <div className="work__project_information">
                    <h4 className="work__title">{`${project.title} ${project.type}`}</h4>
                    <div className="work__project_time">
                      <p className="work__completed">
                        {`Completed: ${moment
                          .unix(project.created.seconds)
                          .format("L")
                          .replaceAll("/", "-")}`}
                      </p>
                    </div>
                    {/* <div>
                      {project.tags.map((tag) => {
                        return (
                          <p
                            className="work__tag"
                            key={`${project.id}${tag.name}`}
                          >
                            {tag.name}
                          </p>
                        );
                      })}
                    </div> */}
                  </div>
                  <img
                    className="work__image"
                    src={project.image.url}
                    onLoad={async () => {
                      await imageState(project, index);
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      ) : undefined}
    </section>
  );
};
export default WorkPage;
