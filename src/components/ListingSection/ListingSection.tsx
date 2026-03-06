import { useState } from "react";
import styles from "./ListingSection.module.scss";

const ListingSection = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className={styles.listingSection}>
      <div className={styles.listingTopSection}>
        <div className={styles.listingTopLeft}>
          <p className={styles.listingTopLeftTitle}>CHECKOUT OUR NEW</p>
          <p className={styles.listingTopLeftText}>Latest Listed Properties</p>
          <p className={styles.listingTopLeftExplain}>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
            <br /> nec dignissim purus.
          </p>
        </div>
        <div className={styles.listingFilterButtons}>
          <button
            className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "sell" ? styles.active : ""}`}
            onClick={() => setFilter("sell")}
          >
            Sell
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "rent" ? styles.active : ""}`}
            onClick={() => setFilter("rent")}
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingSection;
