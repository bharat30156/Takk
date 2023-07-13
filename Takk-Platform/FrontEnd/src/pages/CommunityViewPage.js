import React from 'react';
import FeedCommunity from '../components/FeedCommunity';
import styles from './CommunityViewPage.module.css';
import {useLocation} from 'react-router-dom';
import { getAllInitiatives } from '../util/APIUtils';

const CommunityViewPage = (props) => {
  const {state} = useLocation();
  const {formData} = state;
 // const [allInitiatives, setAllInitiatives] = useState([]);
  
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  console.log(formData, "formData in CommunityView")
{/*
  let promise = getAllInitiatives();
  if(promise) {
    promise            
    .then(response => { return res.json(); })
    .then((data) => {
      setAllInitiatives(data);
    })
    .catch((error) => console.error("Error:", error));
  };  
 console.log("All initiatives", allInitiatives);
*/}

  return (
    <div className={styles.viewCommunityPage}>


      
      {formData != null && <FeedCommunity community={formData} />}

      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
     
    </div>
  );
};

export default CommunityViewPage;
