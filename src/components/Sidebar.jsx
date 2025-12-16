// src/components/Sidebar.jsx
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
      {/* TOP – LOGO + NAV + BURGER */}
      <div className="sidebar-top">
        <a href="/" className="sidebar-logo" onClick={handleNavClick}>
          OBUVVV
        </a>

        {/* NAV */}
        <nav className="sidebar-nav">
          <a href="/" className="nav-link active" onClick={handleNavClick}>
            Bosh sahifa
          </a>

          {/* Texnik yordam -> Telegram */}
          <a
            href="https://t.me/raxmatulloh_alikulov"
            className="nav-link"
            onClick={handleNavClick}
            target="_blank"
            rel="noreferrer"
          >
            Texnik yordam
          </a>
        </nav>

        {/* BURGER */}
        <button
          type="button"
          className={`sidebar-burger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </aside>
  );
}
