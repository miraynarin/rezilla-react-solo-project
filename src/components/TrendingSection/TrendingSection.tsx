import styles from "./TrendingSection.module.scss";
import TrendingCard from "./TrendingCard";
import blogs from "./TrendingBlog";
import { useState } from "react";

export default function TrendingSection() {
  // Slider state
  const [startIndex, setStartIndex] = useState(0);

  // Gösterilecek 3 kart
  const visibleBlogs = blogs.slice(startIndex, startIndex + 3);

  // Slider arrow fonksiyonları
  const nextSlide = () => {
    if (startIndex + 3 < blogs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className={styles.TrendingSection}>
      <div className={styles.TrendingContainer}>
        <div className={styles.TrendingTop}>
          <p className={styles.TrendingSubtitle}>WHAT’S TRENDING</p>
          <h2 className={styles.TrendingTitle}>Latest Blogs & Posts</h2>
        </div>
        {/* Kartlar */}
        <div className={styles.TrendingGrid}>
          {visibleBlogs.map((blog) => (
            <TrendingCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Ok Tuşları */}
        <div className={styles.TrendingArrows}>
          <button className={styles.TrendingPrevArrow} onClick={prevSlide}>
            ←
          </button>
          <button className={styles.TrendingNextArrow} onClick={nextSlide}>
            →
          </button>
        </div>

        {/* Alt Çizgiler (3 çizgi sabit) */}
        <div className={styles.TrendinglineIndicatorWrapper}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.TrendinglineIndicator} ${
                startIndex === index ? styles.active : ""
              }`}
              onClick={() => setStartIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
