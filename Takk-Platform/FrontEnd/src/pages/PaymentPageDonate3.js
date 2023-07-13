import styles from "./PaymentPageDonate3.module.css";
import { useState, useEffect } from 'react';

const PaymentPageDonate3 = () => {
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

    
  function checkHandler1() {
    setIsChecked1(!isChecked1)
  }
  function checkHandler2() {
    setIsChecked2(!isChecked2)
  }
  return (
      <div className={styles.frameParent1}>
        <div className={styles.lineParent}>
          <div className={styles.step33}>
            <p className={styles.blankLine}>{`Step `}</p>
            <p className={styles.blankLine}>3/3</p>
          </div>
          <img className={styles.image77Icon} alt="" src="/image-77@2x.png" />
         
          <div className={styles.frameChild30} />
          <div className={styles.heresASummary}>
            Here’s a summary of your donation, gathered from the choices you’ve
            made. Please click “Pay” at the bottom to be taken to the payment
            provider to complete the transaction.
          </div>
  
          <div className={styles.monthlyDonationParent}>
            <div className={styles.monthlyDonation}>Monthly donation:</div>
            <div className={styles.div8}>£25.00</div>
          </div>
          <div className={styles.tipToThePlatformParent}>
            <div className={styles.monthlyDonation}>Tip to the platform:</div>
            <div className={styles.div10}>15% (£3.75)</div>
          </div>
          <div className={styles.paymentPageDonateToAnInItem} />
          <div className={styles.monthlyDonationGroup}>
            <div className={styles.monthlyDonation1}>Monthly donation:</div>
            <div className={styles.div9}>£28.75</div>
          </div>

          <div className={styles.thisWillBePaidWithYourParent}>
          <i className={styles.thisWillBe}>{`This will be paid with your: `}</i>
          <div className={styles.paypalParent}>
            <div className={styles.paypal}>PayPal</div>
            <div className={styles.groupChild13} />
            <img className={styles.image63Icon2} alt="" src="/paypallogo.png" />
          </div>
        </div>


          <div className={styles.imHappyToShareMyContactParent}>
            <div className={styles.imHappyToContainer}>
              <p className={styles.blankLine}>
                I’m happy to share my contact details with user for the purpose of thanking me.
              </p>
            </div>
           
          </div>
          <div className={styles.pleaseHideMyDonationAmountParent}>
            <div
              className={styles.pleaseHideMy}
            >{`Please hide my donation amount form public view. `}</div>
            <div className={styles.groupChild12} />
          </div>
          <div className={styles.frameChild31} />
        </div>

        <input className={styles.checkbox1} 
          type="checkbox" 
          id="checkbox1"
          checked={isChecked1}
          onChange={checkHandler1}
        />
       <input className={styles.checkbox2} 
          type="checkbox" 
          id="checkbox2"
          checked={isChecked2}
          onChange={checkHandler2}
        />

      
      <div className={styles.donationSummary}>Donation summary</div>
      
  
      <div className={styles.backcontinuebox}>
              <button className={styles.backcontinueButton} />
      </div>

   </div>
  );
};

export default PaymentPageDonate3;
