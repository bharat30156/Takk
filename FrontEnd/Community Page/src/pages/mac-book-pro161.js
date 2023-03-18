import Navbar from "../components/navbar";
import Feed from "../components/feed";
import Footer from "../components/footer";
import styles from "./mac-book-pro161.module.css";


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
