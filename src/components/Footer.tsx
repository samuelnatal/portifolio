function Footer() {
  return (
      <footer>
        <div className="socio-icon-dv">
          <a href="https://github.com/samuelnatal" className="socio-icon-a">
            <img
              className="socio-icon"
              src="/images/icon/icons8-github.svg"
              alt="Github icon"
            />
          </a>
          <a href="https://twitter.com/_samuelnatal" className="socio-icon-a">
            <img
              className="socio-icon"
              src="/images/icon/icons8-twitter.svg"
              alt="Twitter icon"
            />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61551547732470"
            className="socio-icon-a"
          >
            <img
              className="socio-icon"
              src="/images/icon/icons8-facebook.svg"
              alt="Facebook icon"
            />
          </a>

          <a
            href="https://www.instagram.com/_samuelnatal/"
            className="socio-icon-a"
          >
            <img
              className="socio-icon"
              src="/images/icon/icons8-instagram.svg"
              alt="Instagram icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-natal-96b53b264/"
            className="socio-icon-a"
          >
            <img
              className="socio-icon"
              src="/images/icon/icons8-linkedin.svg"
              alt="Linkedin icon"
            />
          </a>
          <a
            href="https://www.reddit.com/user/samuelnatal"
            className="socio-icon-a"
          >
            <img
              className="socio-icon"
              src="/images/icon/icons8-reddit-48.png"
              alt="Reddit icon"
            />
          </a>
        </div>
        <p className="copyright-p">
          &copy;&nbsp;{new Date().getFullYear()} &nbsp;&nbsp;&nbsp;samuelnatal.com
        </p>
      </footer>
  );
}

export default Footer;
