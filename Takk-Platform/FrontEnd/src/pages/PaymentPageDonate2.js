import styles from "./PaymentPageDonate2.module.css";
import { Link, useNavigate, useLocation} from 'react-router-dom';
import PaymentPageDonate3 from "./PaymentPageDonate3";

const PaymentPageDonate2 = () => {
  return (
      
      <div className={styles.frameParent1}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild30} />
          <div className={styles.frameChild31} />
          <div className={styles.step23}>
            <p className={styles.blankLine}>{`Step `}</p>
            <p className={styles.blankLine}>2/3</p>
          </div>
          <img className={styles.image77Icon} alt="" src="/image-77@2x.png" />
          <div className={styles.frameChild32} />
        </div>

        <div className={styles.choosePaymentMethod}>Choose payment method</div>
        <div className={styles.pleaseSelectA}>{`Please select a payment method from the list. After the final confirmation of your donation, you will be taken to the payment provider to complete the transaction. `}</div>
     
      <div className={styles.rectangleParent6}>
        <button className={styles.rectangleButton} />
        <div className={styles.frameChild33} />
        <div className={styles.image86Wrapper}>
          <img className={styles.image86Icon} alt="" src="/image-86@2x.png" />
        </div>

        <div className={styles.debitAndCredit}>Debit and Credit Card</div>
        <button className={styles.frameChild34} />
        <div className={styles.image87Wrapper}>
          <img className={styles.image87Icon} alt="" src="/image-87@2x.png" />
        </div>
        
        <img className={styles.image88Icon} alt="" src="/image-88@2x.png" />
        <button className={styles.frameChild35} />
        <div className={styles.image87Container}>
          <img className={styles.image87Icon1} alt="" src="/image-871@2x.png" />
        </div>        
        <div className={styles.googlePay}>Google Pay</div>

        <button className={styles.frameChild36} />
        <div className={styles.image87Frame}>
          <img className={styles.image87Icon1} alt="" src="/image-872@2x.png" />
        </div>        
        <div className={styles.applePay}>Apple Pay</div>
      </div>

      <div className={styles.paymentInformation}>Payment information</div>
      <div className={styles.paymentPageDonateToAnInItem} />
      <div className={styles.image87Wrapper1}>
        <img className={styles.image87Icon} alt="" src="/image-87@2x.png" />
      </div>
      
    

      <img className={styles.image88Icon1} alt="" src="/image-88@2x.png" />
      <input
        className={styles.paymentPageDonateToAnInInner}
        type="text"
        maxLength
        minLength
      />
      <div className={styles.paypalId}>PayPal ID</div>
      <div className={styles.yourPaypalId}>Your Paypal ID:</div>
      <div className={styles.rectangleParent7}/>

      <div className={styles.backcontinuebox}>
              <button className={styles.backcontinueButton} />
      </div>

    </div>
  );
};

export default PaymentPageDonate2;
