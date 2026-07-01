import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './members.css';

function Members() {
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar">
                <div className="left-nav">
                    <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
                    <div className="logo">CineVault</div>
                </div>
                <div className="nav-links">
                    <Link to="/discover">Discover</Link>
                    <Link to="/members">Members</Link>
                </div>
                <div className="nav-profile">
                    <Link to="/profile">👤 Profile</Link>
                </div>
            </nav>

            <div className="members-section">
                <h2>Members</h2>
                <div className="search-bar">
                    <input type="text" placeholder="🔍 Search members..." />
                </div>
                <div className="members-list">
                    <div className="member-card">
                        <Link to="/profile"><div className="avatar">👤</div></Link>
                        <span className="member-name">Username</span>
                        <span className="member-films">36 Films</span>
                        <button className="btn-follow">Follow</button>
                    </div>
                    <div className="member-card">
                        <Link to="/profile"><div className="avatar">👤</div></Link>
                        <span className="member-name">Username</span>
                        <span className="member-films">24 Films</span>
                        <button className="btn-follow">Follow</button>
                    </div>
                    <div className="member-card">
                        <Link to="/profile"><div className="avatar">👤</div></Link>
                        <span className="member-name">Username</span>
                        <span className="member-films">250 Films</span>
                        <button className="btn-follow">Follow</button>
                    </div>
                    <div className="member-card">
                        <Link to="/profile"><div className="avatar">👤</div></Link>
                        <span className="member-name">Username</span>
                        <span className="member-films">89 Films</span>
                        <button className="btn-follow">Follow</button>
                    </div>
                </div>
            </div>

            <footer>
                <p>About | Contact | Github</p>
            </footer>
        </div>
    );
}

export default Members;