import React, { useState } from 'react';
import './SideBar.css';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰ {/* This is a hamburger icon */}
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="avatar-section">
                    <img
                        className="avatar"
                        src="/avatar.png" // Replace with your avatar image path
                        alt="User Avatar"
                    />
                    <div className="user-name">John Doe</div>
                </div>
                <div className="menu-section">
                    <div className="menu-item">Dashboard</div>
                    <div className="menu-item">Projects</div>
                    <div className="menu-item">Tasks</div>
                    <div className="menu-item">Time Log</div>
                    <div className="menu-item">Resource Management</div>
                    <div className="menu-item">Users</div>
                    <div className="menu-item">Project Templates</div>
                    <div className="menu-item">Menu Settings</div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
