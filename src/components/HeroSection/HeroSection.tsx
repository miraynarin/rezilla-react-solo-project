import styles from './HeroSection.module.scss';
import { useState } from "react";
import { Link } from "react-router-dom";

type PropertyType = "apartment" | "villa" | "land";
type RoomType = "1+1" | "2+1" | "3+1" | "4+1";

const HeroSection = () => {
  const [listingType, setListingType] = useState<"sale" | "rent">("sale");
  const [selectedType, setSelectedType] = useState<PropertyType | "">("");
  const [selectedRoom, setSelectedRoom] = useState<RoomType | "">("");

  return (
    <div className={styles.heroFirstSection}>
      <div className={styles.heroContainer}>
        <div className={styles.leftHeroSection}>
          <div className={styles.leftHeroTop}>
            <p className={styles.leftHeroTitle}>REAL ESTATE</p>
            <h1 className={styles.leftHeroText}>
              Find a perfect home <span> you love..!</span>
            </h1>
            <p className={styles.leftHeroAccount}>
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. 
              <span>Integer a dolor eu sapien sodales vulputate ac in purus.</span>
            </p>
          </div>
          <div className={styles.leftHeroImage}>
            <img
              src="/images/herosection-left-image.svg"
              alt="HeroSection Image"
            />
          </div>
        </div>

        <div className={styles.rightHeroSection}>
          {/* Toggle Buttons */}
          <div className={styles.rightHeroTitle}>
            <button
              className={`${styles.rightForSale} ${listingType === "sale" ? styles.active : ""}`}
              onClick={() => setListingType("sale")}
            >
              For Sale
            </button>
            <button
              className={`${styles.rightForRent} ${listingType === "rent" ? styles.active : ""}`}
              onClick={() => setListingType("rent")}
            >
              For Rent
            </button>
          </div>

          <div className={styles.rightHeroSearch}>
            <div className={styles.rightTopSearch}>
              <input
                className={styles.searchFirst}
                placeholder="New York, San Francisco, etc"
              />

              <div className={styles.selectWrapper}>
                <select
                  value={selectedType}
                  onChange={(e) =>
                    setSelectedType(e.target.value as PropertyType)
                  }
                  className={styles.selectInput}
                >
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className={styles.selectWrapper}>
                <select
                  value={selectedRoom}
                  onChange={(e) =>
                    setSelectedRoom(e.target.value as RoomType)
                  }
                  className={styles.selectInput}
                >
                  <option value="">Select Rooms</option>
                  <option value="1+1">1+1</option>
                  <option value="2+1">2+1</option>
                  <option value="3+1">3+1</option>
                  <option value="4+1">4+1</option>
                </select>
              </div>
              <div className={styles.advancedSearchArea}>
                <img src="/images/advance-search-icon.svg" alt="Advance Search Icon" />
              <Link to="/advanced-search" className={styles.advanceSearch}>Advanced Search</Link>
              </div>
              <button className={styles.bottomHeroButton}>
                <img
                  className={styles.bottomHeroIcon}
                  src="/images/search-buton-icon.svg"
                  alt="Search Icon"
                />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;