import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Portifolios: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>My portifolio</title>
        <meta
          name="description"
          content="A list of notable projects that i have gone through as part of my career."
        />
      </Helmet>
      <NavBar />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide "
        style={{ paddingTop: "5em" }}
      >
        <div className="carousel-indicators" style={{ zIndex: "0" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="corousel-img-container">
              <img
                src="/images/img/artbox/smartmockups_cab.jpg"
                className="portifolio-wallpaper"
                alt="Artisangalleryhub devices' screen desplay"
              />
            </div>
            <div className="carousel-caption">
              <h5>E-commerce web application</h5>
              <a href="/artisan">
                <button className="btn btn-outline-warning">
                  View project
                </button>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              id="vicoba_img"
              src="/images/img/vicoba/app1.png"
              className="portifolio-wallpaper"
              alt="Vicoba app devices' screen desplay"
            />
            <div className="carousel-caption">
              <h5>Village community bank app</h5>
              <a href="/vicoba">
                <button className="btn btn-outline-warning">
                  View project
                </button>
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/images/img/mp/smartmockups_mp.jpg"
              className="portifolio-wallpaper"
              alt="Movie point devices' screen desplay"
            />
            <div className="carousel-caption">
              <h5>Movie theatres's online ticket booking</h5>
              <a href="/mp">
                <button className="btn btn-outline-warning">
                  View project
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ zIndex: "0" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Portifolios;
