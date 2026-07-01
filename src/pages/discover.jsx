import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './discover.css';

function Discover() {
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

            <div className="films-section">
                <div className="search-bar">
                    <input type="text" placeholder="🔍 Search films or shows..." />
                </div>

                <div className="filters">
                    <select><option>Genre</option></select>
                    <select><option>Year</option></select>
                    <select><option>Rating</option></select>
                </div>

                <div className="film-grid">
                    <div className="film-card">
                        <div className="film-poster">Poster</div>
                        <p className="film-name">Film Name</p>
                        <p className="film-rating">★★★★</p>
                        <button className="btn-watchlist">+ Watchlist</button>
                        <button className="btn-log">Log It</button>
                    </div>
                    <div className="film-card">
                        <div className="film-poster">Poster</div>
                        <p className="film-name">Film Name</p>
                        <p className="film-rating">★★★</p>
                        <button className="btn-watchlist">+ Watchlist</button>
                        <button className="btn-log">Log It</button>
                    </div>
                    <div className="film-card">
                        <div className="film-poster">Poster</div>
                        <p className="film-name">Film Name</p>
                        <p className="film-rating">★★★★★</p>
                        <button className="btn-watchlist">+ Watchlist</button>
                        <button className="btn-log">Log It</button>
                    </div>
                    <div className="film-card">
                        <div className="film-poster">Poster</div>
                        <p className="film-name">Film Name</p>
                        <p className="film-rating">★★★</p>
                        <button className="btn-watchlist">+ Watchlist</button>
                        <button className="btn-log">Log It</button>
                    </div>
                </div>
            </div>

            <footer>
                <p>About | Contact | Github</p>
            </footer>
        </div>
    );
}

export default Discover;