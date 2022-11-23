import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section id="work">
      <h5>Professional Work</h5>
      <h2>Experiences</h2>
      <div className="container work__container">
        <article className="work">
          <h2>New York Health + Hospital</h2>
          <div className="work__title">
            <h5>Full Stack Developer</h5>
            <h5>Oct 2021 - Aug 2022</h5>
          </div>
          <p>
            − Worked on an application that collects data from doctors in a file
            or input forms and applies algorithms then output a file and graphs
            to make patient’s data visible and easy to understand.
            <br />
            − Created reusable React components with HTML and TSX for frontend
            UI.
            <br />
            − Integrated application styling using SCSS and Material-UI
            framework.
            <br />
            − Used Typescript to ensure code consistency and maintainability
            <br /> − Coordinated React with Python Flask to handle data in the
            backend.
            <br />
            − Applied clustering and classification algorithms to handle data
            processing in the backend.
            <br />− Performed Unit tests with Jest to unsure desire outputs are
            generated.
          </p>
        </article>
        <article className="work">
          <h2>Full Rich</h2>
          <div className="work__title">
            <h5>Software Engineer</h5>
            <h5>Apr 2020 - Aug 2021</h5>
          </div>
          <p>
            − Designed and developed a financial management application that
            gets data from multiple input forms and applies relative algorithms
            to calculate the risks and show multiple plans as outputs. <br />−
            Developed frontend applications by using React. <br />− Worked with
            backend engineers under agile/scrum methodology and actively
            participated in daily standups <br />− Used React Router to create
            single-page application (SPA) rendered on client side and keep the
            browser URL in sync with what’s rendered on the page. <br />−
            Created react.js reusable components, used JXS with ES6 to define
            components and redux as state management library.
            <br /> − Dispatched the state by using reducers.
            <br /> − Applied unit testing and integrated testing by using Jest
            and React testing library.
          </p>
        </article>
        <article className="work">
          <h2>Chewy</h2>
          <div className="work__title">
            <h5>Frontend Developer</h5>
            <h5>Jan 2019 - Feb 2020</h5>
          </div>
          <p>
            − Built well structured and responsive website that retrieve data
            from the company and show dashboards for analytic uses by React.
            <br /> − Utilized redux and redux tool kit to manage react component
            states for maintaining scalability and code readability.
            <br /> − Built excellent reusable styles with SCSS nesting and
            mixins. − Used React-Router to implement dynamic routing.
            <br /> − Participated in daily scrum meetings and seasonal sprints.
            <br />− Guaranteed reliable collaboration with Git Version control.
            <br />− Tested each function with Jest and React testing library
          </p>
        </article>
        <article className="work">
          <h2>Bose</h2>
          <div className="work__title">
            <h5>Frontend Developer</h5>
            <h5>Nov 2017 - Dec 2018</h5>
          </div>
          <p>
            − Worked on a customer management application to show their account
            summary, order history, subscription list, and their personal
            profile. Customers can manage their shopping history and add/delete
            payment methods.
            <br /> − Utilized modular structure within React application in
            which different functionalities within the application were divided
            into different modules. <br />− Experienced in developing responsive
            website with HTML5, React, Bootstrap, and CSS media queries. <br />−
            Developed a single page and cross-device/cross-browser web
            application for real-time product capacity utilizing React router
            and JavaScript. <br />− Reviewed customer feedback about debugging
            issues, fixed bugs with HTML5, CSS3 and JavaScript codes and worked
            on resolving browser compatibility issues.
            <br /> − Developed application code and unit testing with Jest.
          </p>
        </article>
        <article className="work">
          <h2>Wayfair</h2>
          <div className="work__title">
            <h5>Software Engineer</h5>
            <h5>Apr 2017 - Oct 2017</h5>
          </div>
          <p>
            <br />− Built a fraud detection web application to display user’s
            risk score and their shopping history by HTML, CSS, React, and
            JavaScript. <br />− Wrote SQL to extract the data from Google Big
            Query (GCP) and clean the data before import it into the model.{" "}
            <br />− Used Python to build fraud detection models with LightGBM
            and decision tree methods that achieve an accuracy of 91%.
            <br /> − Utilized Python Flask to retrieve data from the backend to
            pass in the model and display the user information on the website.
            <br /> − Used webpack and babel for bundling. <br />− Made
            responsive website by using Bootstrap and CSS media queries
          </p>
        </article>
      </div>
    </section>
  );
};

export default Work;
