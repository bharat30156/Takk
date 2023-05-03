import React from 'react';
import FeedInitiative from '../components/FeedInitiative';
import styles from './CommunityViewPage.module.css';
import {useLocation} from 'react-router-dom';

const InitiativeViewPage = (props) => {
  const {state} = useLocation();
  const {formData} = state;
  
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  console.log(formData)
  console.log(22,formData.nameofInitiative)

 
  return (
    <div className={styles.viewCommunityPage}>  
      <FeedInitiative communities={formData} />
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      
    </div>
  );
};

export default InitiativeViewPage;
