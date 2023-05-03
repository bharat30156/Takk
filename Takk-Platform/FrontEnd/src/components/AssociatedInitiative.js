import styles from "./AssociatedInitiative.module.css";

const AssociatedInitiative = () => {
  return (
    <div className={styles.associatedInitiativeWithThiParent}>
      <b
        className={styles.associatedInitiativeWith}
      >{`Associated Initiative with this Community  `}</b>
      <div className={styles.frameChild} />
      <button className={styles.seeAllCommunity}>
        See all community initiatives
      </button>
      <div className={styles.image7Parent}>
        <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
        <div className={styles.overviewOfTheInitiativeForParent}>
          <div className={styles.overviewOfThe}>
            Overview of the Initiative for the users to get an idea
          </div>
          <button className={styles.frameItem} />
          <button className={styles.findOutMore}>Find out more</button>
          <b className={styles.titleOfThe}>Title of the Initiative</b>
        </div>
      </div>
      <div className={styles.image7Group}>
        <img className={styles.image7Icon} alt="" src="../image-71@2x.png" />
        <div className={styles.overviewOfTheInitiativeForGroup}>
          <div className={styles.overviewOfThe}>
            Overview of the Initiative for the users to get an idea
          </div>
          <button className={styles.rectangleWrapper}>
            <div className={styles.groupChild} />
          </button>
          <button className={styles.findOutMore}>Find out more</button>
          <b className={styles.titleOfThe}>Title of the Initiative</b>
        </div>
      </div>
      <div className={styles.image7Container}>
        <img className={styles.image7Icon} alt="" src="../image-72@2x.png" />
        <div className={styles.overviewOfTheInitiativeForParent}>
          <div className={styles.overviewOfThe}>
            Overview of the Initiative for the users to get an idea
          </div>
          <div className={styles.rectangleContainer}>
            <button className={styles.groupItem} />
          </div>
          <button className={styles.findOutMore}>Find out more</button>
          <b className={styles.titleOfThe}>Title of the Initiative</b>
        </div>
      </div>
    </div>
  );
};

export default AssociatedInitiative;
