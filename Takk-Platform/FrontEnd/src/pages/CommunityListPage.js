import styles from "./CommunityListPage.module.css";
import { DataContext } from "../context/DataContext";
import CommunityCard from '../components/communityCard';
import React, { useState , useEffect} from 'react';
import { Link} from 'react-router-dom'



const CommunityListPage = () => {

  const [communities, setCommunities] = useState([]);
  
  const [originalformData, setOriginalFormData] = useState({
    id:-1,
    nameOfCommunity: '',
    descriptionOfCommunity: "",
    shortDescriptionOfCommunity: "",
    imageFiles: [],
    images: [],
    country: "UK",
    region: "AVON",
    relatedInitiativeIDs: [],
    initiatives: [],
    tags:[],
    tagNames: []
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/community", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        //'Content-length': JSON.stringify(originalformData).length.toString()
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.alert("Could not get communities");
          console.log("Error");
        }
      })
      .then((data) => {
        setCommunities(data);
      })
      .catch((error) => console.error("Error:", error));
      
      console.log("  fetch communities", communities)
  }, []);

  return (
    <div className={styles.listCommunityPage}>
      <div className={styles.frameParent}>
        
        <div className={styles.cardframeGroupParent}>
            <CommunityCard communities={communities} />
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
            src="../ListCommunitySection1Img.png"
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
      
      <div className={styles.communitiesWrapper}>
        <div className={styles.communities}>Communities</div>
        
        <Link to ="/CommunityCreateEdit" state = {{originalformData: originalformData}}>
          <button className="community">Create community</button>
        </Link>
      </div>


      <div className={styles.ellipseGroup}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild1} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild2} alt="" src="../ellipse-25.svg" />
        <img className={styles.frameChild3} alt="" src="../ellipse-25.svg" />
        <div className={styles.div1}>95</div>
        <div className={styles.div2}>1500</div>
        <div className={styles.div3}>75</div>
        <div className={styles.div4}>1200</div>
        <div className={styles.communities1}>Communities</div>
        <div className={styles.communityMember}>Community Member</div>
        <div className={styles.relatedInitiatives}>Related Initiatives</div>
        <div className={styles.relatedDonations}>Related Donations</div>
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
            src="../ListCommunityStoryImg.png"
          />
          <div className={styles.rectangleWrapper6}>
            <div className={styles.groupChild12} />
          </div>
          <div className={styles.dogCommunity}>
            <p className={styles.browseAvailableCommunity}> Golden Grove Society</p>
          </div>
          <button className={styles.readMore}>Read More</button>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-21.svg"
          />
          <div className={styles.joinCommunity}>Join Community</div>
          <div className={styles.loremIpsumDolor}>
          Ageless feet, timeless beat! We love dancing and we encourage more to get their grove on - every move counts. We are a vibrant community that supports seniors in their love of dancing. We believe that every move counts and encourage seniors and people close to them to get moving, regardless of level of experience or functional level. Our Community is a supportive and welcoming environment where people can connect with like-minded individuals, inspire each other and even maybe make lasting friendships. 
          </div>
        </div>
        <div className={styles.mostVisitedCommunityOfLastWrapper}>
          <div className={styles.mostVisitedCommunity}>
            Most visited Community of Last Month
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

export default CommunityListPage;
