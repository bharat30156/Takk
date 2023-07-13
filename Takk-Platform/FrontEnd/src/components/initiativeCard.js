import styles from './communityCard.module.css';
import { Link } from "react-router-dom";
import React, {useState} from 'react';

const InitiativeCard = ({ initiativelist }) => {
  console.log("initiativelist ",initiativelist)

  return (
    <div>
      
      <div className={styles.frameGroup}>
    
          {initiativelist?.map((initiative) => (

           <ul className={styles.list}>
            <li key={initiative.id} className={styles.image7Parent}>
              <img className={styles.image7Icon} alt="" src={initiative.imagesAndVideo} />

              <div className={styles.overviewOfTheCommunityForParent}>
                <div className={styles.overviewOfThe}>
                  {initiative.descriptionOfInitiative}
                </div>

                <button className={styles.rectangleWrapper}>
                  <div className={styles.groupItem} />
                </button>
                
                <Link to ="/InitiativeView" state={{originalformData:initiative}}> 
                  <button className={styles.findOutMore}>Find out more</button>
                </Link>
                
                <b className={styles.titleOfThe}>{initiative.nameofInitiative}</b>
              </div>
            </li>
            </ul>
            
          ))}
        </div>
      </div>
  );
};

export default InitiativeCard;