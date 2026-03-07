import { useState } from "react";
import styles from "./ListingSection.module.scss";
import ListingCard from "./ListingCard";

const listings = [
  {
    id: 1,
    imageUrl: "/images/ListingSection/listingsection-card1.jpg",
    price: 5970,
    title: "Tranquil Haven in the Woods",
    address: "103 Wright CourtBurien, WA 98168",
    beds: 4,
    baths: 3,
    type: "popular",
    category: "sell",
  },
  {
    id: 2,
    imageUrl: "/images/ListingSection/listingsection-card2.jpg",
    price: 1970,
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    beds: 3,
    baths: 2,
    type: "new",
    category: "rent",
  },
  {
    id: 3,
    imageUrl: "/images/ListingSection/listingsection-card3.jpg",
    price: 3450,
    title: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm Road",
    beds: 4,
    baths: 4,
    type: "discounted",
    category: "sell",
  },
  {
    id: 4,
    imageUrl: "/images/ListingSection/listingsection-card4.jpg",
    price: 2389,
    title: "Grand Estate on the Hill",
    address: "103 Wright Court Burien",
    beds: 4,
    baths: 3,
    type: "popular",
    category: "rent",
  },
];

const ListingSection = () => {
  const [filter, setFilter] = useState("all");
  const filteredListings =
    filter === "all"
      ? listings
      : listings.filter((item) => item.category === filter);
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
      <div className={styles.cardGrid}>
        {filteredListings.map((item) => (
          <ListingCard
            key={item.id}
            imageUrl={item.imageUrl}
            price={item.price}
            title={item.title}
            address={item.address}
            beds={item.beds}
            baths={item.baths}
            type={item.type as "popular" | "new" | "discounted"}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingSection;
