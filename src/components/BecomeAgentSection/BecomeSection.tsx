import styles from "./BecomeSection.module.scss";

const BecomeSection = () => {
  return (
    <div className={styles.becomeSection}>
      <div className={styles.becomeContainer}>
        <img
          className={styles.becomeImage}
          src="/images/BecomeSection/becomeAgent-img1.png"
          alt="Become Icon"
        />
      </div>
    </div>
  );
};

export default BecomeSection;
