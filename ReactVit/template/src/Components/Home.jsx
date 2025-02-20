import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
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
        <Link to={"/"} className="nav-item nav-link active">
          Home
        </Link>
        <Link to={"/about"} className="nav-item nav-link">
          About
        </Link>
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
        <Link to={"/contact"} className="nav-item nav-link">
          Contact
        </Link>
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
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="/assets/img/carousel-1.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(43, 57, 64, .5)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h1 className="display-3 text-white animated slideInDown mb-4">
                  Find The Perfect Job That You Deserved
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <a
                  href=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Search A Job
                </a>
                <a
                  href=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Find A Talent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="/assets/img/carousel-2.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(43, 57, 64, .5)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h1 className="display-3 text-white animated slideInDown mb-4">
                  Find The Best Startup Job That Fit You
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <a
                  href=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Search A Job
                </a>
                <a
                  href=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Find A Talent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Search Start */}
  <div
    className="container-fluid bg-primary mb-5 wow fadeIn"
    data-wow-delay="0.1s"
    style={{ padding: 35 }}
  >
    <div className="container">
      <div className="row g-2">
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Keyword"
              />
            </div>
            <div className="col-md-4">
              <select className="form-select border-0">
                <option selected="">Category</option>
                <option value={1}>Category 1</option>
                <option value={2}>Category 2</option>
                <option value={3}>Category 3</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select border-0">
                <option selected="">Location</option>
                <option value={1}>Location 1</option>
                <option value={2}>Location 2</option>
                <option value={3}>Location 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-dark border-0 w-100">Search</button>
        </div>
      </div>
    </div>
  </div>
  {/* Search End */}
  {/* Category Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Explore By Category
      </h1>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
            <h6 className="mb-3">Marketing</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-headset text-primary mb-4" />
            <h6 className="mb-3">Customer Service</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-user-tie text-primary mb-4" />
            <h6 className="mb-3">Human Resource</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-tasks text-primary mb-4" />
            <h6 className="mb-3">Project Management</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-chart-line text-primary mb-4" />
            <h6 className="mb-3">Business Development</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-hands-helping text-primary mb-4" />
            <h6 className="mb-3">Sales &amp; Communication</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-book-reader text-primary mb-4" />
            <h6 className="mb-3">Teaching &amp; Education</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <a className="cat-item rounded p-4" href="">
            <i className="fa fa-3x fa-drafting-compass text-primary mb-4" />
            <h6 className="mb-3">Design &amp; Creative</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Category End */}
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
  {/* Jobs Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Job Listing
      </h1>
      <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li className="nav-item">
            <a
              className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
              data-bs-toggle="pill"
              href="#tab-1"
            >
              <h6 className="mt-n1 mb-0">Featured</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex align-items-center text-start mx-3 pb-3"
              data-bs-toggle="pill"
              href="#tab-2"
            >
              <h6 className="mt-n1 mb-0">Full Time</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex align-items-center text-start mx-3 me-0 pb-3"
              data-bs-toggle="pill"
              href="#tab-3"
            >
              <h6 className="mt-n1 mb-0">Part Time</h6>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-1.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Software Engineer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-2.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Marketing Manager</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-3.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Product Designer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-4.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Creative Director</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-5.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Wordpress Developer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Browse More Jobs
            </a>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-1.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Software Engineer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-2.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Marketing Manager</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-3.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Product Designer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-4.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Creative Director</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-5.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Wordpress Developer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Browse More Jobs
            </a>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-1.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Software Engineer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-2.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Marketing Manager</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-3.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Product Designer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-4.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Creative Director</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/assets/img/com-logo-5.jpg"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">Wordpress Developer</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      New York, USA
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      Full Time
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      $123 - $456
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <a className="btn btn-light btn-square me-3" href="">
                      <i className="far fa-heart text-primary" />
                    </a>
                    <a className="btn btn-primary" href="">
                      Apply Now
                    </a>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2" />
                    Date Line: 01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Browse More Jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Jobs End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <h1 className="text-center mb-5">Our Clients Say!!!</h1>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item bg-light rounded p-4">
          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded"
              src="/assets/img/testimonial-1.jpg"
              style={{ width: 50, height: 50 }}
            />
            <div className="ps-3">
              <h5 className="mb-1">Client Name</h5>
              <small>Profession</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-4">
          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded"
              src="/assets/img/testimonial-2.jpg"
              style={{ width: 50, height: 50 }}
            />
            <div className="ps-3">
              <h5 className="mb-1">Client Name</h5>
              <small>Profession</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-4">
          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded"
              src="/assets/img/testimonial-3.jpg"
              style={{ width: 50, height: 50 }}
            />
            <div className="ps-3">
              <h5 className="mb-1">Client Name</h5>
              <small>Profession</small>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-4">
          <i className="fa fa-quote-left fa-2x text-primary mb-3" />
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded"
              src="/assets/img/testimonial-4.jpg"
              style={{ width: 50, height: 50 }}
            />
            <div className="ps-3">
              <h5 className="mb-1">Client Name</h5>
              <small>Profession</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
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
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
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
            <br />
            Distributed By{" "}
            <a
              className="border-bottom"
              href="https://themewagon.com"
              target="_blank"
            >
              ThemeWagon
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