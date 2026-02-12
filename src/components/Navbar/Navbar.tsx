import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbarSection}>
     <div className={styles.navbarMenu}>
      {/* Link Alanı */}
      <div className={`${styles.linkArea} ${isMenuOpen ? styles.open : ""}`}>
        <a href="/" className={isActive("/home") ? styles.active : ""}>Home</a>
        <a href="#" className={isActive("/about") ? styles.active : ""}>About</a>
        <a href="#" className={isActive("/listings") ? styles.active : ""}>Listings</a>
        <a href="#" className={isActive("/services") ? styles.active : ""}>Services</a>
        <a href="#" className={isActive("/blogs") ? styles.active : ""}>Blogs</a>
      </div>
    </div>
    <div className={styles.navbarLogo}>
        <img src="/images/rezilla-house-icon.svg" alt="Rezilla Icon" />
        <span className={styles.logoText}>Rezilla</span>
    </div>
      {/* İkonlar */}
      <div className={styles.icon}>
        <button className={styles.iconButton}>
          <img src="/images/user-icon.svg" alt="User Icon" />
        </button>
        <button className={styles.iconButton}>
          <img src="/images/rezilla-house-icon.svg" alt="Home Icon" />
        </button>
      </div>

      {/* Hamburger Menü */}
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

    </header>
  );
};

export default Navbar;
