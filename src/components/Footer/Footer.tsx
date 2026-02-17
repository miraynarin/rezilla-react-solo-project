import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerSection}>
    <div className={styles.footerContainer}>
        <div className={styles.footerFirstArea}>
          <div className={styles.footerIconGroup}>
          <img  className={styles.footerHouseIcon} src="/images/rezilla-house-icon.svg" alt="Footer Rezilla Icon" />
          <span className={styles.footerFirstText}>Rezilla</span>
        </div>  
          <p className={styles.footerFirstAdress}>2728 Hickory StreetSalt <br />Lake City, UT 84104</p>
          <p className={styles.footerFirstPhone}>+1 206-214-2298</p>
          <p className={styles.footerFirstEmail}>support@rezilla.com</p>
        </div>
        <div className={styles.footerSecondArea}>
            <h4>Quick Links</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Services</li>
                <li>Blogs</li>
                <li>Become a Agent</li>
            </ul>
        </div>
        <div className={styles.footerThirdArea}>
               <h4>Discovery</h4>
            <ul>
                <li>Canada</li>
                <li>United States</li>
                <li>Germany</li>
                <li>Africa</li>
            </ul>
        </div>
        <div className={styles.footerFourthArea}>
            <h4 className={styles.footerFourthTitle}>Subscribe to our Newsletter!</h4>
            <div className={styles.footerFourthIconWrapper}>
            <input className={styles.footerFourthEmail} placeholder='Email Address'/>     
            <button className={styles.footerFourthButton}>
             <img className={styles.footerFourthOk} src="/images/footer-ok-button.svg" alt="Footer Ok Icon" />   
            </button>
            </div>
            <p>Follow Us on</p>
            <div className={styles.socialIcons}>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
               <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
               </a>

               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <img src="/images/facebook-icon.svg" alt="Facebook" />
               </a>

               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
               <img src="/images/instagram-icon.svg" alt="Instagram" />
               </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer