import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeftContainer}>
          <div className={styles.aboutLeftTextArea}>
            <p className={styles.leftTextAreaTitle}>WHO ARE WE</p>
            <p className={styles.leftTextAreaContent}>
              Assisting individuals in <br />
              locating the appropriate <br />
              real estate.
            </p>
            <p className={styles.leftTextAreaExplain}>
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
              <br /> nec dignissim purus. Nulla convallis ipsum molestie nibh
              <br />
              malesuada, ac malesuada leo volutpat.
            </p>
          </div>
          <div className={styles.leftBottomArea}>
            <div className={styles.leftBottomHome}>
              <img
                src="./images/aboutSection-home.svg"
                alt="aboutSection-home"
              />
              <div className={styles.bottomHomeTextArea}>
                <p className={styles.bottomHomeText}>Donec porttitor euismod</p>
                <p className={styles.bottomHomeExplain}>
                  Nullam a lacinia ipsum, nec <br /> dignissim purus. Nulla
                </p>
              </div>
            </div>
            <div className={styles.leftBottomUser}>
              <img
                src="./images/aboutSection-user.svg"
                alt="aboutSection-user"
              />
              <div className={styles.bottomHomeUserArea}>
                <p className={styles.bottomHomeText}>Donec porttitor euismod</p>
                <p className={styles.bottomHomeExplain}>
                  Nullam a lacinia ipsum, nec <br /> dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutRightContainer}>
          <div className={styles.rightBottomImg}>
            <img
              className={styles.bottomFirstImg}
              src="./images/aboutSection-right-img1.svg"
              alt="aboutSection-right1"
            />
          </div>
          <div className={styles.rightTopImg}>
            <img
              className={styles.topSecondImg}
              src="./images/aboutSection-right-img2.svg"
              alt="aboutSection-right3"
            />
            <img
              src="./images/aboutSection-right-img3.svg"
              alt="aboutSection-right3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
