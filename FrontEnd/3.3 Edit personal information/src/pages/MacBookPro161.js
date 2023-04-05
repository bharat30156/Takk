import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import styles from "./MacBookPro161.module.css";

const MacBookPro161 = () => {
  return (
    <div className={styles.macbookPro161}>
      <Navbar />
      <Feed />
      <Footer />
      <div className={styles.addANew}>Add a new picture...</div>
      <a className={styles.motitech}>Motitech</a>
      <div className={styles.macbookPro161Child} />
      <button className={styles.seeAllCommunity}>
        See all community members...
      </button>
    </div>
  );
};

export default MacBookPro161;
