import styles from "./Main.module.css";
import { useState } from 'react';


const Main = () => {
const [name, setName] = useState('');
const [description, setDescription] = useState('');

function handleSubmit(event) {
  event.preventDefault();

  // Send form data to the backend API using fetch or Axios
  fetch('http://localhost:8080/api/initiativeUser/create', {
    method: 'POST',
    
    body: JSON.stringify({
      nameofInitiative: name,
      descriptionOfInitiative: description}),
    
      headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    // Handle successful response
  })
  .then(() => {
    // Add any additional logic to handle the successful response
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
}

function handleInputChange(event) {
  const { name, value } = event.target;
  if (name === 'name') {
    setName(value);
  } else if (name === 'description') {
    setDescription(value);
  }

  

}

function handleFileChange(event) {
  // Handle file upload
}
  return (
    <div>
    <form className={styles.theNameOfYourInitiativeParent} onSubmit={handleSubmit}>
      <b className={styles.theNameOf}>The name of your initiative*:</b>
      <textarea
        className={styles.frameChild}
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <b className={styles.aDescriptionOf}>A description of your initiative*:</b>
      <textarea
        className={styles.frameItem}
        name="description"
        value={description}
        onChange={handleInputChange}
      />

      <b className={styles.theLocationOf}>The location of you initiative*:</b>
      <b className={styles.yourInitiativeVideopictures}>
        Your initiative video/pictures*:
      </b>
      <div className={styles.frameInner} />
      <div className={styles.frameInner} />
      <div className={styles.lineDiv} />
      <img className={styles.image89Icon} alt="" src="/image-89@2x.png" />
      <img className={styles.image89Icon} alt="" src="/image-89@2x.png" />
      <div className={styles.frameChild1} />
      <img className={styles.image90Icon} alt="" src="/image-90@2x.png" />
      <b className={styles.b}>400</b>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-14.svg" />
      <div className={styles.div}>?</div>
      <b className={styles.bankDetailsFor}>
        Bank details for receiving donations*:
      </b>
      <b className={styles.confirmationAndConsents}>
        Confirmation and consents*:
      </b>
      <div className={styles.sortCode}>Sort code:</div>
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.accountNumber}>Account number:</div>
      <div
        className={styles.iHerebyConsent}
      >{`I hereby consent to allowing Deliberate Impact Ltd and their partners to securely store and handle required data to handle the donations to this initiative, whether it is stored on the Takk! platform or elsewhere. I will not hold Deliberate Impact Ltd and their partners liable for any potential losses or damage caused by the initiative and the use of the Takk! platform. `}</div>
      <div className={styles.frameChild2} />
      <div className={styles.accountNumber1}>{`<ACCOUNT NUMBER>`}</div>
      <input className={styles.frameChild3} type="text" />
      <div className={styles.accountHolderName}>Account holder name:</div>
      <div className={styles.frameChild4} />
      <div className={styles.accountNumber2}>{`<ACCOUNT NUMBER>`}</div>
      <input className={styles.frameChild5} type="text" />
      <b className={styles.target}>Target*:</b>
      <input className={styles.frameChild6} type="text" />
      <img className={styles.frameChild7} alt="" src="/ellipse-14.svg" />
      <div className={styles.div1}>?</div>
      <img className={styles.frameChild8} alt="" src="/ellipse-14.svg" />
      <div className={styles.div2}>?</div>
      <b className={styles.aShortDescription}>
        A short description of your initiative*:
      </b>
      <input className={styles.frameChild9} type="text" />
      <img className={styles.frameChild10} alt="" src="/ellipse-14.svg" />
      <div className={styles.div3}>?</div>
      <div className={styles.frameChild11} />
      <div className={styles.frameChild12} />
      <div className={styles.frameChild13} />
      <div className={styles.frameChild14} />
      <div className={styles.frameChild15} />
      <div className={styles.frameChild16} />
      <img className={styles.lineIcon} alt="" src="/line-40.svg" />
      <div className={styles.frameChild17} />
      <div className={styles.frameChild18} />
      <div className={styles.frameChild19} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.education}>
            <p className={styles.blankLine}>Education</p>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.medical}>
            <p className={styles.blankLine}>Medical</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
      </div>
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image132Icon} alt="" src="/image-132@2x.png" />
      <img className={styles.image133Icon} alt="" src="/image-133@2x.png" />
      <img className={styles.frameChild20} alt="" src="/ellipse-14.svg" />
      <div className={styles.div4}>?</div>
      <img className={styles.image166Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image167Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image168Icon} alt="" src="/image-166@2x.png" />
      <input className={styles.frameChild21} type="checkbox" />
      <img className={styles.image160Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image161Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image163Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image164Icon} alt="" src="/image-166@2x.png" />
      <b className={styles.communitiesForThis}>
        Communities for this initiative*:
      </b>
      <img className={styles.frameChild22} alt="" src="/ellipse-14.svg" />
      <div className={styles.div5}>?</div>
      <div className={styles.frameChild23} />
      <img className={styles.image203Icon} alt="" src="/image-133@2x.png" />
      <div className={styles.supportersOfPerran}>
        Supporters of Perran Bay Care home
      </div>
      <div className={styles.perranporth}>Perranporth</div>
      <div className={styles.addACommunity}>Add a community...</div>
      <img className={styles.image205Icon} alt="" src="/image-133@2x.png" />
      <div className={styles.addAProductservice}>Add a product/service...</div>
      <img className={styles.image204Icon} alt="" src="/image-133@2x.png" />
      <div className={styles.addAnOrganisation}>Add an organisation...</div>
      <b className={styles.organisationForThis}>
        Organisation for this initiative:
      </b>
      <div className={styles.frameChild24} />
      <div className={styles.perranBayCare}>Perran Bay Care home</div>
      <b
        className={styles.productserviceInThis}
      >{`Product/Service in this initiative: `}</b>
      <div className={styles.frameChild25} />
      <div className={styles.motiview}>Motiview</div>
      <div className={styles.basicInformationAboutTheInWrapper}>
        <div className={styles.basicInformationAbout}>
          Basic information about the Initiative
        </div>
      </div>
      <i className={styles.firstOfAllContainer}>
        <p
          className={styles.blankLine}
        >{`First of all you must add the core information about your initiative,  like the title, a basic description. You also need a short description that can be used on places where the long description would be too spacious, e.g. in listings. You should add a short video and some pictures where the initiative is explained and promoted, so it is easy for people to understand and envision the success benefits for the people involved itf they support this. `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`Lastly, you should add some basic geographic information, so people can find your initiative based on where it is. `}</p>
      </i>
      <div className={styles.communitiesAndOtherContextWrapper}>
        <div className={styles.basicInformationAbout}>
          Communities and other context
        </div>
      </div>
      <i className={styles.allInitiativesMustContainer}>
        <p
          className={styles.blankLine}
        >{`All initiatives must be linked to at least one community, to make sure that it easily findable by people with similar interests, and that it is tied to other similar initiatives. `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`If there is an organisation behind the initiative, such as a care home, that should be linked here. `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`If the initiative intends to fundraise for a specific piece of equipment or software that is listed as a Product & Service on teh Takk! platform, you should link it here, so it is easier for people to see exactly what you are fundraising for. `}</p>
      </i>
      <div className={styles.paymentInformationWrapper}>
        <div className={styles.basicInformationAbout}>Payment information</div>
      </div>
      <i className={styles.finallyYouMustContainer}>
        <p
          className={styles.blankLine}
        >{`Finally, you must add payment information so that you will receive the donations that come to this initiative. You must indicate whether you want monthly recurring subscriptions, or if it is a one-time target. `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`You must also suply either your UK bank details, or Paypal account. `}</p>
      </i>
      <div className={styles.confirmationAndConsentsWrapper}>
        <div
          className={styles.basicInformationAbout}
        >{`Confirmation and consents `}</div>
      </div>
      <i
        className={styles.forClosingThings}
      >{`For closing things up, you need to confirm your responsibilities and consents. `}</i>
      <div className={styles.frameParent}>
        <div className={styles.frameDiv} />
        <div className={styles.oneTime}>ONE-TIME</div>
      </div>
      <div className={styles.monthlyWrapper}>
        <div className={styles.monthly}>MONTHLY</div>
      </div>
      <div className={styles.johnSmith}>John Smith</div>
      <div className={styles.debbieJohnson}>Debbie Johnson</div>
      <div className={styles.asonJudd}>Ason Judd</div>
      <div className={styles.frameChild26} />
      <div className={styles.inviteANew}>Invite a new team member...</div>
      <img className={styles.image203Icon1} alt="" src="/image-133@2x.png" />
      <b className={styles.ukBankAccount}>UK bank account</b>
      <img className={styles.frameChild27} alt="" src="/ellipse-47.svg" />
      <img className={styles.frameChild28} alt="" src="/ellipse-45.svg" />
      <b className={styles.paypal}>PayPal</b>
      <img className={styles.frameChild29} alt="" src="/ellipse-47.svg" />
      <div className={styles.paypalId}>PayPal ID:</div>
      <input className={styles.frameChild30} type="text" />
      <div className={styles.iHerebyConfirmContainer}>
        <p
          className={styles.blankLine}
        >{`I hereby confirm that all funds raised will be used for the purpose described above. `}</p>
        <p
          className={styles.blankLine}
        >{`I take full responsibility for solely spending the funds raised towards the initiative, and if that for some reason should be impossible, I will alert Deliberate Impact Ltd. and together with them find a solution for spending the funds for a similar purpose. `}</p>
      </div>
      <input className={styles.frameChild31} type="checkbox" />
      <div
        className={styles.iHerebyConsent1}
      >{`I hereby consent to reporting back to the Takk! platform on the results and impact of  the initiative fundraised for in the format and channel defined by the platform, to the benefit of other users on the platform and general insight. I acknowledge that failure to do so will waive my rights to the initiative and any funds raised. Deliberate Impact Ltd is allowed to use non-sensitive or anonymised data for insight, and for statistical and marketing purposes. `}</div>
      <input className={styles.frameChild32} type="checkbox" />


     
      <div className={styles.rectangleParent}>
        <button className={styles.groupChild} />
        <button type="submit" value="Submit" className={styles.save} >Save</button>
        <button className={styles.cancel} >Cancel</button>
      </div>

      
    </form>
    </div>
  );
};

export default Main;
