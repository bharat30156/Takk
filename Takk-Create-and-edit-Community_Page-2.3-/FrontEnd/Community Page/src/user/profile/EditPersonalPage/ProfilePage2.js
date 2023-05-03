import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProfilePage2.module.css";

const ProfilePage2 = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/32-profile-page-1");
  }, [navigate]);

  const onGroupLink1Click = useCallback(() => {
    navigate("/32-profile-page-3");
  }, [navigate]);

  return (
    <div className={styles.profilePage2}>
      <div className={styles.takkLogoYellow2Parent}>
        <img
          className={styles.takkLogoYellow2}
          alt=""
          src="/takk-logo--yellow-2@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.nameOfUser}>Name of User</div>
        <img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" />
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-5.svg" />
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.getFundraisingParent}>
          <a className={styles.getFundraising}>Get Fundraising</a>
          <a className={styles.donate}>Donate</a>
          <a className={styles.community}>Community</a>
        </div>
        <input className={styles.frameInner} type="text" placeholder="Search" />
      </div>
      <img className={styles.profilePage2Child} alt="" src="/line-71.svg" />
      <b className={styles.personalDetails}>Personal details</b>
      <b className={styles.firstNameLastContainer}>
        <p className={styles.firstName}>First name:</p>
        <p className={styles.firstName}>Last name:</p>
        <p className={styles.firstName}>Address:</p>
        <p className={styles.firstName}>&nbsp;</p>
        <p className={styles.firstName}>&nbsp;</p>
        <p className={styles.firstName}>Email:</p>
        <p className={styles.password}>Password:</p>
      </b>
      <div className={styles.johnSmith167169Container}>
        <p className={styles.firstName}>John</p>
        <p className={styles.firstName}>Smith</p>
        <p className={styles.firstName}>167-169 Great Portland</p>
        <p className={styles.firstName}>{`Street, London, `}</p>
        <p className={styles.firstName}>W1W 5PF, UK</p>
        <p className={styles.firstName}>john.smith@here.co.uk</p>
        <p className={styles.password}>**********</p>
      </div>
      <div className={styles.help}>Help</div>
      <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
      <img className={styles.profilePage2Item} alt="" src="/ellipse-291.svg" />
      <button className={styles.image130} />
      <button className={styles.image132} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <b className={styles.donationHistory}>Donation History</b>
        </div>
        <div className={styles.subscriptionsParent}>
          <b className={styles.subscriptions}>Subscriptions</b>
          <div className={styles.groupInner} />
          <div className={styles.paymentMethodParent}>
            <b className={styles.paymentMethod}>Payment method</b>
            <div className={styles.groupInner} />
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.div1}>10.01.2022</div>
        <div className={styles.cyclingAndVideo}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.date}>Date↓</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <b className={styles.donationHistory}>Donation History</b>
        </div>
        <div className={styles.subscriptionsParent}>
          <b className={styles.subscriptions}>Subscriptions</b>
          <div className={styles.groupInner} />
          <div className={styles.paymentMethodParent}>
            <b className={styles.paymentMethod}>Payment method</b>
            <div className={styles.groupInner} />
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.div1}>10.01.2022</div>
        <div className={styles.cyclingAndVideo}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div3}>£10.0</div>
        <div className={styles.date}>Date↓</div>
      </div>
      <div className={styles.frameDiv}>
        <Link
          className={styles.rectangleContainer}
          to="/32-profile-page-1"
          onClick={onGroupLinkClick}
        >
          <div className={styles.groupInner} />
          <button className={styles.donationHistory2}>Donation History</button>
        </Link>
        <div className={styles.frameChild4} />
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</div>
        <div className={styles.subscription}>Subscription:</div>
        <div className={styles.amountPerPeriod}>Amount per period:</div>
        <div className={styles.totalDonatedIncl}>Total donated (incl.):</div>
        <div className={styles.totalTipped}>Total tipped:</div>
        <div className={styles.monthly}>Monthly</div>
        <div className={styles.div4}>£13.75</div>
        <div className={styles.div5}>£68.75</div>
        <div className={styles.div6}>£18.75</div>
        <div className={styles.paymentMethod2}>Payment method:</div>
        <div className={styles.creditCard}>CREDIT CARD</div>
        <div className={styles.nextPayment}>Next payment:</div>
        <div className={styles.div7}>10.02.2023</div>
        <div className={styles.paymentMethod3}>Payment method:</div>
        <div className={styles.paypal}>PAYPAL</div>
        <div className={styles.nextPayment1}>Next payment:</div>
        <div className={styles.div8}>-</div>
        <a className={styles.editThisSubscription}>Edit this subscription...</a>
        <button className={styles.image133} />
        <div className={styles.active}>ACTIVE</div>
        <div className={styles.stopped}>STOPPED</div>
        <button className={styles.groupButton}>
          <div className={styles.groupItem} />
          <button className={styles.donationHistory2}>Subscriptions</button>
        </button>
        <Link
          className={styles.groupA}
          to="/32-profile-page-3"
          onClick={onGroupLink1Click}
        >
          <div className={styles.groupInner} />
          <button className={styles.donationHistory2}>Payment method</button>
        </Link>
      </div>
      <div className={styles.cyclingAndVideo2}>
        Cycling and video in Perran Bay Care home
      </div>
      <div
        className={styles.loremIpsumDolor1}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</div>
      <div className={styles.subscriptionPeriod}>Subscription period:</div>
      <div className={styles.amountPerPeriod1}>Amount per period:</div>
      <div className={styles.totalDonatedIncl1}>Total donated (incl.):</div>
      <div className={styles.totalTipped1}>Total tipped:</div>
      <div className={styles.monthly1}>Monthly</div>
      <div className={styles.div9}>£8.25</div>
      <div className={styles.div10}>£66.00</div>
      <div className={styles.div11}>£6.00</div>
      <a className={styles.reactivateSubscription}>
        Reactivate subscription...
      </a>
      <button className={styles.image1331} />
      <div className={styles.artSessionsAt}>Art sessions at Falmouth care</div>
      <div className={styles.myPersonalProfileWrapper}>
        <div className={styles.myPersonalProfile}>My Personal Profile</div>
      </div>
      <a className={styles.myDashboard}>My dashboard</a>
      <a className={styles.image187} />
      <a className={styles.a}>(3)</a>
      <a className={styles.takkPoints}> 53 Takk! Points</a>
      <div className={styles.seeAllMyTagsParent}>
        <button className={styles.seeAllMy}>See all my tags...</button>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild7} />
          <div className={styles.physicalActivity}>Physical Activity</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild8} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild8} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
      </div>
      <b className={styles.johnSmith}>John Smith</b>
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <img className={styles.profilePage2Inner} alt="" src="/ellipse-251.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-271.svg" />
      <div className={styles.div12}>£3503</div>
      <div className={styles.div13}>£260</div>
      <div className={styles.raised}>Raised</div>
      <div className={styles.donated}>Donated</div>
    </div>
  );
};

export default ProfilePage2;
