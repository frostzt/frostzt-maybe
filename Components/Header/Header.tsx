import Image from "next/image";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            width={240}
            height={240}
            alt="Sourav Singh Rawat"
            src="https://avatars.githubusercontent.com/u/25434993?v=4"
          />
        </div>
      </div>
      <h1 className={styles.title}>Hi, I am Sourav!</h1>
    </div>
  );
};

export default Header;
