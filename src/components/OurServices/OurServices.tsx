import styles from "./OurServices.module.scss";
import { SearchIcon, HomeIcon, ProductIcon } from "../../assets/icons";

const OurServices = () => {
  return (
    <div className={styles.ourServicesSection}>
      <div className={styles.ourTopArea}>
        <p className={styles.ourTopTitle}>Our Services </p>
        <h2 className={styles.outTopText}>Donec porttitor euismod dignissim</h2>
      </div>
      <div className={styles.ourBottomArea}>
        <div className={styles.ourFirstCard}>
          <SearchIcon className={styles.ourIconWrapper} />
          <h4>Buy a New Home</h4>
          <p>
            Donec porttitor euismod <br />
            dignissim. Nullam a lacinia
            <br /> ipsum, nec dignissim purus.
          </p>
        </div>

        <div className={styles.ourSecondCard}>
          <HomeIcon className={styles.ourIconWrapper} />
          <h4>Sell a House</h4>
          <p>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>

        <div className={styles.ourThirdCard}>
          <ProductIcon className={styles.ourIconWrapper} />
          <h4>Rent a House</h4>
          <p>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
