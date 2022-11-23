import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id="skills">
      <h5>What skills I have</h5>
      <h2>Technical Skills</h2>
      <div className="container skill__container">
        <div className="skill__programming">
          <h3>Programming Langauges</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>TypeScript</h4>
            </article>
          </div>
        </div>
        <div className="skill__webtech">
          <h3>Web Developments</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>HTML5/CSS3</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>jQuery</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>React/Redux</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>JSON/JSX</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>SASS/SCSS</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Webpack/Babel</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>React-Router</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Flask</h4>
            </article>
          </div>
        </div>
        <div className="skill__data_version">
          <h3>Database & Version Controlls</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Git</h4>
            </article>
          </div>
        </div>
        <div className="skill__testing_methods">
          <h3>Testing & Methodologies</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Jest</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Storybook</h4>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <h4>Agile/Scrum</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
