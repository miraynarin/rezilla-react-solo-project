
import styles from './FooterBottom.module.scss';


const FooterBottom = () => {
  return (
    <div className={styles.footerBottomSection}>
        <div className={styles.footerBottomContainer}>
         <div className={styles.footerBottom}>
            <span>© 2026 Rezilla. All rights reserved.</span>
          <ul className={styles.footerLinks}>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
        </ul>
        </div>
       </div>
    </div>
  )
}

export default FooterBottom