import styles from "./NavBarCommunity.module.css";

const NavBar = () => {
  return (
    <div className={styles.takkLogoYellow2Parent}>
      <img
        className={styles.takkLogoYellow2}
        alt=""
        src="../takk-logo--yellow-2@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.nameOfUser}>Name of User</div>
      <img className={styles.frameItem} alt="" src="../ellipse-4@2x.png" />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-5.svg" />
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.getFundraisingParent}>
        <a className={styles.getFundraising}>Get Fundraising</a>
        <a className={styles.donate}>Donate</a>
        <a className={styles.community}>Community</a>
      </div>
      <div className={styles.frameInner} />
      <input className={styles.frameInput} type="text" placeholder="Search" />
      <div className={styles.image6Wrapper}>
        <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
      </div>
    </div>
  );
};

export default NavBar;
