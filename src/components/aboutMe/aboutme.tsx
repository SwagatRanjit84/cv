import * as React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import "./aboutme.scss";
const AboutMe: React.FunctionComponent = () => {
  return (
    <div className="main-container">
      <div className="header">About Me</div>
      <div className="info">
        Hey, I am Swagat. I am a developer living in Kathmandu. I love science,
        technology, music, and programming. Strong engineering professional with
        a Bachelor of Computer Science and Engineering. I’m trying to be good at
        – go ahead, catch them if you like.{" "}
      </div>
    </div>
  );
};

export default AboutMe;
