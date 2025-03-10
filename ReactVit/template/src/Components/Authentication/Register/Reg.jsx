import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ClockLoader, GridLoader } from "react-spinners"
import { useDispatch } from "react-redux"
import { showLoader } from "../../Redux/Actions/LoaderAction"

export default function MyRegister() {
    const dispatch=useDispatch()
    const nav = useNavigate()
    const submitForm=(data)=>{
        console.log(data);
        dispatch(showLoader("Bye user!!"))
        reset()
    }
    return (
        <>
            <main className="main">
                <PageTitle>Register</PageTitle>
                {/* Contact Section */}
                <section id="contact" className="contact section">
            
                {/* End Google Maps */}
                <div className="container" >
                   
                        <div className="row justify-content-center gy-4">
                    
                        <div className="col-lg-6">
                            <form
                            method="post"
                            className="php-email-form"
                            onSubmit={handleSubmit(submitForm)}
                            >
                            <div className="row gy-4">
                            
                                <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Your name"
                                    
                                />
                                <span className="text-danger">{errors?.name?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                  
                                />
                                <span className="text-danger">{errors?.email?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Your Password"
                              
                                />
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="number"
                                    type="contact"
                                    placeholder="Your Contact"
                                  
                                  
                                />
                                <span className="text-danger">{errors?.contact?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="address"
                                    type="text"
                                    placeholder="Your Address"
                           
                                />
                                </div>
                                <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                                <button type="submit">sumbit</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/* End Contact Form */}
                        </div>
                    </div>
                </section>
                {/* /Contact Section */}
            </main>
            
        </>
    )
}