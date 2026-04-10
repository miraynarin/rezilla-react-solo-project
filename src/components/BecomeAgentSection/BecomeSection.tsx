import styles from "./BecomeSection.module.scss";
import PurpleCircle from "../PurpleCircle";

const BecomeSection = () => {
  return (
    <div className={styles.becomeSection}>
      <div className={styles.becomeContainer}>
        <PurpleCircle
          className={styles.smallCircle}
          width="60px"
          height="60px"
          left="2%"
          bottom="10px"
          rotation={-30}
        />
        <img
          className={styles.becomeImage}
          src="/images/BecomeSection/becomeAgent-img1.png"
          alt="Become Icon"
        />
        <PurpleCircle
          className={styles.bigCircle}
          width="100px"
          height="100px"
          left="15%"
          top="60px"
          rotation={0}
          color="linear-gradient(180deg, #A855F7 0%, rgba(168, 85, 247, 0) 100%)"
        />
        <div className={styles.becomeRightArea}>
          <div className={styles.becomeTextArea}>
            <p className={styles.becomeTitle}>Become a Agent.</p>
            <p className={styles.becomeText}>
              Fusce venenatis tellus a felis scelerisque.
              <br /> venenatis tellus a felis scelerisque.
            </p>
            <PurpleCircle
              className={styles.bigCircle}
              width="100px"
              height="100px"
              left="30%"
              top="80px"
              rotation={0}
              color="linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)"
            />
          </div>
          <button className={styles.becomeButton}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default BecomeSection;
