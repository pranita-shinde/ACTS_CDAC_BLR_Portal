import NavBar from "../navbar/NavBar";
import ImageSlider from "../SlideGallery/Gallery";
import Footer from "../footer/footer";
import './home.css';
import homeR1 from '../assets/HomePageImages/homeR1.jpg';
import homeR2 from '../assets/HomePageImages/homeR2.jpg';

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <ImageSlider />
            <div className="content-container">
                <section className="highlights">
                    <h2>Research Highlights</h2>
                    <p className="highlights-description">
                        C-DAC, Bengaluru centre, is the 2nd of C-DAC centres established in 1989 to carry out research and deliver solutions and products in the area of System Software for PARAM series of supercomputers of C-DAC. PARAM Padma was housed at C-DAC's Terascale Supercomputing Facility (CTSF), results from its third mission project in High-Performance Computing Technologies, which was listed in the Top 500 Supercomputers.

                        The centre is equipped with PARAM Utkarsh Supercomputing facility, contributing towards National Supercomputer Mission (NSM) and offers HPC System Software solutions & services along with development of debuggers, profilers, web frameworks, high-speed data transfer tools for national grid computing, AI framework & big data Software suites, and gateways for multiple scientific application domains.
                    </p>
                </section>

                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-8 mb-5 pb-3 research-cards">
                            <div className="col-md-4 col-sm-12 mb-5 pb-3">
                                <div className="card shadow">
                                    <img src={homeR1} className="img-fluid text-center" alt="Research 1" />
                                    <div className="card-body">
                                        <h6 className="card-title">Developing Data Science Framework, Architecture and Methodology for Fraud Detection in ATM Transactions in Banks</h6>
                                        <p className="card-text">A zero-coding fraud detection framework for ATM transactions of Indian Banks</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12 mb-5 pb-3">
                                <div className="card shadow">
                                    <img src={homeR2} className="img-fluid text-center" alt="Research 2" />
                                    <div className="card-body">
                                        <h6 className="card-title">MANAS – Mental Health and Normalcy Augmentation System</h6>
                                        <p className="card-text">MANAS - Mental health and Normalcy Augmentation System - Nurture your Mental wellbeing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="life-at-cdac">
                    <h2>Life at C-DAC</h2>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/rQSCz6klEM0?si=b7fUhl1t5LTspFzz"
                            title="Life at C-DAC Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
