import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('login');

    useEffect(() => {
        if (location.hash === '#signup') {
            setActiveTab('signup');
        }
    }, [location]);

    return (
        <div>
            <nav className="navbar">
                <div className="left-nav">
                    <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
                    <div className="logo">CineVault</div>
                </div>
            </nav>

            <div className="auth-container">
                <div className="tabs">
                    <button className={`tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>Login</button>
                    <button className={`tab ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => setActiveTab('signup')}>Sign Up</button>
                </div>

                {activeTab === 'login' && (
                    <div className="form-section">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="submit-btn">Login</button>
                    </div>
                )}

                {activeTab === 'signup' && (
                    <div className="form-section">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="submit-btn">Sign Up</button>
                    </div>
                )}
            </div>

            <footer>
                <p>About | Contact | Github</p>
            </footer>
        </div>
    );
}

export default Login;