import { Link } from "react-router-dom";
export default function Home(){
    return(
      <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Investa
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <a href="project.html" className="nav-item nav-link">
                  Projects
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="blog.html" className="dropdown-item">
                      Our Blog
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="faqs.html" className="dropdown-item">
                      FAQs
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <button
                  className="btn btn-primary btn-md-square mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search" />
                </button>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
                >
                  Start Investa
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="exampleModalLabel">
                Search by keyword
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
      {/* Carousel Start */}
      <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-1">
            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-start p-3">
              <h1
                className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.3s"
                style={{ animationDelay: "1.3s" }}
              >
                The most prestigious Investments company in worldwide.
              </h1>
              <p
                className="mb-5 fs-5 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: "1.5s" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: "1.7s" }}
                href="#"
              >
                Apply Now
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-5 mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: "1.7s" }}
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="header-carousel-item mx-auto">
          <div className="header-carousel-item-img-2">
            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-center p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">
                The most prestigious Investments company in worldwide.
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                href="#"
              >
                Apply Now
              </a>
              <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-3">
            <img src="img/carousel-3.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-end p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">
                The most prestigious Investments company in worldwide.
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                href="#"
              >
                Apply Now
              </a>
              <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  src="img/about-3.png"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="img/about-2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                The most Profitable Investments company in worldwide.
              </h1>
              <p className="text ps-4 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                atque nihil unde quisquam, deleniti illo a. Quam harum laboriosam,
                laudantium, deleniti perferendis voluptates ex non laborum libero
                magni, minus illo!
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" /> Strategy
                    &amp; Consulting
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" /> Business
                    Process
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Marketing Rules
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Partnerships
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-xl-5">
                  <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                    Discover More
                  </a>
                </div>
                <div className="col-xl-7 mb-5">
                  <div className="about-customer d-flex position-relative">
                    <img
                      src="img/customer-img-1.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 0, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="img/customer-img-2.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 45, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="img/customer-img-3.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 90, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="img/customer-img-1.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 135, top: 0 }}
                      alt="Image"
                    />
                    <div
                      className="position-absolute text-dark"
                      style={{ left: 220, top: 10 }}
                    >
                      <p className="mb-0">5m+ Trusted</p>
                      <p className="mb-0">Global Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        32
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        k+
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        21
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        97
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: 25 }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Services</h4>
            <h1 className="display-4">
              {" "}
              Offering the Best Consulting &amp; Investa Services
            </h1>
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Business Strategy
                      Invesments
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Consultancy &amp;
                      Advice
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Invesments Planning
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Private Client
                      Investment
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <a
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                href="#"
              >
                Services More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Project Start */}
      <div className="container-fluid project">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Projects</h4>
            <h1 className="display-4">Explore Our Latest Projects</h1>
          </div>
          <div
            className="project-carousel owl-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.1s">
              <div className="project-img">
                <img
                  src="img/projects-1.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-chart-line fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">Business Growth</p>
                  <a href="#" className="h4">
                    Business Strategy And Investment Planning Growth Consulting
                  </a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.3s">
              <div className="project-img">
                <img
                  src="img/projects-1.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-signal fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">Marketing Strategy</p>
                  <a href="#" className="h4">
                    Product Sailing Marketing Strategy For Improve Business
                  </a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item h-100">
              <div className="project-img">
                <img
                  src="img/projects-1.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-signal fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">Marketing Strategy</p>
                  <a href="#" className="h4">
                    Product Sailing Marketing Strategy For Improve Business
                  </a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
      {/* Blog Start */}
      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Blogs</h4>
            <h1 className="display-4">Latest Articles &amp; News from the Blogs</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Investment</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D. Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-1.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="#" className="h4">
                    Revisiting Your Investment &amp; Distribution Goals
                  </a>
                </div>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Explore More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Business</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D. Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-2.jpg"
                      data-lightbox="blog-2"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="#" className="h4">
                    Dimensional Fund Advisors Interview with Director
                  </a>
                </div>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Explore More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Consulting</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D. Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-3.jpg"
                      data-lightbox="blog-3"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="#" className="h4">
                    Interested in Giving Back this year? Here are some tips
                  </a>
                </div>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Team Start */}
      <div className="container-fluid team pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Team</h4>
            <h1 className="display-4">Our Investa Company Dedicated Team Member</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="img/team-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href=""
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                    <div className="team-icon-share">
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="img/team-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href=""
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                    <div className="team-icon-share">
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="img/team-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href=""
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                    <div className="team-icon-share">
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src="img/team-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href=""
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                    <div className="team-icon-share">
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">Mark D. Brock</h4>
                    <p className="text-muted mb-0">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-fluid testimonial bg-light py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 rounded">
                <h4 className="text-primary">Our Feedbacks </h4>
                <h1 className="display-4 mb-4">Clients are Talking</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  atque soluta unde itaque. Consequatur quam odit blanditiis harum
                  veritatis porro.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="#"
                >
                  Read All Reviews <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="testimonial-carousel owl-carousel wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div
                  className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                      quo recusandae nemo? Molestiae doloribus iure,
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="img/testimonial-1.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                      quo recusandae nemo? Molestiae doloribus iure,
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="img/testimonial-2.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                      quo recusandae nemo? Molestiae doloribus iure,
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="img/testimonial-3.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          border: "1px solid",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* FAQ Start */}
      <div className="container-fluid faq py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="pb-5">
                <h4 className="text-primary">FAQs</h4>
                <h1 className="display-4">Get the Answers to Common Questions</h1>
              </div>
              <div className="accordion bg-light rounded p-4" id="accordionExample">
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button text-dark fs-5 fw-bold rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseTOne"
                    >
                      What Does a Financial Advisor Do?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                        nemo impedit, sapiente quis illo quia nulla atque maxime
                        fuga minima ipsa quae cum consequatur, sit, delectus
                        exercitationem odit officiis maiores! Neque, quidem corrupti
                        modi architecto eos saepe incidunt dignissimos rerum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What industries do you specialize in?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                        nemo impedit, sapiente quis illo quia nulla atque maxime
                        fuga minima ipsa quae cum consequatur, sit, delectus
                        exercitationem odit officiis maiores! Neque, quidem corrupti
                        modi architecto eos saepe incidunt dignissimos rerum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-4">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can you guarantee for growth?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                        nemo impedit, sapiente quis illo quia nulla atque maxime
                        fuga minima ipsa quae cum consequatur, sit, delectus
                        exercitationem odit officiis maiores! Neque, quidem corrupti
                        modi architecto eos saepe incidunt dignissimos rerum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What makes your business plans so special?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                        nemo impedit, sapiente quis illo quia nulla atque maxime
                        fuga minima ipsa quae cum consequatur, sit, delectus
                        exercitationem odit officiis maiores! Neque, quidem corrupti
                        modi architecto eos saepe incidunt dignissimos rerum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="faq-img RotateMoveRight rounded">
                <img
                  src="img/faq-img.jpg"
                  className="img-fluid rounded w-100"
                  alt="Image"
                />
                <a
                  className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
                  href="#"
                >
                  Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ End */}
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Newsletter</h4>
                  <p className="mb-3">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit consectetur
                    adipiscing elit.
                  </p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Home
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Services
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> About Us
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Latest Projects
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> testimonial
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Our Team
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="">
                  <i className="fa fa-map-marker-alt me-2" /> 123 Street, New York,
                  USA
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-phone me-2" /> +012 345 67890
                </a>
                <a href="" className="mb-3">
                  <i className="fas fa-print me-2" /> +012 345 67890
                </a>
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-light btn-md-square me-0" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <a href="#" className="text-body">
                    Revisiting Your Investment &amp; Distribution Goals
                  </a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <a href="#" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </a>
                </div>
                <div className="footer-btn text-start">
                  <a href="#" className="btn btn-light rounded-pill px-4">
                    View All Post <i className="fa fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-primary">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a
                className="border-bottom text-primary"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a
                className="border-bottom text-primary"
                href="https://themewagon.com"
              >
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
    </>
    
    )
}