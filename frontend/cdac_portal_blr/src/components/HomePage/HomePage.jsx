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
            <header>
        <div class="header-container">
            <h1>Welcome to C-DAC Bengaluru</h1>
            <p>Your gateway to high-performance computing and innovative solutions.</p>
        </div>
    </header>

    <nav>
        <ul>
            <li><a href="#research-highlights">Research Highlights</a></li>
            <li><a href="#projects">Ongoing Projects</a></li>
            <li><a href="#life-at-cdac">Life at C-DAC</a></li>
        </ul>
    </nav>

    <div>
        {/* <!-- Research Highlights Section --> */}
        <section id="research-highlights">
            <h2>Research Highlights</h2>
            <p>C-DAC, Bengaluru centre, established in 1989, is renowned for its research and solutions in System Software for PARAM series supercomputers. PARAM Padma, a part of C-DAC's Terascale Supercomputing Facility (CTSF), was listed among the Top 500 Supercomputers.</p>
            <p>The centre features the PARAM Utkarsh Supercomputing facility, contributing significantly to the National Supercomputing Mission (NSM). It offers HPC System Software solutions, including debuggers, profilers, web frameworks, high-speed data transfer tools, AI frameworks, big data software suites, and gateways for scientific applications.</p>
            <p>Recognized as a center of excellence, C-DAC Bengaluru excels in HPC, Grid Computing, Hardware Security, Cyber Security, IoT, and more. Indigenous solutions include cloud security, SCADA systems, IoT solutions for smart cities, and more.</p>
        </section>

        {/* <!-- Ongoing Projects Section --> */}
        <section id="projects">
            <h2>Ongoing Projects</h2>
            <article>
                <h3>Developing Data Science Framework, Architecture, and Methodology for Fraud Detection in ATM Transactions</h3>
                <p>This project aims to create a zero-coding fraud detection framework for ATM transactions in Indian banks, leveraging data science to enhance security and prevent fraudulent activities.</p>
                <img src={homeR1} alt="Fraud Detection" class="centered-image"/>
              </article>
            <article>
                <h3>MANAS – Mental Health and Normalcy Augmentation System</h3>
                <p>MANAS focuses on nurturing mental well-being through innovative solutions and methodologies to augment mental health and support normalcy in daily life.</p>
                <img src={homeR2} alt="MANAS" class="centered-image"/>
              </article>
        </section>

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
