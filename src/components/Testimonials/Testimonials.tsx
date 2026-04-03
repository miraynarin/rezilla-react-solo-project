import { useState } from "react";
import styles from "./Testimonials.module.scss";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "./testimonialsData";

// Props tipi tanımı
interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  stars: number;
}

// Tekil kart componenti
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
      <div className={styles.testimonialsUsers}>
        <div className={styles.testimonialsInfo}>
          <img src={image} alt={name} className={styles.testimonialAvatar} />
          <p className={styles.testimonialsName}>{name}</p>
        </div>
        <div className={styles.testimonialStars}>
          {Array.from({ length: stars }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Ana Testimonials componenti
const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        {/* Sol alan */}
        <div className={styles.testimonialLeftArea}>
          <p className={styles.testimonialLeftTitle}>TESTIMONIALS</p>
          <p className={styles.testimonialLeftSubtitle}>
            Look What Our <br />
            Customers Say!
          </p>
          <p className={styles.testimonialLeftText}>
            Fusce venenatis tellus a felis scelerisque, non <br />
            pulvinar est pellentesque.
          </p>
        </div>

        {/* Sağ alan - kartlar */}
        <div className={styles.testimonialRightArea}>
          {testimonials.map((t) => (
            <TestimonialsCard
              key={t.id}
              text={t.text}
              name={t.name}
              image={t.image}
              stars={t.rating}
            />
          ))}
        </div>
        {/* Vertical Slider Indicator */}
        <div className={styles.TrendinglineIndicatorWrapper}>
          {testimonials.map((_, index) => (
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
    </div>
  );
};

export default Testimonials;
