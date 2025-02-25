import { Link } from "react-router-dom";

export default function About(){
    return(
      <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </Link>
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </Link>
                <Link to="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in text-white" />
                </Link>
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
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Investa
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </Link>
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
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link active">
                  About
                </Link>
                <Link to="/services" className="nav-item nav-link">
                  Services
                </Link>
                <Link to="/project" className="nav-item nav-link">
                  Projects
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/blog" className="dropdown-item">
                      Our Blog
                    </Link>
                    <Link to="/team" className="dropdown-item">
                      Our Team
                    </Link>
                    <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/faqs" className="dropdown-item">
                      FAQs
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <button
                  className="btn btn-primary btn-md-square mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search" />
                </button>
                <Link
                  to="#"
                  className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
                >
                  Start Investa
                </Link>
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
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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
      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
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
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Home
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Services
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> About Us
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Latest Projects
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> testimonial
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Our Team
                </Link>
                <Link to="#">
                  <i className="fas fa-angle-right me-2" /> Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <Link to="">
                  <i className="fa fa-map-marker-alt me-2" /> 123 Street, New York,
                  USA
                </Link>
                <Link to="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </Link>
                <Link to="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </Link>
                <Link to="">
                  <i className="fas fa-phone me-2" /> +012 345 67890
                </Link>
                <Link to="" className="mb-3">
                  <i className="fas fa-print me-2" /> +012 345 67890
                </Link>
                <div className="d-flex align-items-center">
                  <Link className="btn btn-light btn-md-square me-2" to="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="btn btn-light btn-md-square me-2" to="">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="btn btn-light btn-md-square me-2" to="">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link className="btn btn-light btn-md-square me-0" to="">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <Link to="#" className="text-body">
                    Revisiting Your Investment &amp; Distribution Goals
                  </Link>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <Link to="#" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </Link>
                </div>
                <div className="footer-btn text-start">
                  <Link to="#" className="btn btn-light rounded-pill px-4">
                    View All Post <i className="fa fa-arrow-right ms-1" />
                  </Link>
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
                <Link to="#" className="border-bottom text-primary">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <Link
                className="border-bottom text-primary"
                to="https://htmlcodex.com"
              >
                HTML Codex
              </Link>{" "}
              Distributed By{" "}
              <Link
                className="border-bottom text-primary"
                to="https://themewagon.com"
              >
                ThemeWagon
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <Link to="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </Link>
    </>
    
    )
}