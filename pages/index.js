import Head from "next/head";
import React, { useEffect, useState } from "react";
import Screen from "../components/screen";
const HomePage = () => {
  // STATES
  const [innerWidth, setInnerWidth] = useState(1920);
  const [innerHeight, setInnerHeight] = useState(640);
  // WHEN MOUNTED
  useEffect(() => {
    resizeViewport();
    window.addEventListener("resize", resizeViewport);
  });
  // EVENTS
  const resizeViewport = () => {
    const width = window.innerWidth;
    setInnerWidth(width);
    setInnerHeight(640);
  };
  return (
    <section>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home__screens">
        <Screen
          name="Expertise"
          offsetX={innerWidth > 800 ? `${innerWidth / 5}px` : "0px"}
          offsetY={innerWidth > 800 ? "50px" : "0px"}
          inner={
            <div className="home__list_skills">
              <img
                src="https://img.icons8.com/color/96/000000/python.png"
                alt="python"
              />
              <img
                src="https://img.icons8.com/color/96/000000/react-native.png"
                alt="react.js"
              />
              <img
                src="https://img.icons8.com/color/96/000000/html-5.png"
                alt="html"
              />
              <img
                src="https://img.icons8.com/color/96/000000/css3.png"
                alt="css"
              />
              <img
                src="https://img.icons8.com/color/96/000000/javascript-logo-1.png"
                alt="javascript"
              />
              <img
                src="https://img.icons8.com/color/96/000000/firebase.png"
                alt="firebase"
              />
            </div>
          }
        />
        {/* SCREEN END */}
        <Screen
          name="About Me"
          offsetX={innerWidth > 800 ? `${innerWidth / 10}px` : "0px"}
          offsetY={innerWidth > 800 ? "25px" : "0px"}
          inner={
            <div>
              <h4>A Software Developer working as a Pipeline TD</h4>
              <div className="__copy_container">
                <p className="__copy_text">
                  Hey there, my name is Darren and I’m a Pipeline TD with 5
                  years VFX experience and 3 years developer experience. I
                  started out as a character rigger, learned some python and
                  instantly fell in love so decided to become a Pipeline TD.
                </p>
              </div>
              <div className="__copy_container">
                <p className="__copy_text">
                  My interests include photography, investing and gaming. I
                  enjoy the challenge of learning something new. I prefer
                  brewing coffee more than drinking it. One dahy I want to own a
                  tiny house in the woods becuase I love the outdoors, though
                  I'd definitely make sure I have good internet first. I enjoy
                  the challenge of learning something new.
                </p>
              </div>
            </div>
          }
        />
        {/* SCREEN END */}
        <Screen
          name="Darren Paul"
          offsetX="0px"
          offsetY="0px"
          inner={
            <img
              className="home___image_user"
              src={"/images/profile_picture.jpg"}
              alt="darren paul profile picture"
            />
          }
        />
        {/* SCREEN END */}
      </div>
    </section>
  );
};

export default HomePage;
