import React from 'react';
import NavBar from '../components/NavBarCommunity';
import FeedCommunity from '../components/FeedCommunity';
import styles from './ViewCommunityPage.module.css';

const ViewCommunityPage = () => {

  const communitiesData = {
    nameOfCommunity: 'Example Community',
    descriptionOfCommunity: 'Example community description',
    // Add more properties as needed...
  };

  return (
    <div className={styles.viewCommunityPage}>
      <NavBar />
      <FeedCommunity communities={communitiesData} />
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <div className={styles.editcreateCommunityPage}>
        <div className={styles.takkLogoYellow2Parent}>
          <img
            className={styles.takkLogoYellow2}
            alt=""
            src="../takk-logo--yellow-21@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.searchParent}>
            <div className={styles.search}>Search</div>
            <img
              className={styles.image6Icon}
              alt=""
              src="../image-61@2x.png"
            />
          </div>
          <div className={styles.nameOfUser}>Name of User</div>
          <img className={styles.frameItem} alt="" src="../ellipse-41@2x.png" />
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" />
            <div className={styles.div}>3</div>
          </div>
          <div className={styles.getFundraisingParent}>
            <div className={styles.getFundraising}>Get Fundraising</div>
            <div className={styles.donate}>Donate</div>
            <div className={styles.community}>Community</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.aboutYourCommunityParent}>
            <div className={styles.aboutYourCommunity}>
              About Your Community
            </div>
            <div className={styles.flexibleDuration}>Flexible Duration</div>
            <div className={styles.ourPagesHave}>
              Our pages have an initial duration of 120 days, but you can extend
              it up to 1 year if you prefer.
            </div>
            <div className={styles.fees}>Fees</div>
            <div className={styles.someWords}>
              <p className={styles.summaryOfService}>Some words</p>
            </div>
            <div className={styles.payments}>Payments</div>
            <div className={styles.youWillReceive}>
              You will receive the money you raise even if you don't hit your
              target. Your funds will be sent to the bank account of your choice
              within 4-6 business days after your Initative closes
            </div>
          </div>
          <div className={styles.deleteYourCommunity}>
            Delete Your Community
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.deleteTheService}>Delete the Service</div>
          </div>
          <div className={styles.changeYourAlert}>Change your Alert</div>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild1} />
            <div className={styles.off}>OFF</div>
          </div>
          <div className={styles.onWrapper}>
            <div className={styles.on}>ON</div>
          </div>
          <img className={styles.lineIcon} alt="" />
          <img className={styles.frameChild2} alt="" />
          <div className={styles.youWillGet}>
            You will get Alert every time when someone follow your community
          </div>
        </div>
        <div className={styles.editcreateCommunityPageChild} />
        <div className={styles.copyrightAndInformationAbouContainer}>
          <div className={styles.copyrightAndInformation}>
            @copyright and information about the TAKK
          </div>
        </div>
        <div className={styles.summaryOfServiceParent}>
          <div className={styles.summaryOfServiceContainer}>
            <p className={styles.summaryOfService}>Summary of Service</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <b className={styles.titleOfThe}>Title of the Community</b>
          <div className={styles.rectangleDiv} />
          <b className={styles.b}>35</b>
          <div className={styles.headlineOfCommunity}>
            Headline of Community by owner
          </div>
          <b className={styles.serviceOwner}>Service Owner</b>
          <img className={styles.image83Icon} alt="" src="../image-83@2x.png" />
          <b className={styles.profilePicture}>Profile Picture</b>
          <b className={styles.firstName}>First Name</b>
          <div className={styles.frameChild3} />
          <b className={styles.lastName}>Last Name</b>
          <div className={styles.frameChild4} />
          <b className={styles.yourMessage}>Your Message</b>
          <div className={styles.frameChild5} />
          <b className={styles.b1}>200</b>
          <div className={styles.thisMessageWill}>
            This message will displayed just after the Headline of the Service
          </div>
          <b className={styles.coverImagesOf}>Cover Images of Community</b>
          <img className={styles.image82Icon} alt="" src="../image-82@2x.png" />
          <img
            className={styles.image51Icon}
            alt=""
            src="../image-512@2x.png"
          />
          <img
            className={styles.image62Icon}
            alt=""
            src="../image-621@2x.png"
          />
          <img
            className={styles.image63Icon}
            alt=""
            src="../image-621@2x.png"
          />
          <img className={styles.frameChild6} alt="" />
          <b className={styles.descriptionOfTheContainer}>
            <p className={styles.summaryOfService}>
              Description of the Community
            </p>
          </b>
          <div className={styles.frameChild7} />
          <b className={styles.b2}>200</b>
          <div className={styles.frameChild8} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.deleteTheService}>Cancel</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild1} />
            <div className={styles.deleteTheService}>Save and Continue</div>
          </div>
          <img className={styles.ellipseIcon} alt="" />
          <div className={styles.div1}>?</div>
          <img className={styles.frameChild9} alt="" />
          <div className={styles.div2}>?</div>
          <img className={styles.frameChild10} alt="" />
          <div className={styles.div3}>?</div>
          <img className={styles.frameChild11} alt="" />
          <div className={styles.div4}>?</div>
          <img className={styles.frameChild12} alt="" />
          <div className={styles.div5}>?</div>
          <img className={styles.frameChild13} alt="" />
          <div className={styles.div6}>?</div>
          <div className={styles.pleaseEnterThis}>
            Please enter this in the format XYZ
          </div>
          <div className={styles.frameChild14} />
          <div className={styles.thisIsAn}>
            This is an example of a tool tip. It shows when the question mark is
            hovered over or tapped and gives speci
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCommunityPage;
