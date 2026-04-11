import styles from "./BecomeSection.module.scss";
import PurpleCircle from "../PurpleCircle";

const BecomeSection = () => {
  const secondPurpleCircle =
    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 400, 0) 100%";

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
          left="15.15%"
          top="72px"
          rotation={0}
          color={secondPurpleCircle}
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
              left="55%"
              bottom="-40px"
              rotation={-30}
              color={secondPurpleCircle}
            />
          </div>
          <button className={styles.becomeButton}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default BecomeSection;
