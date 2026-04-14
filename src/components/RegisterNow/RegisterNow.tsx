import styles from "./RegisterNow.module.scss";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  onClose: () => void;
};

const RegisterNow = ({ onClose }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.registerNowSection}>
      <input className={styles.registerNowText} placeholder="Name :" />
      <input className={styles.registerNowEmail} placeholder="Email :" />

      <div className={styles.passwordWrapper}>
        <input
          className={styles.registerNowPassword}
          placeholder="Password :"
          type={showPassword ? "text" : "password"}
        />

        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button className={styles.registerNowButton}>Register</button>

      <button className={styles.registerNowClose} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default RegisterNow;
