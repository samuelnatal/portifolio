import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="This is the home page of my portifolio website."
        />
        <link
          rel="canonical"
          href="https://samuelnatal.com/"
        />
      </Helmet>
      <NavBar />
      <div className="wrapper">
        <div className="hlw-cont">
          <img
            src="/images/img/samuel.PNG"
            alt="Samuels' profile image"
            className="profile-img"
          />
          <h1 className="hlw-h">
            Hi !
            <img
              id = "waving-icon"
              src="/images/icon/icons8-waving-hand-dark-skin-tone-48.png"
              alt="Hi icon"
            />
          </h1>
          <p className="intro-p">
            I'm Samuel Natal, an experienced software developer from Tanzania.
            My expertise lies in crafting robust Android and web applications
            that meet specific program specifications and goals <br />
            I'm here to transform your innovative ideas into reality through the
            magic of digital automation. Let's bring your vision to life!
          </p>
        </div>
        <div className="core-values-dv">
          <ul className="value-ul">
            <li>
              Elevate your business with seamless digital automation solutions
              tailored just for you.
            </li>
            <li>
              Your work and time are invaluable, and I prioritize them
              accordingly.
            </li>
            <li>
              Transform your dreams and ideas into vibrant digital realities
              that leave a lasting impression.
            </li>
            <li>
              I craft top-notch applications by employing cutting-edge
              technologies for a premium user experience.
            </li>
            <li>
              Experience dedicated consultation, seamless execution, and
              unwavering support for your projects.
            </li>
            <li>
              Rest assured, I'm committed to ensuring your envisioned goals are
              not just met, but exceeded.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
