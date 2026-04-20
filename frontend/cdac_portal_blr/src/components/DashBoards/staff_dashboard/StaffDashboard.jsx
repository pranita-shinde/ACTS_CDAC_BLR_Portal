import React, { useState, useEffect } from 'react';
import './StaffDashboard.css';

const StaffDashboard = () => {
    const [staffData, setStaffData] = useState({});

    useEffect(() => {
        fetch('/api/staff/123')
            .then(response => response.json())
            .then(data => setStaffData(data))
            .catch(error => console.error('Error fetching staff data:', error));
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
                <div className="staff-info">
                    <img src={staffData.image || '../assets/StaffImages/1.jpg'} alt="Staff Image" />
                    <h2>{staffData.first_name} {staffData.last_name}</h2>
                    <div>Designation: {staffData.designation}</div>
                </div>
                <div className="staff-details">
                    <div>Email: {staffData.email}</div>
                    <div>Mobile: {staffData.mobile || staffData.mobile_no}</div>
                    <div>Employee ID: {staffData.emp_id}</div>
                    <div>Gender: {staffData.gender}</div>
                    <div>Login ID: {staffData.login_pk}</div>
                    <div>Role ID: {staffData.role_pk}</div>
                </div>
            </div>
        </div>
    );
}

export default StaffDashboard;
