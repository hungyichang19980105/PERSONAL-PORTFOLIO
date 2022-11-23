import React from "react";
import "./about.css";
import CV from "../../assets/resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <h1>
          Hi I'm <span className="orange">Michael Chang</span>
        </h1>
        <p>
          I am a software engineer but mainly a front-end developer. I like to
          build applications that users can see and interact with. I also love
          to learn new technologies and try to leverage my skills to make an
          impact to the world.
        </p>
        <div className="about__links">
          <a href={CV} className="btn">
            Download Resume
          </a>
          <a href="https://github.com/hungyichang19980105" className="btn">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
