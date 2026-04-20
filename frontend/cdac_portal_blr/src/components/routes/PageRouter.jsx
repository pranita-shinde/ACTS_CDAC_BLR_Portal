import Homapge from "../HomePage/HomePage";
import About from "../About/About";
import Academics from "../Academics/Academics";
import Courses from "../Courses/Courses";
import Placements from "../Placements/Placements";
import Facilities from "../Facilities/Facilities";
import StudentDash from '../DashBoards/student_dashboard/StudentDash'; 
import AdminDashboard from '../DashBoards/admin_dashboard/AdminDash';       
import StaffDashboard from '../DashBoards/staff_dashboard/StaffDashboard'; 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

const PagerRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Homapge />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/student" element={<StudentDash />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/staff" element={<StaffDashboard />} />
                </Routes>
            </Router>
        </div>
    )
}
export default PagerRouter;