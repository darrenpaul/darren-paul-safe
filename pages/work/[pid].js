import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import uuid from "uuid";
import { database, storage } from "../../services/firebase";
import SyncLoader from "react-spinners/SyncLoader";
import Screen from "./../../components/screen";

const ProjectPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  // STATES
  const [project, setProject] = useState(null);
  const [queryId, setQueryId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // WHEN MOUNTED
  useEffect(() => {
    if (router && router.query) {
      const { pid } = router.query;
      setQueryId(router.query.pid);
      // console.log(queryId);
    }
  }, [router]);
  useEffect(() => {
    getData();
  }, [queryId]);
  // EVENTS
  const getData = async () => {
    await database
      .collection("projects")
      .get()
      .then(async (querySnapshot) => {
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          if (doc.id === queryId) {
            data["id"] = doc.id;
            data.usage = data.usage;
            data.image = {
              url: await getImage(data),
              loaded: false,
            };
            setProject(data);
          }
        });
      });
  };
  const getImage = (project) => {
    let image = storage
      .child(`${project.images[project.images.length - 1]}`)
      .getDownloadURL()
      .then((url) => {
        return url;
      });
    return image;
  };

  return (
    <section>
      <Head>
        <title>Project</title>
      </Head>
      <div className={`main__loader ${loaded ? "loaded" : ""}`}>
        <SyncLoader size={50} color={"#e66f41"} />
      </div>
      {project ? (
        <div className="project__screens">
          <Screen
            key={uuid.v4()}
            position="relative"
            name={project.title}
            offsetX="0px"
            offsetY="0px"
            inner={
              <div>
                {project.links.map((link) => {
                  if (["youtube", "vimeo"].includes(link.type)) {
                    return (
                      <iframe
                        className="project__video_frame"
                        id="ytplayer"
                        type="text/html"
                        key={uuid.v4()}
                        src={link.url}
                        frameBorder="0"
                        onLoad={async () => {
                          setLoaded(true);
                        }}
                      ></iframe>
                    );
                  } else {
                    return (
                      <div key={uuid.v4()} className="project__image_group">
                        <a href={link.url} target="_blank">
                          <img
                            className="project__image"
                            src={project.image.url}
                            onLoad={async () => {
                              setLoaded(true);
                            }}
                          />
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            }
          />
          <div>
            <Screen
              key={uuid.v4()}
              position="relative"
              name="Description"
              offsetX="0px"
              offsetY="0px"
              inner={
                <div className="__copy_container">
                  <p className="__copy_text">{project.description}</p>
                </div>
              }
            />
            <Screen
              key={uuid.v4()}
              position="relative"
              name="Frameworks"
              offsetX="0px"
              offsetY="0px"
              inner={
                <div className="project__tags_container">
                  {project.tags.map((tag) => {
                    return (
                      <img
                        key={uuid.v4()}
                        className="project__tag_image"
                        src={tag.icon}
                        alt={tag.name}
                      />
                    );
                  })}
                </div>
              }
            />
          </div>
        </div>
      ) : (
        <SyncLoader size={50} color={"#e66f41"} />
      )}
    </section>
  );
};

export default ProjectPage;
