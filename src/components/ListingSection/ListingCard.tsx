import React from "react";
import styles from "./ListingCard.module.scss";
import { FaBed, FaBath, FaFire, FaHome, FaDollarSign } from "react-icons/fa";

type ListingCardProps = {
  imageUrl: string;
  price: number;
  title: string;
  address: string;
  beds: number;
  baths: number;
  type: "popular" | "new" | "discounted";
};

const categoryTexts = {
  popular: {
    text: "Popular",
    icon: <FaFire />,
    colorClass: styles.popularCategory,
  },
  new: {
    text: "New Listing",
    icon: <FaHome />,
    colorClass: styles.newCategory,
  },
  discounted: {
    text: "Discounted Price",
    icon: <FaDollarSign />,
    colorClass: styles.discountedCategory,
  },
};

const ListingCard: React.FC<ListingCardProps> = ({
  imageUrl,
  price,
  title,
  address,
  beds,
  baths,
  type,
}) => {
  return (
    <div className={styles.listingCard}>
      <div className={styles.listingImageWrapper}>
        <img src={imageUrl} alt={title} className={styles.listingImage} />
        {type && (
          <div
            className={`${styles.listingCategory} ${categoryTexts[type].colorClass}`}
          >
            <span className={styles.listingCategoryIcon}>
              {categoryTexts[type].icon}
            </span>
            {categoryTexts[type].text}
          </div>
        )}
      </div>

      <div className={styles.listingContent}>
        <h3 className={styles.listingPrice}>
          ${typeof price === "number" ? price.toLocaleString() : price}
        </h3>
        <h4 className={styles.listingBottomTitle}>{title}</h4>
        <p className={styles.listingBottomAddress}>{address}</p>

        <div className={styles.listingBottomFeatures}>
          <span className={styles.listingBottomFeature}>
            <FaBed className={styles.listingBottomFeatureIcon} /> {beds} Beds
          </span>
          <span className={styles.listingBottomFeature}>
            <FaBath className={styles.listingBottomFeatureIcon} /> {baths} Bath
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
