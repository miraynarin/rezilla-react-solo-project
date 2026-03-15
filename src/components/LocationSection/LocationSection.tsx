import styles from "./LocationSection.module.scss";

const properties = [
  {
    id: 1,
    count: 216,
    city: "New York City, NY",
    imageUrl: "/images/LocationSection/locationSection-img1.jpg",
  },
  {
    id: 2,
    count: 141,
    city: "Houston, TX",
    imageUrl: "/images/LocationSection/locationSection-img2.jpg",
  },
  {
    id: 3,
    count: 212,
    city: "San Diego, CA",
    imageUrl: "/images/LocationSection/locationSection-img3.jpg",
  },
  {
    id: 4,
    count: 183,
    city: "Philadelphia, PA",
    imageUrl: "/images/LocationSection/locationSection-img5.jpg",
  },
  {
    id: 5,
    count: 112,
    city: "San Francisco, CA",
    imageUrl: "/images/LocationSection/locationSection-img4.jpg",
  },
];

const LocationSection = () => {
  return (
    <div className={styles.locationSection}>
      <div className={styles.locationContainer}>
        <div className={styles.locationTopArea}>
          <p className={styles.locationTitle}>AREAS ACROSS THE TOWN</p>
          <h2 className={styles.locationText}>Neighborhood Properties</h2>
        </div>
        <div className={styles.locationBottomArea}>
          {properties.map(({ id, count, city, imageUrl }) => (
            <div key={id} className={styles.propertiesCard}>
              <img src={imageUrl} alt={city} className={styles.cardImage} />
              <div className={styles.locationLayer}>
                <span className={styles.locationCount}>{count}</span>
                <span className={styles.locationCity}>{city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
