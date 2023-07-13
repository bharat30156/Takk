import styles from "./JoinAndShare.module.css";
import { Link } from "react-router-dom";

const JoinAndShare = ({community}) => {
  return (
    <div className={styles.image9Parent}>
      <div className={styles.image9} />
      <button className={styles.image127} />
      <button className={styles.image128} />
      <a className={styles.relatedOrganization}>
        <span>70 related organization</span>
        <span className={styles.span}>{`  `}</span>
      </a>
      <Link to="/CommunityCreateEdit" state={{originalformData: community}}>
        <button className={styles.image129} /></Link>
    
      <img className={styles.frameChild} alt="" src="../rectangle-2.svg" />
      <div className={styles.joinCommunity}>Join community</div>
    </div>
  );
};

export default JoinAndShare;
