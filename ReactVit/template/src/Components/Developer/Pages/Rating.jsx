import { Link } from "react-router-dom";
export default function Rating(){
    return(
        <>
        <div className="container-fluid service py-5">
            <div className="container py-5">
              <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: 800 }}
              >
                <h4 className="text-primary">Ratings</h4>

              </div>
              <div className="row g-4 justify-content-center text-center">
              <div
                  className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item bg-light rounded">
                    <div className="service-img">
                      <img
                        src="/assets/img/skill.png"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      style={{aspectRatio:"16/9", height:"200px", width:"100%", objectFit:"cover"}}/>
                    </div>
                    <div className="service-content text-center p-4">
                      <div className="service-content-inner">
                        <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                          <i className="fas fa-star  me-2" /> Skill Hunt
                        </Link>
                        <p className="mb-4">
                          Client - Rajesh
                        </p>
                            <div style={{color:"gold"}}>
                                {'★'.repeat(3)}{'☆'.repeat(2)}
                            </div>
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
                        src="/assets/img/stay.png"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                        style={{aspectRatio:"16/9", height:"200px", width:"100%", objectFit:"cover"}}
                      />
                    </div>
                    <div className="service-content text-center p-4">
                      <div className="service-content-inner">
                        <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                          <i className="fas fa-star me-2" /> Face Detection
                        </Link>
                        <p className="mb-4">
                          Client - Harman Manhotra
                        </p>
                        <div style={{color:"gold"}}>
                            {'★'.repeat(4)}{'☆'.repeat(1)}
                        </div>
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
                        src="/assets/img/travel.png"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                        style={{aspectRatio:"16/9", height:"200px", width:"100%", objectFit:"cover"}}
                      />
                    </div>
                    <div className="service-content text-center p-4">
                      <div className="service-content-inner">
                        <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                          <i className="fas fa-star me-2" /> Travel Tour
                        </Link>
                        <p className="mb-4">
                          Client - Rajesh Khanna
                        </p>
                        <div style={{color:"gold"}}>
                            {'★'.repeat(5)}{'☆'.repeat(0)}
                        </div>
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
                        src="/assets/img/gym.png"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                        style={{aspectRatio:"16/9", height:"200px", width:"100%", objectFit:"cover"}}
                      />
                    </div>
                    <div className="service-content text-center p-4">
                      <div className="service-content-inner">
                        <Link to="#" className="h4 mb-4 d-inline-flex text-start">
                          <i className="fas fa-star me-2" /> Fitness
                        </Link>
                        <p className="mb-4">
                          Client - Raman Chadda
                        </p>
                        <div style={{color:"gold"}}>
                            {'★'.repeat(4)}{'☆'.repeat(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}