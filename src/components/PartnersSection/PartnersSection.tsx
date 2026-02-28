import styles from "./PartnersSection.module.scss";

const PartnersSection = () => {
  const partnersImg = [
    "/images/partners-img1.svg",
    "/images/partners-img2.svg",
    "/images/partners-img3.svg",
    "/images/partners-img4.svg",
    "/images/partners-img5.svg",
    "/images/partners-img6.svg",
  ];
  return (
    <div className={styles.partnersContainer}>
      <p className={styles.partnersText}>
        Trusted by 100+ Companies across the globe!{" "}
      </p>
      <div className={styles.imageRow}>
        {partnersImg.map((src, index) => (
          <div key={index} className={styles.imageItem}>
            <img src={src} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
