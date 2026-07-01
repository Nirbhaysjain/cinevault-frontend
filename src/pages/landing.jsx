import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">CineVault</div>
                <div className="nav-buttons">
                    <Link to="/login">Login</Link>
                    <Link to="/login#signup">Sign Up</Link>
                </div>
            </nav>

            <section className="hero">
                <h1>Track Films. Discover Yourself</h1>
                <Link to="/login"><button>GET STARTED</button></Link>
            </section>

            <section className="popular">
                <h2>Popular This Week</h2>
                <div className="film-row" id="popular-films"></div>
            </section>

            <section className="activity">
                <h2>Recent Activity</h2>
                <div id="recent-activity"></div>
            </section>

            <footer>
                <p>About | Contact | Github</p>
            </footer>
        </div>
    );
}

export default Landing;