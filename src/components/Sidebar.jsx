// src/components/Sidebar.jsx
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    // Link bosilganda mobil menyuni yopamiz
    setIsMenuOpen(false);
  };

  return (
    <aside className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
      {/* TOP – LOGO + MENU + BURGER */}
      <div className="sidebar-top">
        {/* Logo */}
        <a href="/" className="sidebar-logo">
          OBUVVV
        </a>

        {/* NAV – desktop + mobil fullscreen menyu */}
        <nav className="sidebar-nav">
          <a href="#" className="nav-link active" onClick={handleNavClick}>
            Bosh sahifa
          </a>
          <a href="#" className="nav-link" onClick={handleNavClick}>
            Barcha mahsulotlar
          </a>
          <a href="#" className="nav-link" onClick={handleNavClick}>
            Do'kon
          </a>
        </nav>

        {/* Hamburger – faqat mobilda ko'rinadi */}
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
        <ion-icon
                      name="cart-outline"
                      className="cart-icon"
                    ></ion-icon>
        <span className="cart-count">0</span>
      </div>
    </aside>
  );
}
