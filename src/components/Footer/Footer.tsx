import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerSection}>
    <div className={styles.footerContainer}>
        <div className={styles.footerFirstArea}>
          <img  className={styles.footerHouseIcon} src="/images/rezilla-house-icon.svg" alt="Footer Rezilla Icon" />
          <span className={styles.footerFirstText}>Rezilla</span>
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
            <input className={styles.footerFourthEmail} placeholder='Email Address'/>     
            <button className={styles.footerFourthButton}>
             <img className={styles.footerFourthOk} src="/images/footer-ok-button.svg" alt="Footer Ok Icon" />   
            </button>
       
            <p>Follow Us on</p>
        </div>
    </div>
    </div>
  )
}

export default Footer