import styles from "./LocationSection.module.scss";

const LocationSection = () => {
  return (
    <div className={styles.locationSection}>
      <div className={styles.locationContainer}>
        <div className={styles.locationTopArea}>
          <p className={styles.locationTitle}>AREAS ACROSS THE TOWN</p>
          <h2 className={styles.locationText}>Neighborhood Properties</h2>
        </div>
        <div className={styles.locationBottomArea}></div>
      </div>
    </div>
  );
};

export default LocationSection;
