import styles from "./RegisterNow.module.scss";
const RegisterNow = () => {
  return (
    <div className={styles.registerNowSection}>
      <input className={styles.registerNowText} placeholder="Name :" />
      <input className={styles.registerNowEmail} placeholder="Email :" />
      <input className={styles.registerNowPassword} placeholder="Password :" />
    </div>
  );
};

export default RegisterNow;
