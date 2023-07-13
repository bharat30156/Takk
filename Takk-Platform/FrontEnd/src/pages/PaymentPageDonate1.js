import styles from "./PaymentPageDonate1.module.css";
import { Link, useNavigate, useLocation} from 'react-router-dom';
import PaymentPageDonate2 from "./PaymentPageDonate2";

const PaymentPageDonate1 = () => {

  return (
      <div className={styles.frameParent1}>

        <div className={styles.lineParent}>
          <div className={styles.frameChild30} />
          <div className={styles.step13}>Step 1/3</div>
         
            <img className={styles.image77Icon} alt="" src="/image-77@2x.png" />
        </div>
        
        <div className={styles.howMuchDo}>How much do you want to donate?</div>
        <div className={styles.itsTimeTo}>
            {`It’s time to decide on how much you want to donate, and whether you want to donate on a monthly recurring basis or only one time. Please choose from the `}
        </div>

        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameChild12} />
            <div className={styles.oneTime}>ONE-TIME</div>
          </div>
          <button className={styles.monthlyWrapper}>
            <div className={styles.monthly}>MONTHLY</div>
          </button>
          
          <div className={styles.frameParent4}>
            <div className={styles.wrapper}>
              <div className={styles.div8}>£10</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div9}>£25</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div8}>£50</div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.div11}>£100</div>
            </div>
            <div className={styles.wrapper2}>
              <div className={styles.div11}>£5</div>
            </div>
          </div>
        
          <input
            className={styles.rectangleInput}
            type="text"
            maxLength
            minLength
          />
          <div className={styles.div13}>£25</div>
          <div className={styles.totalAmount2875}>Total amount: £28.75</div>
          <img className={styles.frameChild32} alt="" src="/line-34.svg" />
          <div className={styles.gbp}>GBP</div>
          <img className={styles.image84Icon} alt="" src="/image-84@2x.png" />
          <div className={styles.frameChild33} />
          <div className={styles.div14}>15% (£3.75)</div>
          <img className={styles.image85Icon} alt="" src="/image-84@2x.png" />
        
          <div className={styles.weDontCharge}>
            {`We don't charge a platform fee, but there are still costs involved in processing donations. By adding a small contribution on top of your donation, you'll cover these costs, making sure the initiative continues to get 100% of your donation. `}
          </div>
        </div>
                 
        <div className={styles.rectangleParent6}>
              <button className={styles.rectangleButton} />
{/*
              <button className={styles.continue1} onClick={() => handlePageChange('page2')}>Continue</button> */}
        </div>
      </div>
  );
};

export default PaymentPageDonate1;
