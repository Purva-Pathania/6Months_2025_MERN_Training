export default function About(){
    return(
        <>
  {/* Hello world */}
  <div className="container-xxl bg-white p-0">
    {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">JobEntry</h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link active">
            About
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="job-list.html" className="dropdown-item">
                Job List
              </a>
              <a href="job-detail.html" className="dropdown-item">
                Job Detail
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="category.html" className="dropdown-item">
                Job Category
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a
          href=""
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Post A Job
          <i className="fa fa-arrow-right ms-3" />
        </a>
      </div>
    </nav>
    {/* Navbar End */}
    {/* Header End */}
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          About Us
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Header End */}
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 about-bg rounded overflow-hidden">
              <div className="col-6 text-start">
                <img className="img-fluid w-100" src="/assets/img/about-1.jpg" />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid"
                  src="/assets/img/about-2.jpg"
                  style={{ width: "85%", marginTop: "15%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid"
                  src="/assets/img/about-3.jpg"
                  style={{ width: "85%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid w-100" src="/assets/img/about-4.jpg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">
              We Help To Get The Best Job And Find A Talent
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Tempor erat elitr rebum at clita
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Aliqu diam amet diam et eos
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Company</h5>
            <a className="btn btn-link text-white-50" href="">
              About Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Contact Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Our Services
            </a>
            <a className="btn btn-link text-white-50" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
              Terms &amp; Condition
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50" href="">
              About Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Contact Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Our Services
            </a>
            <a className="btn btn-link text-white-50" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
              Terms &amp; Condition
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
      <i className="bi bi-arrow-up" />
    </a>
  </div>

</>
    )
}