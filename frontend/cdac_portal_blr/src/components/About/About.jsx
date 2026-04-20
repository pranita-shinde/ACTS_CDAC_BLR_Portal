import Footer from "../footer/footer"
import NavBar from "../navbar/NavBar";


const About = () => {
    return (
        <div>
            <NavBar />
            <div class="container">
        <section id="introduction">
            <h2>Introduction</h2>
            <p>C-DAC Acts Bangalore, an autonomous body under the Ministry of Electronics and Information Technology, Government of India, offers IT certification, training, and postgraduate diplomas in areas like software development and cloud computing. Established in 1989, the Bengaluru center focuses on R&D for system software and high-performance computing, notably for the PARAM series of supercomputers. It supports the National Supercomputing Mission and is known for its expertise in HPC, cloud security, and IoT. C-DAC Bengaluru also provides various services and collaborates with key clients such as DRDO, Bharat Electronics, and Bangalore Metro Rail. As a leading R&D organization, C-DAC advances national IT capabilities and aligns with global technology trends and government initiatives.</p>
        </section>
        
       

        <section id="vision">
            <h2>Vision</h2>
            <p>To be an emerging institution in shaping the future of computing by nurturing talent, driving technological advancements, and delivering impactful solutions across various sectors.</p>
        </section>
        
        <section id="mission">
            <h2>Mission</h2>
            <p>To advance computing with innovative research, development, and training in IT and electronics. CDAC ACTS in Bangalore provides high-quality education and training to build expertise in new technologies, aligning with national and global needs while connecting academic research with industry demands. CDAC’s Mission reflects its core values and Vision. It aims to advance Electronics and Information Technology by developing solutions for key national issues, using technology to bridge language gaps, and sharing expertise to enhance skills. The goal is to benefit society through these technologies and turn intellectual property into business opportunities.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>Address: No 68, 4th cross road</p>
            <p>Electronic City phase 1</p>
            <p>Bengaluru-560100</p>
            <p>Karnataka (India)</p>
            <p>Phone: +91-80-2852-3300</p>
            <p>Fax: +91-80-28522590</p>
        </section>
    </div>
            <Footer />
        </div>
    )
}
export default About;