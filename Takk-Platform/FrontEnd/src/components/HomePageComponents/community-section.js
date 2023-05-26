import styles from "./community-section.module.css";
import React from 'react';
import { useState , useEffect} from 'react';
import CommunityCard from '../communityCard';
import { Link } from "react-router-dom";

const CommunitySection = () => {
  
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/communityUser", {
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
  }, []);

  const slicedArray = communities.slice(0, 3);

  return (
    <div className={styles.frame_container}>

      <div className={styles.explore_communities_wrapper}>
        <div className={styles.explore_communities}>Explore Communities</div>
      </div>

      <div className={styles.community_text}>
        Being engaged in communities can greatly strengthen the cause of anybody’s well-being and life quality by providing social support, increasing access to resources, and promoting engagement and empowerment. By working together, community members, organizations, and seniors themselves can create a supportive and inclusive environment that enhances the quality of life for seniors in the community.
        <br /><br />
        On the Takk! platform, you can join your favourite communities by the click of a button. Find your soulmates and people who share a similar passion as yourself by browsing our communities.
      </div>

      <div className={styles.frame_parent}>

        <CommunityCard communities={slicedArray} />
{/*
        <div className={styles.image_7_parent1}>
          <img className={styles.image_7_icon3} alt="" src="../image_73@2x.png" />
          <div className={styles.overview_of_the_community_for_parent}>
            <div className={styles.overview_of_the3}>
              Overview of the Community for the users to get an idea
            </div>
            <img className={styles.frame_child} alt="" />
             <div className={styles.name_of_person}>Name of Person</div> 
            <button className={styles.rectangle_wrapper1}>
              <div className={styles.rectangle_div} />
            </button>
            <button className={styles.find_out_more3}>Find out more</button>
            <b className={styles.title_of_the3}>Title of the Community</b>
          </div>
        </div>
        <div className={styles.image_7_parent2}>
          <img className={styles.image_7_icon3} alt="" src="../image_74@2x.png" />
          <div className={styles.overview_of_the_community_for_group}>
            <div className={styles.overview_of_the3}>
              Overview of the Community for the users to get an idea
            </div>
            <img className={styles.frame_child} alt="" />
              
            <button className={styles.rectangle_wrapper1}>
              <div className={styles.rectangle_div} />
            </button>
            <button className={styles.find_out_more3}>Find out more</button>
            <b className={styles.title_of_the4}>Title of the Community</b>
          </div>
        </div>
        <div className={styles.image_7_parent3}>
          <img className={styles.image_7_icon3} alt="" src="../image_75@2x.png" />
          <div className={styles.overview_of_the_community_for_parent}>
            <div className={styles.overview_of_the3}>
              Overview of the Community for the users to get an idea
            </div>
            <img className={styles.frame_child} alt="" />
             
            <button className={styles.rectangle_wrapper1}>
              <div className={styles.rectangle_div} />
            </button>
            <button className={styles.find_out_more3}>Find out more</button>
            <b className={styles.title_of_the5}>Title of the Community</b>
          </div>
        </div>
        */}
        <Link to ="/CommunityList"><button className={styles.see_more1}>See More</button></Link>

    </div>
    </div>
  );
};

export default CommunitySection;
