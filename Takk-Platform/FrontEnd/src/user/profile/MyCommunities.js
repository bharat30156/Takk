import styles from "./PersonalDashBoard.module.css";
import { Link, useNavigate } from "react-router-dom";
import CommunityCard from '../components/communityCard';
import React, { useState , useEffect , useCallback } from 'react';

const PersonalDashBoard = () => {


    const [communities, setCommunities] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/community", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            window.alert("Could not get communities");
            console.log("Error");
          }
        })
        .then((data) => {
          setCommunities(data);
        })
        .catch((error) => console.error("Error:", error));
        console.log(communities)
    }, []);



    const navigate = useNavigate();

    const onGroupLinkClick = useCallback(() => {
      navigate("/");
    }, [navigate]);

  return (
    <div className={styles.personalDashboard}>
      <div className={styles.takkLogoYellow2Parent}>
        <img
          className={styles.takkLogoYellow2}
          alt=""
          src="../takk-logo--yellow-2@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.nameOfUser}>Name of User</div>
        <img className={styles.frameItem} alt="" src="../ellipse-4@2x.png" />
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild} alt="" src="../ellipse-5.svg" />
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.getFundraisingParent}>
          <a className={styles.getFundraising}>Get Fundraising</a>
          <a className={styles.donate}>Donate</a>
          <a className={styles.community}>Community</a>
        </div>
        <input className={styles.frameInner} type="text" placeholder="Search" />
        <div className={styles.frameContainer}>
          <div className={styles.image6Wrapper}>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
        </div>
      </div>
      <img
        className={styles.personalDashboardChild}
        alt=""
        src="../line-7.svg"
      />
      <div className={styles.takkPoints}> 53 Takk! Points</div>
      <div className={styles.div1}>(3)</div>
      <a className={styles.myProfile}>My profile</a>
      <div className={styles.myPersonalDashboardWrapper}>
        <div className={styles.myPersonalDashboard}>My Personal Dashboard</div>
      </div>
      <img className={styles.image43Icon} alt="" src="../image-43@2x.png" />
      <b className={styles.johnSmith}>John Smith</b>
      <div className={styles.seeAllMyTagsParent}>
        <a className={styles.seeAllMy}>See all my tags...</a>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.physicalActivity}>Physical Activity</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.medical}>
            <p className={styles.medical1}>Medical</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.medical}>
            <p className={styles.medical1}>Medical</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
      </div>
      <img
        className={styles.personalDashboardItem}
        alt=""
        src="../ellipse-25.svg"
      />
      <img
        className={styles.personalDashboardInner}
        alt=""
        src="../ellipse-27.svg"
      />
      <div className={styles.div2}>£3503</div>
      <div className={styles.div3}>£260</div>
      <div className={styles.raised}>Raised</div>
      <div className={styles.donated}>Donated</div>
      <a className={styles.image182} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-29.svg" />
      <button className={styles.groupButton}>
        <div className={styles.groupChild1} />
        <Link to="/"onClick={onGroupLinkClick}><b className={styles.myInitiatives}>My Initiatives</b></Link>
      </button>
      <button className={styles.myCommunitiesParent}>
      <b className={styles.myCommunities}>My Communities</b>
        <div className={styles.groupChild2} />
        <div className={styles.myProductsServicesParent}>
          <b className={styles.myProducts}>{`My Products & Services`}</b>
          <div className={styles.groupChild2} />
        </div>
      </button>
      <div className={styles.frameParent}>
      <CommunityCard communities={communities} />
        <button className={styles.loadMore}>Load more....</button>
        <div className={styles.display}>Display:</div>
        <a className={styles.all12}>All(12)</a>
        <a className={styles.initiativesICreated}>Initiatives I created (2)</a>
        <a className={styles.initiativesIFollow}>Initiatives I follow (2)</a>
        <a className={styles.initiativesIDonated}>
          Initiatives I donated to (3)
        </a>
      </div>
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <a className={styles.initiatives}>12 initiatives</a>
      <a className={styles.communities}>13 communities</a>
      <a className={styles.organisation}> 4 organisation</a>
      <a className={styles.productServices}>{`  5   product & services`}</a>
    </div>
  );
};

export default PersonalDashBoard;
