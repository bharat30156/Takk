import styles from "./EditPersonalInformation.module.css";
import { Link} from "react-router-dom";

const EditPersonalInformation = () => {
  return (
    <div className={styles.editPersonalInformation}>
      <img
        className={styles.takkLogoYellow2}
        alt=""
        src="/takk-logo--yellow-2@2x.png"
      />
      <div className={styles.editPersonalInformationInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.nameOfUser}>Name of User</div>
      <img
        className={styles.editPersonalInformationChild}
        alt=""
        src="/ellipse-4@2x.png"
      />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-51.svg" />
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.getFundraisingParent}>
        <a className={styles.getFundraising}>Get Fundraising</a>
        <a className={styles.donate}>Donate</a>
        <a className={styles.community}>Community</a>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.copyrightAndInformationAbouWrapper}>
        <div className={styles.copyrightAndInformation}>
          @copyright and information about the TAKK
        </div>
      </div>
      <b className={styles.yourFirstName}>Your first name*:</b>
      <textarea className={styles.editPersonalInformationItem} />
      <b className={styles.yourLastName}>Your last name*:</b>
      <textarea className={styles.rectangleTextarea} />
      <b className={styles.yourCounty}>Your county*:</b>
      <b className={styles.yourCountry}>Your country*:</b>
      <div className={styles.rectangleDiv} />
      <div className={styles.editPersonalInformationChild1} />
      <div className={styles.lineDiv} />
      <img className={styles.image189Icon} alt="" src="/image-189@2x.png" />
      <button className={styles.image190} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-42.svg" />
      <div className={styles.div1}>?</div>
      <img
        className={styles.editPersonalInformationChild2}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div2}>?</div>
      <b className={styles.yourEmaillogin}>Your email/login*:</b>
      <textarea className={styles.editPersonalInformationChild3} />
      <b className={styles.yourPassword}>Your password*:</b>
      <textarea className={styles.editPersonalInformationChild4} />
      <img
        className={styles.editPersonalInformationChild5}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div3}>?</div>
      <img
        className={styles.editPersonalInformationChild6}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div4}>?</div>
      <b className={styles.confirmYourPassword}>Confirm your password*:</b>
      <textarea className={styles.editPersonalInformationChild7} />
      <img
        className={styles.editPersonalInformationChild8}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div5}>?</div>
      <b className={styles.yourStreet}>Your street:</b>
      <textarea className={styles.editPersonalInformationChild9} />
      <img
        className={styles.editPersonalInformationChild10}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div6}>?</div>
      <b className={styles.yourCity}>Your city:</b>
      <textarea className={styles.editPersonalInformationChild11} />
      <img
        className={styles.editPersonalInformationChild12}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div7}>?</div>
      <b className={styles.yourPostcode}>Your postcode:</b>
      <textarea className={styles.editPersonalInformationChild13} />
      <img
        className={styles.editPersonalInformationChild14}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div8}>?</div>
      <img
        className={styles.editPersonalInformationChild15}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div9}>?</div>
      <div className={styles.editPersonalInformationChild16} />
      <div className={styles.editPersonalInformationChild17} />
      <div className={styles.rectangleParent}>
        <button className={styles.groupItem} />
        <Link to= "/"><button className={styles.save}>Save</button></Link>
        <button className={styles.cancel}>Cancel</button>
      </div>
      <div className={styles.chooseCounty}>Choose county...</div>
      <div className={styles.editPersonalInformationChild18} />
      <div className={styles.editPersonalInformationChild18} />
      <div className={styles.editPersonalInformationChild20} />
      <button className={styles.image191} />
      <img
        className={styles.editPersonalInformationChild21}
        alt=""
        src="/ellipse-42.svg"
      />
      <div className={styles.div10}>?</div>
      <div className={styles.chooseCountry}>Choose country...</div>
      <input className={styles.frameInput} type="text" placeholder="Search" />
    </div>
  );
};

export default EditPersonalInformation;
