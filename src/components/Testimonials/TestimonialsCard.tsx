import styles from "./TestimonialsCard.module.scss";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  stars: number;
}

const TestimonialsCard = ({
  name,
  text,
  image,
  stars,
}: TestimonialCardProps) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>

      <p className={styles.testimonialsText}>{text}</p>
      <img src={image} alt={name} className={styles.testimonialAvatar} />
      <p className={styles.testimonialsName}>{name}</p>
      <div className={styles.stars}>
        {Array.from({ length: stars }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCard;
