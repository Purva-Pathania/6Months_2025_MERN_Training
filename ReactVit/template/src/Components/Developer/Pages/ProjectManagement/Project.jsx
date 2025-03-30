
export default function Project() {
    const data = [
        { logo: "/assets/img/skill.png", title: "Skill Hunt", client: "Shivam", status: "In Progress", deadline: "2025-06-12", i:"fas fa-signal fa-4x text-primary", bidAmount: 'Rs 10000', date: '2025-04-28' },
        { logo: "/assets/img/stay.png", title: "Stay To Stray", client: "Riya", status: "Pending", deadline: "2025-07-20", i:"fas fa-chart-line fa-4x text-primary", bidAmount: 'Rs 5000', date: '2025-04-28' },
        { logo: "/assets/img/travel.png", title: "Travel Guide", client: "Krish", status: "Completed", deadline: "2025-04-15", i:"fas fa-signal fa-4x text-primary", bidAmount: 'Rs 15000', date: '2025-03-28'},
        { logo: "/assets/img/dev.png", title: "Dev Wiz", client: "Vaidehi", status: "Pending", deadline: "2025-04-30", i:"fas fa-signal fa-4x text-primary", bidAmount: 'Rs 35000', date: '2025-03-28' },
        { logo: "/assets/img/gym.png", title: "Fit Gym", client: "Priyansh", status: "Submitted", deadline: "2025-08-10", i:"fas fa-signal fa-4x text-primary", bidAmount: 'Rs 25000', date: '2025-03-15' }
    ];

    return (
        <main className="main">
            <div className="container-fluid project pt-5">
                <div className="container pt-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Our Projects</h4>
                        <h1 className="display-4">Explore Our Latest Projects</h1>
                    </div>

                    <div className="project-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {data.map((el, index) => (
                            <div key={index} className="project-item h-100 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="project-img">
                                    <img src={el.logo} className="img-fluid  rounded" alt="Project Logo" style={{aspectRatio:"16/9", height:"450px", width:"100%", objectFit:"cover"}}/>
                                </div>
                                <div className="project-content bg-light rounded p-4">
                                    <div className="project-content-inner">
                                    <div className="project-icon mb-3">
                                        <i className={el.i}/>
                                    </div>
                                        <p className=" fs-5 mb-3 h4">{el.title} (Client : {el.client})</p>
                                        <p><strong>Status:</strong> {el.status}</p>
                                        <p><strong>Deadline:</strong> {el.deadline}</p>
                                        <p><strong>Bid Amount:</strong> {el.bidAmount}</p>
                                        <p><strong>Date:</strong> {el.date}</p>
                                    <div className="pt-4">
                                        <a className="btn btn-light rounded-pill py-3 px-5" href="#upload">
                                        Read More
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card-cont">
        <div className="card">
                <div className="card-footer" id="upload">
                    <label>Upload Project: </label>
                    <input type="file" onChange={(e) => (URL.createObjectURL(e.target.files[0]))} />
                    <br/>
                    <label>Upload QR Code: </label>
                    <input type="file" onChange={(e) => (URL.createObjectURL(e.target.files[0]))} />
                    <br/>
                    <button className=" btn btn-primary upload-btn">Send</button>
                </div>
                </div>
                </div>
            </div>
        </main>
    );
}