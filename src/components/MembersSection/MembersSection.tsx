import styles from "./MembersSection.module.scss";

const MembersSection = () => {
  return (
    <div className={styles.memberSection}>
      <div className={styles.memberContainer}>
        <div className={styles.memberTopArea}>
          <p className={styles.memberTitle}>Introduce yourself to</p>
          <p className={styles.memberText}>Our Team of Experts</p>
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
