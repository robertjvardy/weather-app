import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const LoginBanner = () => {
  // TODO create logic for is logged in
  return (
    <div className={styles["login-banner"]}>
      <Link to="login">Login</Link>
    </div>
  );
};

export default LoginBanner;
