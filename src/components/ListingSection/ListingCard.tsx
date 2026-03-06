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
    text: "Popular",
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
}) => (
  <div className={styles.cardSection}>
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt={title} className={styles.image} />
      {type && (
        <div className={`${styles.category} ${categoryTexts[type].colorClass}`}>
          <span className={styles.categoryIcon}>
            {categoryTexts[type].icon}
          </span>
          {categoryTexts[type].text}
        </div>
      )}
    </div>
    <div className={styles.content}>
      <h3 className={styles.price}>
        ${typeof price === "number" ? price.toLocaleString() : price}
      </h3>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.address}>{address}</p>
      <div className={styles.features}>
        <span className={styles.feature}>
          <FaBed className={styles.featureIcon} /> {beds} Beds
        </span>
        <span className={styles.feature}>
          <FaBath className={styles.featureIcon} /> {baths} Bath
        </span>
      </div>
    </div>
  </div>
);

export default ListingCard;
