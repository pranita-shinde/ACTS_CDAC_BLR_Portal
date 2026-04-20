import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [adminData, setAdminData] = useState({});

    useEffect(() => {
        // Fetch admin data from the server
        fetch('/api/admin/123')
            .then(response => response.json())
            .then(data => setAdminData(data))
            .catch(error => console.error('Error fetching admin data:', error));
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="navbar">
                <div className="navbar-content">
                    <img src="logo.png" alt="Logo" className="logo"/>
                    <div className="avatar-section">
                        <img src="avatar.png" alt="Admin Avatar" className="avatar" />
                        <div className="dropdown">
                            <a href="#">Edit Profile</a>
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="admin-info">
                    <img src={adminData.image || '../assets/AdminImages/admin.jpg'} alt="Admin" className="admin-image" />
                    <h2>{adminData.first_name} {adminData.last_name}</h2>
                    <p className="admin-designation">{adminData.designation || "Admin"}</p>
                </div>

                <div className="admin-details">
                    <h3>Admin Details</h3>
                    <p><strong>Email:</strong> {adminData.email}</p>
                    <p><strong>Mobile:</strong> {adminData.mobile || adminData.mobile_no}</p>
                    <p><strong>Employee ID:</strong> {adminData.emp_id}</p>
                    <p><strong>Gender:</strong> {adminData.gender}</p>
                    <p><strong>Login ID:</strong> {adminData.login_pk}</p>
                    <p><strong>Role ID:</strong> {adminData.role_pk}</p>
                </div>
            </div>

            <div className="admin-actions">
                <h3>Admin Actions</h3>
                <ul className="actions-list">
                    <li><a href="/admin/users">Manage Users</a></li>
                    <li><a href="/admin/reports">View Reports</a></li>
                    <li><a href="/admin/settings">Admin Settings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
