import Footer from "../footer/footer"
import NavBar from "../navbar/NavBar";
import './academics.css';

const Academics = () => {
    return (
        <div>
            <NavBar />
            <header>
        <h1>Admission - PG Diploma Courses (August 2024)</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#how-to-register">How to Register</a></li>
            <li><a href="#eligibility-criteria">Eligibility Criteria</a></li>
            <li><a href="#ccat-exam">C-CAT Examination</a></li>
            <li><a href="#ccat-syllabus">C-CAT Syllabus</a></li>
            <li><a href="#ccat-schedule">C-CAT Schedule & Cities</a></li>
            <li><a href="#ccat-fee">C-CAT Fee & Ranking</a></li>
            <li><a href="#counseling-process">Counseling & Seat Allocation Process</a></li>
            <li><a href="#seat-capacity">Seat Capacity at Training Centers</a></li>
            <li><a href="#important-dates">Important Dates</a></li>
            <li><a href="#admission-booklet">Admission Booklet</a></li>
            <li><a href="#how-to-register-ccat">How to Register for C-CAT</a></li>
        </ul>
    </nav>

    <div>
        <section id="how-to-register">
            <h2>How to Register</h2>
            <p>The
     process of admission to C-DAC's PG Diploma courses begins with online 
    registration. Candidates are advised to read the instructions carefully 
    while filling the online registration and application forms. Upon 
    registering, candidates will get their Form Number that can be used to 
    log in, fill and complete the C-CAT application form.<br/></p><p>Admissions to all Post Graduate Diploma courses of C-DAC are done through C-DAC's computerized Common Admission Test (C-CAT).</p><p>Every year, C-CAT is conducted in December (for February&nbsp; admissions) and July (for August admissions).</p><p>Candidates
     who qualify the upcoming C-CAT scheduled on July 06 / 07, 2024 will 
    only be considered for admission to C-DAC’s Post Graduate Diploma 
    courses of August 2024 batch on the basis of their C-CAT ranks and can 
    further participate in counseling rounds.</p>
        </section>

        <section id="eligibility-criteria">
            <h2>Eligibility Criteria</h2>
            <p>Candidates must meet the eligibility criteria specified for each course. Detailed eligibility criteria and course fees are provided in Table 1.</p>
        </section>

        <section id="ccat-exam">
            <h2>C-CAT Examination</h2>
            <p>Admissions to all PG Diploma courses of the August 2024 batch are conducted through C-DAC's Common Admission Test (C-CAT). The test will be held physically at C-DAC’s test centers on July 06 and July 07, 2024.</p>
        </section>

        <section id="ccat-syllabus">
            <h2>C-CAT Syllabus</h2>
            <p>The indicative syllabus for the C-CAT test papers is outlined below:</p>
            <ul>
                <li><strong>Section A:</strong> English, Quantitative Aptitude, Reasoning, Computer Fundamentals & Concepts of Programming - 1 hour</li>
                <li><strong>Section B:</strong> C Programming, Data Structures, OOP Concepts using C++, OS & Networking, Basics of Big Data & AI - 1 hour</li>
                <li><strong>Section C:</strong> Computer Architecture, Digital Electronics, Microprocessors - 1 hour</li>
            </ul>
        </section>

        <section id="ccat-fee">
            <h2>C-CAT Fee & Ranking</h2>
            <p>The C-CAT fee structure is as follows:</p>
            <table>
                <tr>
                    <th>Course Category</th>
                    <th>C-CAT Paper(s)</th>
                    <th>C-CAT Fee</th>
                </tr>
                <tr>
                    <td>II</td>
                    <td>A+B</td>
                    <td>Rs 1550/-</td>
                </tr>
                <tr>
                    <td>III</td>
                    <td>A+B+C</td>
                    <td>Rs 1750/-</td>
                </tr>
            </table>
        </section>

        <section id="counseling-process">
            <h2>Counseling & Seat Allocation Process</h2>
            <p>C-DAC’s PG Diploma admission process has two counseling sessions and three rounds of seat allocations. Candidates must carefully fill the order of preference for courses and centers.</p>
        </section>

        <section id="seat-capacity">
            <h2>Seat Capacity at Training Centers</h2>
            <p>The seat capacity at various C-DAC training centers for the August 2024 batch is provided below:</p>
            <table>
                <tr>
                    <th>City</th>
                    <th>Center Name</th>
                    <th>PG-DAC</th>
                    <th>PG-DBDA</th>
                    <th>PG-DAI</th>
                   
                </tr>
                <tr>
                    <td>Bhubaneswar</td>
                    <td>Lakshya</td>
                    <td>60</td>
                    <td></td>
                    <td></td>
                </tr>
                
            </table>
        </section>

        <section id="important-dates">
            <h2>Important Dates</h2>
            <table>
                <tr>
                    <th>Event</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Beginning of Online Registration</td>
                    <td>28 May 2024</td>
                </tr>
                <tr>
                    <td>C-CAT Examination</td>
                    <td>06-07 July 2024</td>
                </tr>
                
            </table>
        </section>

        <section id="admission-booklet">
            <h2>Admission Booklet</h2>
            <p>The Admission Booklet for the August 2024 batch is available for download:</p>
            <a href="path/to/admission-booklet.zip" download>Download Admission Booklet (v1.1 English) - 562 kB</a>
        </section>

        <section id="how-to-register-ccat">
            <h2>How to Register for C-CAT</h2>
            <p>Candidates must apply for C-CAT online at www.cdac.in or acts.cdac.in. Those who clear the C-CAT will be considered for admission. Qualified candidates must apply for admission as per the prescribed procedure.</p>
        </section>
        </div>
            <Footer />
        </div>
        
    )
    }

export default Academics;