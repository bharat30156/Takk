import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProfilePage3.module.css";

const ProfilePage3 = () => {
  const navigate = useNavigate();

  const onGroupLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupLink1Click = useCallback(() => {
    navigate("/32-profile-page-2");
  }, [navigate]);

  return (
    <div className={styles.profilePage3}>
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
          <input
            className={styles.frameInner}
            type="text"
            placeholder="Search"
          />
          <input
            className={styles.frameInput}
            type="text"
            placeholder="Search"
          />
        </div>
        <input
          className={styles.frameChild1}
          type="text"
          placeholder="Search"
        />
      </div>
      <img className={styles.profilePage3Child} alt="" src="/line-71.svg" />
      <div className={styles.help}>Help</div>
      <div className={styles.profilePage3Item} />
      <div className={styles.groupParent}>
        <Link
          className={styles.rectangleParent}
          to="/"
          onClick={onGroupLinkClick}
        >
          <div className={styles.groupItem} />
          <button className={styles.donationHistory}>Donation History</button>
        </Link>
        <Link
          className={styles.vectorParent}
          to="/32-profile-page-2"
          onClick={onGroupLink1Click}
        >
          <img className={styles.groupInner} alt="" src="/rectangle-361.svg" />
          <button className={styles.subscriptions}>Subscriptions</button>
        </Link>
        <button className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <button className={styles.paymentMethod}>Payment method</button>
        </button>
        <div
          className={styles.pleaseImplementWhat}
        >{`<PLEASE IMPLEMENT WHAT IS NEEDED TO SET UP PAYMENT MENTHODS; CREDIT CARD, PAYPAL, etc. However, it is crucial that we avoid keeping this kind of information if we can. We would rather that the thrid parties (PayPal, Stripe, whoever) keep this information, as we do not want to have to get regulated to hold such info. I guess this can be handled through the API with the payment solutions?>`}</div>
      </div>
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <div className={styles.myPersonalProfileWrapper}>
        <div className={styles.myPersonalProfile}>My Personal Profile</div>
      </div>
      <b className={styles.personalDetails}>Personal details</b>
      <button className={styles.image188} />
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
      <img className={styles.image188Icon} alt="" src="/image-43@2x.png" />
      <img className={styles.profilePage3Inner} alt="" src="/ellipse-34.svg" />
      <button className={styles.image189} />
      <a className={styles.myDashboard}>My dashboard</a>
      <a className={styles.image1881} />
      <a className={styles.a}>(3)</a>
      <a className={styles.takkPoints}> 53 Takk! Points</a>
      <div className={styles.seeAllMyTagsParent}>
        <button className={styles.seeAllMy}>See all my tags...</button>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild1} />
          <div className={styles.physicalActivity}>Physical Activity</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild2} />
          <div className={styles.medical}>
            <p className={styles.password}>Medical</p>
            <p className={styles.password}>&nbsp;</p>
          </div>
        </div>
      </div>
      <b className={styles.johnSmith}>John Smith</b>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-251.svg" />
      <img
        className={styles.profilePage3Child1}
        alt=""
        src="/ellipse-271.svg"
      />
      <div className={styles.div1}>£3503</div>
      <div className={styles.div2}>£260</div>
      <div className={styles.raised}>Raised</div>
      <div className={styles.donated}>Donated</div>
    </div>
  );
};

export default ProfilePage3;
