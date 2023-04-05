import styles from './communityCard.module.css';
import { Link } from "react-router-dom";
import React from 'react';

const CommunityCard = ({ communities }) => {
 

  return (
    <div>
        <div className={styles.frameGroup}>
        {communities.map((community) => (
            <div key={community.id} className={styles.image7Parent}>
            <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
            <div className={styles.overviewOfTheCommunityForParent}>
                <div className={styles.overviewOfThe}>
                {community.descriptionOfCommunity}
                </div>
                <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
                </button>
                <Link to ="/CommunityPage"> <button className={styles.findOutMore}>Find out more</button></Link>
                <b className={styles.titleOfThe}>{community.nameOfCommunity}</b>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CommunityCard;