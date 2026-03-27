import styles from "./TrendingSection.module.scss";
import TrendingCard from "./TrendingCard";
import blogs from "./TrendingBlog";
import { useState } from "react";

export default function TrendingSection() {
  // Slider state
  const [startIndex, setStartIndex] = useState(0);

  // Gösterilecek 3 kart
  const visibleBlogs = blogs.slice(startIndex, startIndex + 3);

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

        {/* Alt Çizgiler (3 çizgi sabit) */}
        <div className={styles.TrendinglineIndicatorWrapper}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.TrendinglineIndicator} ${
                startIndex === index ? styles.active : ""
              }`}
              onClick={() => {
                // startIndex’in slice sınırları içinde kalmasını sağla
                const maxIndex = blogs.length - 3; // 3 kart gösteriliyor
                setStartIndex(index <= maxIndex ? index : maxIndex);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
