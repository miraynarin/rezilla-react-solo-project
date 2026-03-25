import styles from "./TrendingSection.module.scss";

type Props = {
  blog: {
    id: number;
    title: string;
    desc: string;
    image: string;
    date: string;
    day: string;
  };
};

export default function TrendingCard({ blog }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={blog.image} alt={blog.title} />
        <div className={styles.dateOverlay}>
          <span>{blog.date}</span>
          <small>{blog.day}</small>
        </div>
      </div>
      <div className={styles.TrendingText}>
        <h3>{blog.title}</h3>
        <p>{blog.desc}</p>
      </div>
      <button className={styles.arrow}>→</button>
    </div>
  );
}
