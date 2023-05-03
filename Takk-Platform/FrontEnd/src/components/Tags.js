import styles from "./Tags.module.css";

const Tags = () => {
  return (
    <div className={styles.tagsParent}>
      <b className={styles.tags}>Tags</b>
      <button className={styles.seeAllTags}>See all tags....</button>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.medical}>
          <p className={styles.medical1}>Medical</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.education}>
          <p className={styles.medical1}>Education</p>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.sports}>
          <p className={styles.medical1}>Sports</p>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.animalAndPets}>Animal and Pets</div>
      </div>
    </div>
  );
};

export default Tags;
