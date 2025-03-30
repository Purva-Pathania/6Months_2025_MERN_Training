
export default function DevBidding(){
   const data=[
        { img:"/assets/img/skill.png", title:"Skill Hunt", date:"apr 14, 2025", client:"Mark D. Brock", des:"Create website where client and developer can interact through real time chat.", amount:"Rs 2000"},
        { img:"/assets/img/gym.png", title:"Fitness", date:"Apr 10, 2025", client:"Mark D. Henry", des:"Create website where all details & users can join gym named fitness .", amount:"Rs 2000"},
        { img:"/assets/img/travel.png", title:"Travel Guide", date:"Apr 15, 2025", client:"Mark Liana", des:"Create website where all details of places are given.", amount:"Rs 1500"}
      ]
    return(
        <>
            <div className="container-fluid blog py-3">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                  {data.map((el, index) => (
                    <div
                    className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="blog-item bg-light rounded p-4"
                      style={{ backgroundImage: "url(/assets/img/bg.png)" }}
                    >
                      <div className="mb-4">
                        <h4 className="text-primary mb-2">{el.title}</h4>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">
                            <span className="text-dark fw-bold">Submission</span> {el.date}
                          </p>
                          <p className="mb-0">
                            <span className="text-dark fw-bold">Client</span> {el.client}
                          </p>
                        </div>
                      </div>
                      <div className="project-img">
                        <img
                          src={el.img}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                          style={{aspectRatio:"16/9", height:"250px", width:"100%", objectFit:"cover"}}
                        />
                        <div className="blog-plus-icon">
                          <a
                            href="/assets/img/skill.png" target="_self"
                            data-lightbox="skill"
                            className="btn btn-primary btn-md-square rounded-pill"
                          >
                            <i className="fas fa-plus fa-1x" />
                          </a>
                        </div>
                      </div>
                      <div className="my-4">
                        <span>
                          {el.des}
                        </span>
                        <h5 className="mt-2">{el.amount}</h5>
                      </div>
                      <button className="btn">
                        <a
                            className="btn btn-primary btn-md-square rounded-pill"
                         >
                            <i className="fas fa-plus fa-1x" />
                          </a>
                        </button>
                      <button className="btn btn-primary rounded-pill py-2 px-4 me-2">
                        Accept
                      </button>
                      <button className="btn btn-primary rounded-pill py-2 px-4">
                        Reject
                      </button>
                    </div>
                  </div>
                  ))}
                  </div>
                </div>
              </div>
        </>
    )
}