import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
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
      </div>
    </div>
  );
};

export default Testimonials;
