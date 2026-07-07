import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("logs");
  const [logs, setLogs] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(storedUser);

    fetch(`http://localhost:5000/logs/${storedUser.id}`)
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.log("Error fetching logs:", err));

    fetch(`http://localhost:5000/watchlist/${storedUser.id}`)
      .then((res) => res.json())
      .then((data) => setWatchlist(data))
      .catch((err) => console.log("Error fetching watchlist:", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleRemoveLog = (id) => {
    fetch(`http://localhost:5000/log/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setLogs(logs.filter((log) => log.id !== id));
      })
      .catch((err) => console.log("Error:", err));
  };

  const handleRemoveWatchlist = (id) => {
    fetch(`http://localhost:5000/watchlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setWatchlist(watchlist.filter((film) => film.id !== id));
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
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
          <h2 className="profile-username">
            {user ? user.name : "Loading..."}
          </h2>
          <p className="profile-bio">Film lover...</p>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">{logs.length}</span>
              <span className="stat-label">Logged</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{watchlist.length}</span>
              <span className="stat-label">Watchlist</span>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="tab-bar">
        <button
          className={`tab ${activeTab === "logs" ? "active" : ""}`}
          onClick={() => setActiveTab("logs")}
        >
          Logs
        </button>
        <button
          className={`tab ${activeTab === "watchlist" ? "active" : ""}`}
          onClick={() => setActiveTab("watchlist")}
        >
          Watchlist
        </button>
      </div>

      {activeTab === "logs" && (
        <div className="tab-content">
          <div className="film-grid">
            {logs.map((log) => (
              <div className="film-card" key={log.id}>
                <div className="poster-wrapper">
                  <img src={log.poster_url} alt={log.film_title} />
                  <button
                    className="btn-remove"
                    onClick={() => handleRemoveLog(log.id)}
                  ></button>
                </div>
                <p className="film-name">{log.film_title}</p>
                <p className="film-rating">⭐ {log.rating}/10</p>
                <p className="film-mood">{log.mood}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "watchlist" && (
        <div className="tab-content">
          <div className="film-grid">
            {watchlist.map((film) => (
              <div className="film-card" key={film.id}>
                <div className="poster-wrapper">
                  <img src={film.poster_url} alt={film.film_title} />
                  <button
                    className="btn-remove"
                    onClick={() => handleRemoveWatchlist(film.id)}
                  ></button>
                </div>
                <p className="film-name">{film.film_title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer>
        <p>
          <Link to="/about">About</Link>
        </p>
      </footer>
    </div>
  );
}

export default Profile;
