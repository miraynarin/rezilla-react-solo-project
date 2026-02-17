
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.heroFirstSection}>
    <div className={styles.heroContainer}>
        <div className={styles.leftHeroTop}>
        <p className={styles.leftHeroTitle}>REAL ESTATE</p>
        <h1 className={styles.leftHeroText}>Find a perfect home  <span> you love..!</span></h1>
        <p className={styles.leftHeroAccount}>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. <span>Integer a dolor eu sapien sodales vulputate ac in purus.</span></p>
        </div>
        <div className={styles.leftHeroBottom}>
            <img src="/images/HeroSection-image.svg" alt="HeroSection Image">
            </img>
        </div>
    </div>
    </div>
  )
}

export default HeroSection