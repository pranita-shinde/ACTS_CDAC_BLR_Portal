import React, { useState, useEffect } from 'react';

function StudentDashboard() {
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        fetch('/api/student/123')
            .then(response => response.json())
            .then(data => setStudentData(data))
            .catch(error => console.error('Error fetching student data:', error));
    }, []);

    return (
        <div>
            <div className="navbar">
                <img src="logo.png" alt="Logo" />
                <div className="avatar">
                    <img src="avatar.png" alt="Avatar" height="40" />
                    <div className="dropdown">
                        <a href="#">Edit</a>
                        <a href="#">Sign Out</a>
                    </div>
                </div>
            </div>

            <div className="dashboard">
                <div className="student-info">
                    <img src={studentData.imageUrl || '../assets/GalleryImages/1.jpg'} alt="Student Image" />
                    <h2>{studentData.name}</h2>
                </div>
                <div className="student-details">
                    <div>Course: {studentData.course}</div>
                    <div>Email: {studentData.email}</div>
                    <div>Phone: {studentData.phoneNumber}</div>
                    <div>Roll Number: {studentData.rollNumber}</div>
                    <div>Gender: {studentData.gender}</div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
