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
      {/* TOP – LOGO + MENU + BURGER */}
      <div className="sidebar-top">
        <a href="/" className="sidebar-logo">
          OBUVVV
        </a>

        {/* NAV */}
        <nav className="sidebar-nav">
          <a href="#" className="nav-link active" onClick={handleNavClick}>
            Bosh sahifa
          </a>
          <a href="#" className="nav-link" onClick={handleNavClick}>
            Texnik yordam
          </a>
          <a href="#" className="nav-link" onClick={handleNavClick}>
            Do'kon
          </a>

          {/* 🔥 TIL TANLASH QISMI */}
          <div className="sidebar-lang">
  <ion-icon name="language-outline" class="lang-icon"></ion-icon>

  <div className="lang-wrapper">
    <select className="lang-select">
      <option value="uz">UZB</option>
      <option value="ru">РУС</option>
      <option value="en">ENG</option>
    </select>
  </div>
</div>

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

      {/* BOTTOM – CART */}
      <div className="sidebar-bottom">
        <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
        <span className="cart-count">0</span>
      </div>
    </aside>
  );
}
