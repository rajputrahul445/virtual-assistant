import React, {useEffect} from "react";



const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
        <section className="innerBanner">
            <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
            <h1>Services</h1>
            <div className="bannerOvelay"></div>
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
    </React.Fragment>
    )
};

export default Services;