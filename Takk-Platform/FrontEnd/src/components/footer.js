import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.copyrightAndInformationAbouWrapper}>
      <div className={styles.copyrightAndInformation}>
        @copyright and information about the TAKK
      </div>
    </div>
  );
};

export default Footer;
