import styles from "./TestimonialsCard.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  text: string;
  role: string;
  image: string;
}

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

export default TestimonialsCard;
