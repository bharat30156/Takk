import styles from "./ListCommunityPage.module.css";
import { DataContext } from "../context/DataContext";
import React, { useContext } from 'react';



const ListCommunityPage = () => {
  const communities = fetch("http://localhost:8080/api/communityUser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        window.alert("Could not get communities");
        console.log("Error");
      }
    })
    .catch((error) => console.error("Error:", error));
    console.log(communities)

  return (
    <div className={styles.listCommunityPage}>
      <div className={styles.alertMessageParent}>
        <b className={styles.alertMessage}>Alert Message</b>
        <img className={styles.image42Icon} alt="" src="../image-42@2x.png" />
      </div>
      <div className={styles.takkLogoYellow2Parent}>
        <img
          className={styles.takkLogoYellow2}
          alt=""
          src="../takk-logo--yellow-22@2x.png"
        />
        <input className={styles.frameChild} type="text" placeholder="Search" />
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
        <div className={styles.frameWrapper}>
          <div className={styles.image6Wrapper}>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.image7Parent}>
            <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
            <div className={styles.overviewOfTheCommunityForParent}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Group}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-71@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForGroup}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Container}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-72@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForParent}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe2}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-76@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForParent}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe3}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Parent1}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-77@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForParent}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe4}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Parent2}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-78@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForParent}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Parent3}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-79@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForGroup}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe6}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Parent4}>
            <img
              className={styles.image7Icon}
              alt=""
              src="../image-710@2x.png"
            />
            <div className={styles.overviewOfTheCommunityForGroup}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe3}>Title of the Community</b>
            </div>
          </div>
          <div className={styles.image7Parent5}>
            <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
            <div className={styles.overviewOfTheCommunityForGroup}>
              <div className={styles.overviewOfThe}>
                Overview of the Community for the users to get an idea
              </div>
              <button className={styles.rectangleWrapper}>
                <div className={styles.groupItem} />
              </button>
              <button className={styles.findOutMore}>Find out more</button>
              <b className={styles.titleOfThe8}>Title of the Community</b>
            </div>
          </div>
        </div>
        <button className={styles.loadMore}>Load more....</button>
        <div className={styles.sortByMyContainer}>
          <span className={styles.sortByMyContainer1}>
            <span>{`Sort by:         `}</span>
            <span className={styles.myTags}>{`My Tags `}</span>
            <span>{`           `}</span>
            <span className={styles.myTags}>{`Name(1) `}</span>
            <span>{`            `}</span>
            <span className={styles.myTags}>Location (Near me)</span>
          </span>
        </div>
      </div>
      <div className={styles.gifGraphicimagevideoParent}>
        <div className={styles.gifGraphicimagevideo}>
          GIF Graphic/Image/Video
        </div>
        <div className={styles.startNewInitiativeParent}>
          <div className={styles.startNewInitiative}>Start new Initiative</div>
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.browseAvailableCommunityContainer}>
        <p className={styles.browseAvailableCommunity}>
          Browse Available Community Below
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.communitiesWrapper}>
        <div className={styles.communities}>Communities</div>
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
            src="../image-961@2x.png"
          />
          <div className={styles.rectangleWrapper6}>
            <div className={styles.groupChild12} />
          </div>
          <div className={styles.dogCommunity}>
            <p className={styles.browseAvailableCommunity}>Dog Community</p>
          </div>
          <button className={styles.readMore}>Read More</button>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-21.svg"
          />
          <div className={styles.joinCommunity}>Join Community</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            similique eaque delectus unde commodi assumenda, rerum, et doloribus
            nobis qui eius voluptatum vitae suscipit quos quod? Earum
            accusantium inventore, corrupti ea iure deleniti totam quia officiis
            suscipit possimus vel asperiores
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

export default ListCommunityPage;
