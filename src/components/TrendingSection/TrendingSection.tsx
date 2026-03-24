import styles from "./TrendingSection.module.scss";
import TrendingBlog from "./TrendingBlog";
import { blogs } from "./blogs";

export default function TrendingSection() {
  return (
    <section className={styles.section}>
      <p className={styles.subtitle}>WHAT’S TRENDING</p>
      <h2 className={styles.title}>Latest Blogs & Posts</h2>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <TrendingBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
