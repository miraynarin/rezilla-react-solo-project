import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbarSection}>
      <div className={`${styles.linkArea} ${isMenuOpen ? styles.open : ""}`}>
        <a href="/" className={isActive("/home") ? styles.active : ""}>
          Home
        </a>
        <a href="#" className={isActive("/about") ? styles.active : ""}>
          About
        </a>
        <a href="#" className={isActive("/listings") ? styles.active : ""}>
          Listings
        </a>
        <a href="#" className={isActive("/services") ? styles.active : ""}>
          Services
        </a>
        <a href="#" className={isActive("/blogs") ? styles.active : ""}>
          Blogs
        </a>
      </div>

      <div className={styles.navbarLogo}>
        <img
          className={styles.hauseIcon}
          src="/images/rezilla-house-icon.svg"
          alt="Rezilla Icon"
        />
        <span className={styles.logoText}>Rezilla</span>
      </div>

      <div className={styles.icon}>
        <button className={styles.iconButton}>
          <img src="/images/user-icon.svg" alt="User Icon" />
          Login/Register
        </button>
        <button className={styles.houseIconButton}>
          <img
            className={styles.buttonHouse}
            src="/images/rezilla-house-icon.svg"
            alt="Home Icon"
          />
          Add Listing
        </button>
      </div>

      <div className={styles.hamburgerArea}>
        <button
          className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles.mobileMenuSection} ${isMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileMenu}>
          <div className={styles.hamburgerArea}>
            <button
              className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.active : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={styles.mobileLinks}>
          <a href="/" className={isActive("/home") ? styles.active : ""}>
            Home
          </a>
          <a href="#" className={isActive("/about") ? styles.active : ""}>
            About
          </a>
          <a href="#" className={isActive("/listings") ? styles.active : ""}>
            Listings
          </a>
          <a href="#" className={isActive("/services") ? styles.active : ""}>
            Services
          </a>
          <a href="#" className={isActive("/blogs") ? styles.active : ""}>
            Blogs
          </a></div>

          <div className={styles.iconMobile}>
            <button className={styles.iconButton}>
              <img src="/images/user-icon.svg" alt="User Icon" />
              Login/Register
            </button>
            <button className={styles.houseIconButton}>
              <img
                className={styles.buttonHouse}
                src="/images/rezilla-house-icon.svg"
                alt="Home Icon"
              />
              Add Listing
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
