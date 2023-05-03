import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.communityPageEditAndCre}>
      
      <img
        className={styles.takkLogoYellow2}
        alt=""
        src="../takk-logo--yellow-2@2x.png"
      />
      <div className={styles.communityPageEditAndCreInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.nameOfUser}>Name of User</div>
      <img
        className={styles.communityPageEditAndCreChild}
        alt=""
        src="../ellipse-4@2x.png"
      />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-5.svg" />
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.getFundraisingParent}>
        <a className={styles.getFundraising}>Get Fundraising</a>
        <a className={styles.donate}>Donate</a>
        <Link to="/CommunityList"><a className={styles.community}>Community</a></Link>
      </div>
      <input
        className={styles.communityPageEditAndCreItem}
        type="text"
        placeholder="Search"
      />
      <div className={styles.image7Wrapper}>
        <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
      </div>
    </div>
  );
};

export default Navbar;
