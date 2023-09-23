import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MpProject: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="project-container">
        <div className="project-dv">
          <img src="/images/img/mp/mp-home.PNG" className="project-img" alt="Movie point homepage screenshoot" />
          <p className="mt-5 mb-5">
            Movie Point is an online seat booking web application project
            designed for movie cinemas and theaters. This application allows
            users to access a wide range of features, including viewing
            scheduled movie synopses, trailers, ratings, and reviews. Moreover,
            it provides seamless support for online payment systems, enabling
            users to conveniently purchase movie tickets from the comfort of
            their own devices.
          </p>
          <img
            src="/images/img/mp/mp-enjoy.PNG"
            className="project-img"
            alt="More service cards"
          />

          <p className="mt-5 mb-5">
            The app has a user-friendly feature that allows users to book seats
            online. The booking process provides a good user experience visual
            representation of seat arrangements within the specific theater,
            relative to the screen where the chosen movie will be showcased. In
            addition, online payment functionality has been integrated,
            empowering users to conveniently purchase their seat tickets online.
          </p>
          <img
            src="/images/img/mp/mp-ticket.PNG"
            className="project-img"
            alt="Ticket booking page screenshoot"
          />
          <p className="mt-5 mb-5">
            The app displays the movie synopsis of a particular film to the
            user, providing essential information about the movie. This includes
            details such as the movie's title, director, duration, ticket price,
            and the theater where the movie will be screened.
          </p>

          <img
            src="/images/img/mp/mp-synopsis.PNG"
            className="project-img"
            alt="Synopsis page screenshoot"
          />
          <p className="mt-5 mb-5">
            Users can filter the list of available scheduled movies based on
            various criteria, including the showtime at the theater, the
            location of the theater where the movie will be screened and its
            genre.
          </p>
          <img src="/images/img/mp/mp-list.PNG" className="project-img" alt="Movies list page screenshoot" />
          <p className="mt-5 mb-5">
            There's also an administration panel for the comprehensive
            management of the entire business system. This includes tasks such
            as tracking and maintaining customer records, recording bookings and
            payments, uploading movie information into the system, managing
            movie schedules, and overseeing various other operations related to
            the movie theatre business.
          </p>

          <h6>Technologies used in this project</h6>
          <ul>
            <li>AJAX</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
          </ul>

          <a href="  https://mp.samuelnatal.com">
            <button className="btn btn-outline-info exp-btn mb-5">
              Go to MP website
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MpProject;
