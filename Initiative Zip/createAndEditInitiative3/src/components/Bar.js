import styles from "./Bar.module.css";

const Bar = () => {
  return (
    <div className={styles.copyrightAndInformationAbouWrapper}>
      <div className={styles.copyrightAndInformation}>
        @copyright and information about the TAKK
      </div>
    </div>
  );
};

export default Bar;
