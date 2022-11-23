import React from "react";
import "./project.css";
import IMG1 from "../../assets/fraud.png";
import IMG2 from "../../assets/eth.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Credit Card Fraud Detection",
    github:
      "https://github.com/hungyichang19980105/CREDIT-CARD-FRAUD-DETECTION",
  },
  {
    id: 2,
    image: IMG2,
    title: "Web3 Blockchain App",
    github: "https://github.com/hungyichang19980105/web3",
  },
];

const Project = () => {
  return (
    <section id="portfolio">
      <h5>My Personal</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-github">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
