import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('logs');

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

            <div className="profile-header">
                <div className="profile-avatar">👤</div>
                <div className="profile-info">
                    <h2 className="profile-username">Username</h2>
                    <p className="profile-bio">Film lover...</p>
                    <div className="profile-stats">
                        <span>507 Films</span>
                        <span>43 Following</span>
                        <span>89 Followers</span>
                    </div>
                </div>
            </div>

            <div className="tab-bar">
                <button className={`tab ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => setActiveTab('logs')}>Logs</button>
                <button className={`tab ${activeTab === 'watchlist' ? 'active' : ''}`} onClick={() => setActiveTab('watchlist')}>Watchlist</button>
            </div>

            {activeTab === 'logs' && (
                <div className="tab-content">
                    <div className="film-grid">
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <p className="film-rating">★★★★</p>
                            <p className="film-mood">😊 Happy</p>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <p className="film-rating">★★★</p>
                            <p className="film-mood">😐 Sad</p>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <p className="film-rating">★★★★★</p>
                            <p className="film-mood">😍 Excited</p>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <p className="film-rating">★★</p>
                            <p className="film-mood">😴 Bored</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'watchlist' && (
                <div className="tab-content">
                    <div className="film-grid">
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <button className="btn-log">Log It</button>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <button className="btn-log">Log It</button>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <button className="btn-log">Log It</button>
                        </div>
                        <div className="film-card">
                            <div className="film-poster">Poster</div>
                            <p className="film-name">Film Name</p>
                            <button className="btn-log">Log It</button>
                        </div>
                    </div>
                </div>
            )}

            <footer>
                <p>About | Contact | Github</p>
            </footer>
        </div>
    );
}

export default Profile;