import { Link } from "react-router-dom";
import PageTitle from "../Layouts/PageTitle";
export default function Home(){
    return(
      <>
      <main className="main">
      {/* Carousel Start */}
        <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-1">
            <img src="/assets/img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
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
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: "1.7s" }}
                to="#"
              >
                Apply Now
              </Link>
              <Link
                className="btn btn-dark rounded-pill py-3 px-5 mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: "1.7s" }}
                to="#"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="header-carousel-item mx-auto">
          <div className="header-carousel-item-img-2">
            <img src="/assets/img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
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
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                to="#"
              >
                Apply Now
              </Link>
              <Link className="btn btn-dark rounded-pill py-3 px-5 mb-4" to="#">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-3">
            <img src="/assets/img/carousel-3.jpg" className="img-fluid w-100" alt="Image" />
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
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                to="#"
              >
                Apply Now
              </Link>
              <Link className="btn btn-dark rounded-pill py-3 px-5 mb-4" to="#">
                Read More
              </Link>
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
                  src="/assets/img/about-3.png"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="/assets/img/about-2.jpg"
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
                atque nihil unde quisquam, deleniti illo Link. Quam harum laboriosam,
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
                  <Link to="#" className="btn btn-primary rounded-pill py-3 px-5">
                    Discover More
                  </Link>
                </div>
                <div className="col-xl-7 mb-5">
                  <div className="about-customer d-flex position-relative">
                    <img
                      src="/assets/img/customer-img-1.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 0, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-2.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 45, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-3.jpg"
                      className="img-fluid btn-xl-square position-absolute"
                      style={{ left: 90, top: 0 }}
                      alt="Image"
                    />
                    <img
                      src="/assets/img/customer-img-1.jpg"
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
                    src="/assets/img/service-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Business Strategy
                      Invesments
                    </Link>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                      Read More
                    </Link>
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
                    src="/assets/img/service-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Consultancy &amp;
                      Advice
                    </Link>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                      Read More
                    </Link>
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
                    src="/assets/img/service-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Invesments Planning
                    </Link>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                      Read More
                    </Link>
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
                    src="/assets/img/service-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2" /> Private Client
                      Investment
                    </Link>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <Link className="btn btn-light rounded-pill py-2 px-4" to="#">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                to="#"
              >
                Services More
              </Link>
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
                  src="/assets/img/projects-1.jpg"
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
                  <Link to="#" className="h4">
                    Business Strategy And Investment Planning Growth Consulting
                  </Link>
                  <div className="pt-4">
                    <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.3s">
              <div className="project-img">
                <img
                  src="/assets/img/projects-1.jpg"
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
                  <Link to="#" className="h4">
                    Product Sailing Marketing Strategy For Improve Business
                  </Link>
                  <div className="pt-4">
                    <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item h-100">
              <div className="project-img">
                <img
                  src="/assets/img/projects-1.jpg"
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
                  <Link to="#" className="h4">
                    Product Sailing Marketing Strategy For Improve Business
                  </Link>
                  <div className="pt-4">
                    <Link className="btn btn-light rounded-pill py-3 px-5" to="#">
                      Read More
                    </Link>
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
                style={{ backgroundImage: "url(/assets/img/bg.png)" }}
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
                    src="/assets/img/blog-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <Link
                      to="/assets/img/blog-1.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </Link>
                  </div>
                </div>
                <div className="my-4">
                  <Link to="#" className="h4">
                    Revisiting Your Investment &amp; Distribution Goals
                  </Link>
                </div>
                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                  Explore More
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(/assets/img/bg.png)" }}
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
                    src="/assets/img/blog-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <Link
                      to="/assets/img/blog-2.jpg"
                      data-lightbox="blog-2"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </Link>
                  </div>
                </div>
                <div className="my-4">
                  <Link to="#" className="h4">
                    Dimensional Fund Advisors Interview with Director
                  </Link>
                </div>
                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                  Explore More
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(/assets/img/bg.png)" }}
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
                    src="/assets/img/blog-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="blog-plus-icon">
                    <Link
                      to="/assets/img/blog-3.jpg"
                      data-lightbox="blog-3"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </Link>
                  </div>
                </div>
                <div className="my-4">
                  <Link to="#" className="h4">
                    Interested in Giving Back this year? Here are some tips
                  </Link>
                </div>
                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                  Explore More
                </Link>
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
                    src="/assets/img/team-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
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
                    src="/assets/img/team-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
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
                    src="/assets/img/team-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
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
                    src="/assets/img/team-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div className="team-icon">
                    <Link
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      to=""
                    >
                      <i className="fas fa-share-alt" />
                    </Link>
                    <div className="team-icon-share">
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
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
                <Link
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  to="#"
                >
                  Read All Reviews <i className="fas fa-arrow-right ms-2" />
                </Link>
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
                        src="/assets/img/testimonial-1.jpg"
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
                        src="/assets/img/testimonial-2.jpg"
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
                        src="/assets/img/testimonial-3.jpg"
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
                      What Does Link Financial Advisor Do?
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
                  src="/assets/img/faq-img.jpg"
                  className="img-fluid rounded w-100"
                  alt="Image"
                />
                <Link
                  className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
                  to="#"
                >
                  Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ End */}
      </main>
    </>
    
    )
}