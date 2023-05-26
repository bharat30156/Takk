import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProfilePage1.module.css";

const ProfilePage1 = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/32-profile-page-2");
  }, [navigate]);

  const onGroupLink1Click = useCallback(() => {
    navigate("/32-profile-page-3");
  }, [navigate]);

  return (
    <div className={styles.profilePage1}>
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
        <Link to="/PersonalDashboard"><img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" /></Link>
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-51.svg" />
          <div className={styles.div}>3</div>
        </div>
        <div className={styles.getFundraisingParent}>
          <a className={styles.getFundraising}>Get Fundraising</a>
          <a className={styles.donate}>Donate</a>
          <a className={styles.community}>Community</a>
        </div>
        <input className={styles.frameInner} type="text" placeholder="Search" />
      </div>
      <img className={styles.profilePage1Child} alt="" src="/line-7.svg" />
      <div className={styles.help}>Help</div>
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
        <button className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <button className={styles.donationHistory2}>Donation History</button>
        </button>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.div4}>10.01.2023</div>
        <div className={styles.cyclingAndVideo2}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div5}>£13.75</div>
        <div className={styles.creditCard}>CREDIT CARD</div>
        <div className={styles.frameChild6} />
        <div className={styles.div6}>10.12.2022</div>
        <div className={styles.cyclingAndVideo3}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div7}>£13.75</div>
        <div className={styles.creditCard1}>CREDIT CARD</div>
        <div className={styles.frameChild7} />
        <div className={styles.div8}>10.11.2022</div>
        <div className={styles.cyclingAndVideo4}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div9}>£13.75</div>
        <div className={styles.creditCard2}>CREDIT CARD</div>
        <div className={styles.div10}>17.11.2022</div>
        <div className={styles.gardenEquipmentTo}>
          Garden equipment to Coombe House
        </div>
        <div className={styles.div11}>£27.75</div>
        <div className={styles.paypal}>PAYPAL</div>
        <div className={styles.frameChild8} />
        <div className={styles.div12}>10.10.2022</div>
        <div className={styles.cyclingAndVideo5}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div13}>£13.75</div>
        <div className={styles.creditCard3}>CREDIT CARD</div>
        <div className={styles.frameChild9} />
        <div className={styles.div14}>10.09.2022</div>
        <div className={styles.cyclingAndVideo6}>
          Cycling and video in Perran Bay Care home
        </div>
        <div className={styles.div15}>£13.75</div>
        <div className={styles.creditCard4}>CREDIT CARD</div>
        <div className={styles.date2}>Date↓</div>
        <div className={styles.initiative}>Initiative</div>
        <div className={styles.amountAllIncl}>Amount (all incl.)</div>
        <div className={styles.paymentMethod2}>Payment method</div>
        <Link
          className={styles.vectorParent}
          to="/32-profile-page-2"
          onClick={onGroupLinkClick}
        >
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-36.svg"
          />
          <button className={styles.subscriptions2}>Subscriptions</button>
        </Link>
        <div className={styles.copyrightAndInformationAbouWrapper}>
          <div className={styles.copyrightAndInformation}>
            @copyright and information about the TAKK
          </div>
        </div>
      </div>
      <Link
        className={styles.groupA}
        to="/32-profile-page-3"
        onClick={onGroupLink1Click}
      >
        <div className={styles.groupInner} />
        <button className={styles.donationHistory2}>Payment method</button>
      </Link>
      <b className={styles.personalDetails}>Personal details:</b>
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
      <Link to= "/EditPersonalInformation"><button className={styles.editPersonalDetails}>
        Edit personal details...
      </button></Link>
      <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
      <img className={styles.profilePage1Item} alt="" src="/ellipse-29.svg" />
      <button className={styles.image130} />
      <button className={styles.image131} />
      <div className={styles.myPersonalProfile}>My Personal Profile</div>
      <b className={styles.johnSmith}>John Smith</b>
      <img className={styles.profilePage1Inner} alt="" src="/ellipse-25.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-27.svg" />
      <div className={styles.div16}>£3503</div>
      <div className={styles.div17}>£260</div>
      <div className={styles.raised}>Raised</div>
      <div className={styles.donated}>Donated</div>
      <div className={styles.myPersonalProfileWrapper}>
        <div className={styles.myPersonalProfile1}>My Personal Profile</div>
      </div>
      <Link to="/PersonalDashboard"><button className={styles.myDashboard}>My dashboard</button></Link>
      <div className={styles.seeAllMyTagsParent}>
        <button className={styles.seeAllMy}>See all my tags...</button>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild6} />
          <div className={styles.physicalActivity}>Physical Activity</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild7} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild7} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
      </div>
      <button className={styles.takkPoints}> 53 Takk! Points</button>
      <button className={styles.button}>(3)</button>
      <button className={styles.image182} />
    </div>
  );
};

export default ProfilePage1;
