import styles from "./Testimonials.module.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "./testimonialsData";

// Props tipi tanımı
interface TestimonialCardProps {
  name: string;
  text: string;
  role: string;
  image: string;
}

// Tekil kart componenti
const TestimonialsCard = ({
  name,
  text,
  role,
  image,
}: TestimonialCardProps) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>
      <img src={image} alt={name} className={styles.TestimonialAvatar} />
      <p className={styles.Testimonialstext}>{text}</p>
      <p className={styles.Testimonialsname}>{name}</p>
      <p className={styles.Testimonialsrole}>{role}</p>
    </div>
  );
};

// Ana Testimonials componenti
const Testimonials = () => {
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
              name={t.name}
              text={t.text}
              role={t.role}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
