import styles from "./HeroSection.module.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

type PropertyType = "apartment" | "villa" | "land";
type RoomType = "1+1" | "2+1" | "3+1" | "4+1";

const HeroSection = () => {
  const [listingType, setListingType] = useState<"sale" | "rent">("sale");
  const [selectedType, setSelectedType] = useState<PropertyType | "">("");
  const [selectedRoom, setSelectedRoom] = useState<RoomType | "">("");

  const [openDropdown, setOpenDropdown] = useState<"type" | "room" | null>(
    null,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // dışarı tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <span>
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </span>
            </p>
          </div>
          <div className={styles.leftHeroImage}>
            <img src="/images/herosection-left-image.png" alt="HeroSection" />
          </div>
        </div>

        <div className={styles.rightHeroSection}>
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
            <div className={styles.rightTopSearch} ref={dropdownRef}>
              <input
                className={styles.searchFirst}
                placeholder="New York, San Francisco, etc"
              />

              {/* PROPERTY TYPE */}
              <div className={styles.customSelect}>
                <div
                  className={styles.selectHeader}
                  onClick={() =>
                    setOpenDropdown(openDropdown === "type" ? null : "type")
                  }
                >
                  {selectedType || "Select Property Type"}
                  <span
                    className={`${styles.arrow} ${
                      openDropdown === "type" ? styles.arrowOpen : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {openDropdown === "type" && (
                  <ul className={styles.dropdown}>
                    {["apartment", "villa", "land"].map((item) => (
                      <li
                        key={item}
                        onClick={() => {
                          setSelectedType(item as PropertyType);
                          setOpenDropdown(null);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* ROOM TYPE */}
              <div className={styles.customSelect}>
                <div
                  className={styles.selectHeader}
                  onClick={() =>
                    setOpenDropdown(openDropdown === "room" ? null : "room")
                  }
                >
                  {selectedRoom || "Select Rooms"}
                  <span
                    className={`${styles.arrow} ${
                      openDropdown === "room" ? styles.arrowOpen : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {openDropdown === "room" && (
                  <ul className={styles.dropdown}>
                    {["1+1", "2+1", "3+1", "4+1"].map((room) => (
                      <li
                        key={room}
                        onClick={() => {
                          setSelectedRoom(room as RoomType);
                          setOpenDropdown(null);
                        }}
                      >
                        {room}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.advancedSearchArea}>
                <img src="/images/advance-search-icon.svg" alt="icon" />
                <Link to="/advanced-search" className={styles.advanceSearch}>
                  Advanced Search
                </Link>
              </div>

              <button className={styles.bottomHeroButton}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
