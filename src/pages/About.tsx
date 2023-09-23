import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  var infoBtnCounter = 0;

  var nextBtn = document.getElementById("next");
  var prevBtn = document.getElementById("prev");
  var infoArray = Array.from(document.getElementsByClassName("info-div"));
  var progArray = Array.from(document.getElementsByClassName("progress-bar"));
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function handleNext() {
    if (screenWidth < 851 && infoBtnCounter == 1) {
      Array.from(
        document.getElementsByClassName("info-wrapper")
      )[0]?.setAttribute("style", "height: 140vh;");
    } else {
      Array.from(
        document.getElementsByClassName("info-wrapper")
      )[0]?.setAttribute("style", "height: 71vh;");
    }

    nextBtn = document.getElementById("next");
    prevBtn = document.getElementById("prev");
    infoArray = Array.from(document.getElementsByClassName("info-div"));
    progArray = Array.from(document.getElementsByClassName("progress-bar"));

    infoBtnCounter++;

    progArray[infoBtnCounter]?.setAttribute(
      "style",
      "visibility: visible; animation: 3s ease-out 0s 1 exp; width: 25%;"
    );
    if (prevBtn && infoBtnCounter <= 3) {
      prevBtn.style.display = "inline-block";
      for (let i = 0; i < 4; i++) {
        infoArray[i]?.setAttribute(
          "style",
          i === infoBtnCounter ? "display: inline-block;" : "display: none;"
        );
      }
    }

    if (nextBtn && infoBtnCounter == 3) {
      nextBtn.style.display = "none";
    }
  }

  function handlePrev() {
    if (screenWidth < 851 && infoBtnCounter == 3) {
      Array.from(
        document.getElementsByClassName("info-wrapper")
      )[0]?.setAttribute("style", "height: 140vh;");
    } else {
      Array.from(
        document.getElementsByClassName("info-wrapper")
      )[0]?.setAttribute("style", "height: 71vh;");
    }

    nextBtn = document.getElementById("next");
    prevBtn = document.getElementById("prev");
    infoArray = Array.from(document.getElementsByClassName("info-div"));
    progArray = Array.from(document.getElementsByClassName("progress-bar"));
    progArray[infoBtnCounter]?.setAttribute("style", "visibility: hidden;");
    infoBtnCounter--;

    if (nextBtn && infoBtnCounter >= 0) {
      nextBtn.style.display = "inline-block";
      for (let i = 0; i < 4; i++) {
        infoArray[i]?.setAttribute(
          "style",
          i === infoBtnCounter ? "display: inline-block;" : "display: none;"
        );
      }
    }

    if (prevBtn && infoBtnCounter == 0) {
      prevBtn.style.display = "none";
    }
  }

  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Get to know me more through my skills, educational background, projects .etc" />
      </Helmet>
      <NavBar />
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ marginTop: "6em" }}
      >
        <div className="progress-bar active bg-info" style={{ width: "25%" }}>
          25%
        </div>
        <div className="progress-bar bg-info">50%</div>
        <div className="progress-bar bg-info">75%</div>
        <div className="progress-bar bg-info">100%</div>
      </div>

      <div className="info-wrapper">
        <div className="info-div active">
          <h3 className="info-h">Personal information</h3>
          <div className="p-info-dv">
            <label className="p-info-label">Name</label>
            <p className="p-info-paragrap">Samuel Natal</p>
            <label className="p-info-label">Email</label>
            <p className="p-info-paragrap">contact@samuelnatal.com</p>
            <label className="p-info-label">Phone</label>
            <p className="p-info-paragrap">+255 767 952016</p>
            <label className="p-info-label">Nationality</label>
            <p className="p-info-paragrap">Tanzanian</p>
            <label className="p-info-label">Career</label>
            <p className="p-info-paragrap">Software developer</p>
            <label className="p-info-label">Hobby</label>
            <p className="p-info-paragrap">Reading books</p>
            <label className="p-info-label">Languages</label>
            <p className="p-info-paragrap">English, Swahili</p>
          </div>
        </div>
        <div className="info-div">
          <h3 className="info-h">Education background</h3>
          <div className="edu-info-dv">
            <ul className="education-ul">
              <li>
                <h5>Bachelor of Science in Information Technology (IT)</h5>
                <p>
                  2020 - 2023 .At Institute of Finance Management (IFM), Posta,
                  Dar es Salaam
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="info-div">
          <h3 className="info-h">Skills</h3>
          <ul className="skills-ul">
            <li className="skills-li">
              <h5 className="skills-h">Programming languages</h5>
              <ul>
                <li>Java</li>
                <li>PHP</li>
                <li>Javascript</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>C</li>
              </ul>
            </li>
            <li className="skills-li">
              <h5 className="skills-h">Frameworks</h5>
              <ul>
                <li>React.js</li>
                <li>Laravel</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
              </ul>
            </li>
            <li className="skills-li db-li">
              <h5 className="skills-h">Database</h5>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </li>
            <li className="skills-li others">
              <h5 className="skills-h">Others</h5>
              <ul>
                <li>UX and UI design</li>
                <li>SE Optimization</li>
                <li>System design</li>
                <li>Database design</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="info-div">
          <h3 className="info-h">Experience</h3>
          <div className="exp-dv">
            <p className="exp-p">
              During my learning journey, i created several projects to sharpen
              my knowledge, skills and gain more experience. I was able to apply
              various tools and technologies such as different programming
              languages, frameworks and database technologies to build web and
              mobile applications.You can visit my portifolio page and view my
              projects in more details.
            </p>
            <a href="/portifolios">
              <button className="btn btn-outline-info exp-btn">
                Go to projects' portifolio
              </button>
            </a>
            <a
              href="/images/file/samuels' resume.pdf"
              download="samuel natal's resume"
            >
              <button className="btn btn-info exp-btn">
                Download my resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="abt-nav-btns">
        <img
          onClick={handlePrev}
          id="prev"
          src="/images/img/prev.png"
          className=""
          alt="Previuos button icon"
        />
        <img
          onClick={handleNext}
          id="next"
          src="/images/img/next.png"
          className=""
          alt="Next button icon"
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
