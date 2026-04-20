import Footer from "../footer/footer"
import NavBar from "../navbar/NavBar";
import './facilities.css';

const Facilities = () => {
    return (
        <div>
            <NavBar />
            <section>
                <h2>Canteen</h2>
                     <p>The canteen at CDAC ACTS Bangalore provides a variety of hygienic and affordable food options for students, faculty, and staff. With a diverse menu that includes both North and South Indian cuisines, the canteen ensures that everyone's dietary preferences are catered to. It is a popular spot for students to relax and recharge between classes.</p>
            </section>
            <section>
               <h2>Hostel</h2>
                 <p>CDAC ACTS Bangalore offers hostel facilities for outstation students. The hostels are well-maintained and provide a comfortable living environment. Each room is equipped with basic amenities such as a bed, study table, and storage space. The hostel also offers Wi-Fi connectivity, 24/7 security, and a common room where students can socialize and relax.Hostel allotments are made on a first-come, first-served basis.</p>
            </section>
            <section>
                 <h2>Computer Centre</h2>
                    <p>The Computer Centre at CDAC ACTS Bangalore is equipped with the latest hardware and software to support students' academic and research needs. The center provides access to high-performance computers, various development tools, and internet facilities. It is open to students and faculty for project work, research, and other academic activities.</p>
            </section>

  
            <Footer />
        </div>
    )
}
export default Facilities;