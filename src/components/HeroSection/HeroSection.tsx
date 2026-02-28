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

  // Slider resimleri ve aktif index
  const slides = [
    "/images/herosection-left-image.png",
    "/images/herosection-left-image2.jpg",
    "/images/herosection-left-image3.jpg",
    "/images/herosection-left-image2.jpg",
  ];
  const customers = [
    "/images/hero-stats-user1.png",
    "/images/hero-stats-user2.png",
    "/images/hero-stats-user3.png",
    "/images/hero-stats-user4.png",
    "/images/hero-stats-user5.png",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  // Dışarı tıklayınca dropdown kapatma
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

  // Slider geçiş fonksiyonları
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.heroFirstSection}>
      <div className={styles.heroContainer}>
        {/* LEFT SIDE */}
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

          {/* MANUEL SLIDER */}
          <div className={styles.leftHeroBottom}>
            <div className={styles.mainSlider}>
              <img src={slides[activeIndex]} alt={`slide-${activeIndex + 1}`} />

              {/* OK TUŞLARI */}
              <button className={styles.prevArrow} onClick={prevSlide}>
                <img src="/images/herosection-left-icon.png" alt="Previous" />
              </button>
              <button className={styles.nextArrow} onClick={nextSlide}>
                <img src="/images/herosection-right-icon.png" alt="Next" />
              </button>
            </div>

            {/* ALT ÇİZGİLER */}
            <div className={styles.lineIndicatorWrapper}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.lineIndicator} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
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
                    className={`${styles.arrow} ${openDropdown === "type" ? styles.arrowOpen : ""}`}
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
                    className={`${styles.arrow} ${openDropdown === "room" ? styles.arrowOpen : ""}`}
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
      <div className={styles.heroStatsElements}>
        <div className={styles.heroLeftStats}>
          <div className={styles.avatarGroup}>
            {customers.map((img, index) => (
              <div key={index} className={styles.avatar}>
                <img src={img} alt={`customer-${index}`} />
              </div>
            ))}
          </div>

          <div className={styles.customerText}>
            <p>72k+ Happy</p>
            <p>Customers</p>
          </div>
        </div>
        <div className={styles.heroRightStats}>
          <img src="./images/hero-stats-right.png" alt="hero-stats-right" />
          <p>
            200+ New <br /> Listings Everyday!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
