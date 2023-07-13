import styles from './communityCard.module.css';
import { Link } from "react-router-dom";
import React from 'react';
import { imageDataConvertToUint8 } from '../util/APIUtils';

const CommunityCard = ({ communities }) => {

  let slicedArray;
  if (Array.isArray(communities)) {
    slicedArray = communities.slice(0, 9);
    console.log("slicedarray ",slicedArray)
  } else {
    console.log("communities not array");
  }

  return (
    <div>
      <div className={styles.frameGroup}>
        {slicedArray.map((community) => {
          const firstImage =
          community.images && community.images[0] ? community.images[0] : null;

          const firstImageUrl = 
            firstImage ? imageDataConvertToUint8(firstImage.imageData) :null;

          return (
            <div key={community.id} className={styles.image7Parent}>
              <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
              <div className={styles.overviewOfTheCommunityForParent}>

               
                <img
                  className={styles.communityimage}
                  alt=""
                  src={firstImageUrl}
                />

                <b className={styles.titleOfThe}>{community.nameOfCommunity}</b>
                <div className={styles.overviewOfThe}>{community.shortDescriptionOfCommunity}</div>
                <button className={styles.rectangleWrapper}>
                  <div className={styles.groupItem} />
                </button>
                <Link to="/CommunityView" state={{ formData: community }}>
                  <button className={styles.findOutMore}>Find out more</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityCard;
