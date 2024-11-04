import React, {useEffect} from "react";
import Slider from "../Component/Slider";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <Slider />
            <section className="aboutUs mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="aboutUsThumb">
                                <img src="images/about-thumb.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 pt-5 pr-5">
                            <div className="aboutUsContent">
                                <div className="sectionHeading mb-3">
                                    <h3>About Virtual Assistant</h3>
                                    <h2>We Provide IT Solutions That Will<span className="d-block blueTxt">Grow Your Business</span></h2>
                                </div>
                                <p className="para">For 10+ years, Virtual Assistant has been leading the IT industry across various technology solutions and services. We strive to build our reputation with one satisfied client at a time. With a team of dedicated professionals, Virtual Assistant Solutions envisions being a global brand in providing custom business solutions and IT services to its customers.</p>
                                <a href="/" className="colorBtn">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="explore" id="servicesSec">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6 col-12">
                            <div className="sectionHeading">
                                <h3>Explore</h3>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <p className="m-0 para">Virtual Assistant was founded by leading Information Governance experts with a
                                vision to modernize information management activities and create value from
                                information. Fast forward to today the company has grown into one of the
                                leading solutions and consulting firms pioneering the application of
                                technology solutions to meet global regulatory compliance requirements.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/data-analyt.png" alt="" />
                                <h3>Data Analytics<br/>and Services</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/ai-ml.png" alt="" />
                                <h3>AI/ML Services  </h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/robotic.png" alt="" />
                                <h3>Robotic Process<br/>Automation</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/data-analyt2.png" alt="" />
                                <h3>Data Analytics<br/>and Services</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/data-analyt.png" alt="" />
                                <h3>Data Analytics<br/>and Services</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/ai-ml.png" alt="" />
                                <h3>AI/ML Services  </h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/robotic.png" alt="" />
                                <h3>Robotic Process<br/>Automation</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="colorBx">
                                <img src="images/data-analyt2.png" alt="" />
                                <h3>Data Analytics<br/>and Services</h3>
                                <div className="text-end">
                                    <a href="/" className="colorBtn">Explore <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whyUs">
                <div className="container">
                    <div className="sectionHeading">
                        <h3>Why</h3>
                        <h2>Choose Us</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-5 col-12">
                            <img src="images/why-us.png" alt="" className="whyUsThumb"/>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="whyUsBx">
                                        <div className="text-end">
                                            <img src="images/result-driven.png" alt=""/>
                                        </div>
                                        <h3>Results Driven</h3>
                                        <p>Delivering actionable insights with measurable RoI</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="whyUsBx">
                                        <div className="text-end">
                                            <img src="images/tech-driven.png" alt=""/>
                                        </div>
                                        <h3>Tech-Driven Creativity</h3>
                                        <p>Delivering actionable insights with measurable RoI</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="whyUsBx">
                                        <div className="text-end">
                                            <img src="images/industry.png" alt=""/>
                                        </div>
                                        <h3>Industry Agnostic </h3>
                                        <p>Delivering actionable insights with measurable RoI</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-4">
                                    <div className="whyUsBx">
                                        <div className="text-end">
                                            <img src="images/cost-efective.png" alt=""/>
                                        </div>
                                        <h3>Cost Effective</h3>
                                        <p>Delivering actionable insights with measurable RoI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="weWork">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6 col-12">
                            <div className="sectionHeading">
                                <h3>Technologies</h3>
                                <h2>We work with</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <p className="m-0 para">Virtual Assistant was founded by leading Information Governance experts with a
                                vision to modernize information management activities and create value from
                                information. Fast forward to today the company has grown into one of the
                                leading solutions and consulting firms pioneering the application of
                                technology solutions to meet global regulatory compliance requirements.</p>
                        </div>
                    </div>
                    <div className="clientList mt-5">
                        <div className="client"><img src="images/sap.png" alt="" /></div>
                        <div className="client"><img src="images/ui-path.png" alt="" /></div>
                        <div className="client"><img src="images/open-ai.png" alt="" /></div>
                        <div className="client"><img src="images/office-365.png" alt="" /></div>
                        <div className="client"><img src="images/mern.png" alt="" /></div>
                        <div className="client"><img src="images/power-bi.png" alt="" /></div>
                        <div className="client"><img src="images/python.png" alt="" /></div>
                        <div className="client"><img src="images/oracle.png" alt="" /></div>
                        <div className="client"><img src="images/aws.png" alt="" /></div>
                        <div className="client"><img src="images/azure.png" alt="" /></div>
                    </div>
                </div>
            </section>
         
        </React.Fragment>
    )
}
export default Home;