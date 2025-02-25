import { Link } from "react-router-dom";
export default function Contact(){
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
                <Link to="/about" className="nav-item nav-link">
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
                <Link to="contact" className="nav-item nav-link active">
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
            Contact Us
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
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="contact-item">
                <div className="pb-5">
                  <h4 className="text-primary">Contact Us</h4>
                  <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                  <p className="mb-0">
                    The contact form is currently inactive. Get Link functional and
                    working contact form with Ajax &amp; PHP in Link few minutes. Just
                    copy and paste the files, add Link little code and you're done.{" "}
                    <Link
                      className="text-primary fw-bold"
                      to="https://htmlcodex.com/contact-form"
                    >
                      Download Now
                    </Link>
                    .
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-4">
                    <i className="fa fa-home text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Addresses</h4>
                    <p className="mb-0">123 ranking Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-2">
                    <i className="fa fa-phone-alt text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Mobile</h4>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-2">
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Email</h4>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="project"
                        placeholder="Project"
                      />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave Link message here"
                        id="message"
                        style={{ height: 160 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded h-100">
                <iframe
                  className="rounded-top w-100"
                  style={{ height: 500, marginBottom: "-6px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="d-flex align-items-center justify-content-center bg-primary rounded-bottom p-4">
                  <div className="d-flex">
                    <Link
                      className="btn btn-dark btn-lg-square rounded-circle me-2"
                      to=""
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      className="btn btn-dark btn-lg-square rounded-circle mx-2"
                      to=""
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      className="btn btn-dark btn-lg-square rounded-circle mx-2"
                      to=""
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link
                      className="btn btn-dark btn-lg-square rounded-circle mx-2"
                      to=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
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