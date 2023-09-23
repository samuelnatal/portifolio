import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ArtisanProject: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="project-container">
        <div className="project-dv">
          <img
            src="/images/img/artbox/a-home.PNG"
            className="project-img"
            alt="Arisan homepage screenshoot"
          />
          <p className="mt-5 mb-5">
            Artisangalleryhub is an e-commerce web application designed for
            advertising and selling art products online. The application
            features a user-friendly and responsive design, ensuring an
            exceptional user experience. Throughout this project, I successfully
            implemented a wide range of core features commonly found in
            e-commerce web applications, including user registration and
            profiles, a comprehensive product catalog, a shopping cart, secure
            payment processing, efficient order management, meticulous inventory
            tracking, powerful search functionality, as well as wishlist and
            favorites management.
          </p>
          <img
            src="/images/img/artbox/a-items.PNG"
            className="List items page screenshoot"
            alt="..."
          />
          <p className="mt-5 mb-5">
            I have developed a robust search engine equipped with advanced
            filters to assist users in swiftly locating products. Users can
            effortlessly search for products by simply entering keywords, and
            the system will promptly retrieve and display all relevant products.
            Additionally, the system offers a variety of filtering options,
            allowing users to refine their searches based on product price,
            orientation, size, and category.
          </p>
          <img
            src="/images/img/artbox/a-filter.PNG"
            className="project-img"
            alt="Filter page screenshoot"
          />
          <p className="mt-5 mb-5">
            The product cart is among the key features that I have incorporated
            into this project. It enables online customers to effortlessly add
            items for purchase, manage quantities, remove selected items from
            the cart, and view a comprehensive cost summary for all items in the
            cart. Users are then guided to proceed with the checkout process.
          </p>
          <img
            src="/images/img/artbox/a-cart.PNG"
            className="project-img"
            alt="Cart page screenshoot"
          />
          <p className="mt-5 mb-5">
            A beautfull designed product page that offers precise information
            about a particular work of art.It provides details such as such as
            size, price, category, similar art works as well as the artist
            responsible for creating that art.
          </p>
          <img
            src="/images/img/artbox/a-more.PNG"
            className="project-img"
            alt="More art details' page screenshoot"
          />
          <p className="mt-5 mb-5">
            I successfully integrated the app with a third-party payment system,
            enabling online payments for customers interested in purchasing
            products on the platform. The checkout page features a billing
            address form, various payment method options, and an order summary
            that details the total cost and the list of selected products for
            purchase.
          </p>

          <img
            src="/images/img/artbox/a-checkout.PNG"
            className="project-img"
            alt="Checkout page screenshoot"
          />
          <p className="mt-5 mb-5">
            This project encompassed a range of additional features also,
            including data analytics and reporting, social media integration,
            newsletter and email marketing capabilities, scalability
            enhancements, feedback and reviews systems, as well as an
            administrator panel for business management operations.
          </p>

          <h6>Technologies used in this project</h6>
          <ul>
            <li>React.js</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>REST APIS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
          </ul>

          <a href="https://artisangalleryhub.com/">
            <button className="btn btn-outline-info exp-btn mb-5">
              Visit artisangalleryhub website
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtisanProject;
