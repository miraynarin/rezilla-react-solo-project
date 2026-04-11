import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topbarSection}>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarLeft}>
          <img
            className={styles.topbarPhoneIcon}
            src="./images/Topbar/topbar-location-icon.svg"
            alt="topbar-location"
          />
          <span>Rezilla, 18 Grattan St, Brooklyn</span>
        </div>
        <div className={styles.topbarRight}>
          <div className={styles.topbarItem}>
            <img
              className={styles.topbarPhoneIcon}
              src="./images/Topbar/topbar-phone-icon.svg"
              alt="topbar-phone"
            />
            <p className={styles.rightPhone}>+1 206-214-2298</p>
          </div>
          <div className={styles.topbarItem}>
            <img
              className={styles.topbarPhoneIcon}
              src="./images/Topbar/topbar-mail-icon.svg"
              alt="topbar-mail"
            />
            <p className={styles.rightEmail}>support@rezilla.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
