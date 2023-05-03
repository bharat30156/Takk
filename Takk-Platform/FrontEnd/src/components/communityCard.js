import styles from './communityCard.module.css';
import { Link } from "react-router-dom";
import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CommunityCard = ({ communities }) => {

  return (
    <div>
        <div className={styles.frameGroup}>
        {communities.map((community) => (
            <div key={community.id} className={styles.image7Parent}>
            <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
            <div className={styles.overviewOfTheCommunityForParent}>
                <img className={styles.communityimage} alt="" src={community.images}/>;

                <b className={styles.titleOfThe}>{community.nameOfCommunity}</b>
                <div className={styles.overviewOfThe}>
                  {community.shortDescriptionOfCommunity}
                </div>
                <button className={styles.rectangleWrapper}>
                    <div className={styles.groupItem} />
                </button>

                <Link to ="/CommunityView" state={{formData: community}}> 
                  <button className={styles.findOutMore}>Find out more</button>
                </Link>

            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CommunityCard;