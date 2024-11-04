import React,{useEffect} from "react";


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <div className="container">
                    
                </div>
            </section>
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
        </React.Fragment>
    )
};

export default About;