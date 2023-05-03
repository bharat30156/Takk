import styles from "./CommunityListPage.module.css";
import { DataContext } from "../context/DataContext";
import InitiativeCard from '../components/initiativeCard';
import React, { useState , useEffect} from 'react';
import { Link} from 'react-router-dom'



const InitiativeListPage = () => {

  const [initiatives, setInitiatives] = useState([]);

  const [originalformData, setOriginalFormData] = useState({
    id:-1,
    nameOfCommunity: "",
    descriptionOfCommunity: "",
    shortDescriptionOfCommunity: "",
    images: "",
    country: "UK",
    region: "AVON"
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/initiativeUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          window.alert("Could not get initiatives");
          console.log("Error");
        }
      })
      .then((data) => {
        setInitiatives(data);
      })
      .catch((error) => console.error("Error:", error));
      console.log(initiatives)
  }, []);


  return (
    
    <div className={styles.listCommunityPage}>

      <div className={styles.frameParent}>

      <div className={styles.cardframeGroupParent}>
        <InitiativeCard communities={initiatives} />
      </div>
      
        <button className={styles.loadMore}>Load more....</button>

        <div className={styles.sortByMyContainer}>
          <span className={styles.sortByMyContainer1}>
            <span>{`Sort by:                `}</span>
            <span className={styles.myTags}>{`My Tags `}</span>
            <span>{`                  `}</span>
            <span className={styles.myTags}>{`Name(1) `}</span>
            <span>{`                  `}</span>
            <span className={styles.myTags}>Location (Near me)</span>
          </span>
        </div>
      </div>

      <div className={styles.gifGraphicimagevideoParent}>
        <div className={styles.gifGraphicimagevideo}>
          <img
            className={styles.section1img}
            alt=""
            src="../InitiativeListSection1Img.png"
          />
        </div>
        
        <div className={styles.startNewInitiativeParent}>
          <div className={styles.startNewInitiative}>Start new Initiative</div>
          <div className={styles.frameInner} />
        </div>
      </div>
     {/*<div className={styles.browseAvailableCommunityContainer}>
        <p className={styles.browseAvailableCommunity}>
          Browse Available Community Below
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
  */}
      


      <div className={styles.ellipseGroup}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild1} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild2} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild3} alt="" src="../ellipse-25.svg" />
        <div className={styles.initiativediv1}>280</div>
        <div className={styles.div2}>£2M</div>
        <div className={styles.initiativediv3}>1900</div>
        <div className={styles.div4}>4000</div>
        <div className={styles.initiative_initiatives}>Initiatives</div>
        <div className={styles.initiative_raised}>Raised</div>
        <div className={styles.relatedInitiatives}>Number of Donors</div>
        <div className={styles.initiative_donations}>Donations</div>
      </div>

      <div className={styles.myTags1}>My tags</div>

      <div className={styles.listCommunityPageInner}>
        <div className={styles.groupChild7} />
      </div>
      <div className={styles.disable}>Disable</div>
      
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild8} />
        <div className={styles.animalAndPets}>Animal and Pets</div>
      </div>
      
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild9} />
        <div className={styles.sports}>
          <p className={styles.browseAvailableCommunity}>Sports</p>
        </div>
      </div>
      
      <div className={styles.groupDiv}>
        <div className={styles.groupChild10} />
        <div className={styles.education}>
          <p className={styles.browseAvailableCommunity}>Education</p>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild11} />
        <div className={styles.medical}>
          <p className={styles.browseAvailableCommunity}>Medical</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.showsOnlyCommunitiesContainer}>
        <p className={styles.browseAvailableCommunity}>
          Shows only communities related to my tags
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <button className={styles.image126} />
      
      <div className={styles.frameContainer}>
        <div className={styles.image96Parent}>
          <img
            className={styles.image96Icon}
            alt=""
            src="../initiativestoryimg.png"
          />

          <div className={styles.rectangleWrapper6}>
            <div className={styles.groupChild12} />
          </div>
          <div className={styles.initiativestorybarcontainer}>
            <p className={styles.initiativestorybar}>Cycle the world from home</p>
          </div>
          <button className={styles.initiativestoryreadMore}>Read More</button>
          
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-21.svg"
          />
          <div className={styles.donatebutton}>Donate</div>
          <div className={styles.loremIpsumDolor}>            
          Support our enthusiastic senior cyclists and their ability to cycle around the world from the comfort of their chair! We are fundraising to get Motiview, the cycling video library to our care home. The system consist of more than 200 videos, and it enables us to travel the world, cycle local routes in our community, at the same time as we go back i memories, share stories and get fit- all at the same time! We see that this would make a big change to our residents and we truly hope you will support us making it a reality.
          </div>
        </div>
        <div className={styles.mostVisitedCommunityOfLastWrapper}>
          <div className={styles.mostVisitedCommunity}>
          Last Month's Most Popular Initiative!
          </div>
        </div>
      </div>

      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <button className={styles.image131} />
    </div>
  );
};

export default InitiativeListPage;
