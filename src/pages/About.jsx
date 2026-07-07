import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button className="about-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="about-container">
        <div className="about-hero">
          <h1>CineVault</h1>
          <p className="about-tagline">
            Your personal film diary. Discover, log, and share the movies you
            love.
          </p>
        </div>

        <div className="about-section">
          <h2>About the Project</h2>
          <p>
            CineVault was built to solve a simple problem — people forget what
            they've watched, lose track of films they want to see, and have no
            easy way to share their taste with others. CineVault brings all of
            this together in one clean, fast web app. You can log films with
            ratings and moods, build a watchlist, discover new titles powered by
            TMDB's database of millions of films, and connect with other members
            whose taste you trust.
          </p>
        </div>

        <div className="about-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎬</span>
              <h3>Log Films</h3>
              <p>
                Rate every film you watch and tag it with a mood. Build your
                personal history of cinema.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Discover</h3>
              <p>
                Search millions of films in real time powered by the TMDB API.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📋</span>
              <h3>Watchlist</h3>
              <p>
                Save films you want to watch next. Never forget a recommendation
                again.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Members</h3>
              <p>
                Follow other members, explore their logs, and discover films
                through people you trust.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Built With</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">MySQL</span>
            <span className="tech-badge">TMDB API</span>
          </div>
        </div>

        <div className="about-section">
          <h2>Challenges & Learnings</h2>
          <div className="challenges-list">
            <div className="challenge-item">
              <span className="challenge-num">01</span>
              <div>
                <h3>Full Stack Integration</h3>
                <p>
                  Connected a React frontend to a Node.js + Express backend with
                  a MySQL database — handling all CRUD operations from scratch
                  without any ORM.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">02</span>
              <div>
                <h3>Follow System with SQL JOINs</h3>
                <p>
                  Built a follow/unfollow system using a dedicated follows table
                  and complex LEFT JOIN queries with aliases to fetch follower
                  and following counts without duplicates.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">03</span>
              <div>
                <h3>Real-Time TMDB Integration</h3>
                <p>
                  Integrated the TMDB API to enable live film search, fetching
                  poster images, titles and metadata on the fly.
                </p>
              </div>
            </div>
            <div className="challenge-item">
              <span className="challenge-num">04</span>
              <div>
                <h3>State Management without Redux</h3>
                <p>
                  Managed all app state using React hooks — useState and
                  useEffect — keeping the app lightweight with no external state
                  management library.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section developer-section">
          <h2>Developer</h2>
          <div className="developer-card">
            <div className="developer-avatar">👤</div>
            <div className="developer-info">
              <h3>Nirbhay Singh Jain</h3>
              <p>
                Student at <strong>Manipal Institute of Technology</strong>
              </p>
              <p className="developer-note">
                Designed and developed CineVault end-to-end — from database
                schema and REST API to UI design and frontend logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
