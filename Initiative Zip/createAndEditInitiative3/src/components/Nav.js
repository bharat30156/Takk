import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.takkLogoYellow2Parent}>
      <img
        className={styles.takkLogoYellow2}
        alt=""
        src="/takk-logo--yellow-21@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search}>Search</div>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      </div>
      <a className={styles.nameOfUser}>Name of User</a>
      <img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-51.svg" />
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.getFundraisingParent}>
        <a className={styles.getFundraising}>Get Fundraising</a>
        <a className={styles.donate}>Donate</a>
        <a className={styles.community}>Community</a>
      </div>
      <div className={styles.frameInner} />
    </div>
  );
};

export default Nav;
