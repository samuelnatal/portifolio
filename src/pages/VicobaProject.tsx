import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const VicobaProject: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="project-container">
        <div className="project-dv">
          <img
            src="/images/img/vicoba/app1.png"
            className="project-img"
            alt="Vicoba app screens"
          />
          <p className="mt-5 mb-5">
            Vicoba App is an Android mobile application that I have developed
            specifically for village community banks. Its purpose is to
            streamline and manage their activities, ultimately delivering
            substantial benefits to VICOBA, including cost-effectiveness,
            increased efficiency, and improved effectiveness. I designed the app
            to seamlessly integrate with the leadership structure and core
            operational activities commonly found in most village community
            banks. It offers support for essential tasks, such as member
            management, record-keeping, and a range of transaction operations,
            including fund contributions, share purchases, loan requests, and
            debt payments.
          </p>
          <img
            src="/images/img/vicoba/app2.png"
            className="project-img"
            alt="Vicoba app screens"
          />
          <p className="mt-5 mb-5">
            Moreover, the app support the leadership structure comprising a
            chairperson, accountant, and secretary. Another notable features of
            the App is its integration with third-party digital money systems to
            enable users to securely make money transaction directly from the
            app, eliminating the need for manual transactions involving physical
            cash or vulnerable storage methods.
          </p>
          <img
            src="/images/img/vicoba/app3.png"
            className="project-img"
            alt="Vicoba app screens"
          />
          <h6 style={{ paddingTop: "6%" }}>
            Technologies used in this project
          </h6>
          <ul>
            <li>Jetpack compose</li>
            <li>Kotlin</li>
            <li>PostgreSQL</li>
            <li>REST APIS</li>
            <li>Javascript</li>
          </ul>
          <a href="https://github.com/sam-natal/vicoba">
            <button className="btn btn-outline-info exp-btn mb-5">
              Vicoba App project on github
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VicobaProject;
