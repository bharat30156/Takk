import styles from "./InitiativeCreateEditPage.module.css";
import '../user/login/Login.css';
import { useState, useEffect } from 'react';
import { Link, Navigate} from "react-router-dom";
import Select from 'react-select';
import { ACCESS_TOKEN, USER_NAME } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';

import { CountryOptions } from '../constants';
import { TagOptions } from '../constants';
import { CountyOptions } from '../constants';

const Main = (props) => {

  const {state} = useLocation();
  const {originalformData} = state
    
  const [formData, setFormData] = useState({});
  useEffect(()=>{
    setFormData(originalformData)
  }, []) 

  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [newMember, setNewMember] = useState([]);
  const handleNewMember = (e) => {
    setNewMember(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  const navigate = useNavigate();


  
const [imagesAndVideo, setImagesAndVideo] = useState('');
useEffect(()=>{
  setImagesAndVideo(formData.imagesAndVideo);
}, '') 

const [Country, setCountry] = useState('Choose country');
const [County, setCounty] = useState('Choose region');
{/* 
const [images, setImages] = useState([]);
const [imageURLs,setImageURLs] = useState([]);
useEffect (() => {
  if (images.length >= 1) {
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }
}, [images]); */}
  
const [tags, setTags] = useState([]);
const handleTagsChange = (e) => {
    setTags(Array.isArray(e) ? e.map(x => x.value) : []);
  }

function handleSubmit(event) {
  event.preventDefault();

  if(!isChecked1  ||  !isChecked2  || !isChecked3) {
    window.alert("Please check the boxes for confirmation and consents!")
    return 
  }

  const tagsObject = JSON.stringify(Object.assign({}, tags))
  formData.country = Country
  formData.region = County
  formData.imagesAndVideo = imagesAndVideo

console.log(111, formData)

  // Send form data to the backend API using fetch or Axios
  if(formData.id!=-1) {
    fetch("http://localhost:8080/api/initiativeUser/"+formData.id, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        if (res.ok) {
          // if HTTP-status is 200-299
          // get the response body (the method explained below)
          //this.setState({ redirect: "/" });
          window.alert("You've updated the initiative!");    
          navigate('/InitiativeView',{state:{formData:formData}})

        } else {
            window.alert("Your inputs are wrong");
            console.log("Error");
        }
    })
    .catch((error) => console.error("Error:", error));
    }    
    else {
      fetch('http://localhost:8080/api/initiativeUser/create', {
        method: 'POST',    
        body: JSON.stringify(formData),    
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form');
          return;
        }
        // Handle successful response
        window.alert("Initiative created!")
        console.log(333, response.json)
        navigate('/InitiativeView',{state:{formData:formData}})
        //window.location.href = "/InitiativeView"
      })
      .then(() => {
        // Add any additional logic to handle the successful response
      })
      .catch(error => {
        // Handle error
        console.error(error);
      })
    };
}

const handleInputChange = event => {
    const target = event.target;
    const inputname = target.name;
    const inputvalue = target.value;

    setFormData(formData => ({
      ...formData,
      [inputname]: inputvalue
    }));
};
function handlePictureUpload(event) {
  setImagesAndVideo(URL.createObjectURL(event.target.files[0]));
  console.log(555,imagesAndVideo)

 // setImages([...event.target.files]);
  //setImages(URL.createObjectURL(event.target.files[0]));
  {/*
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    const imageData = reader.result;
    const byteArray = new Uint8Array(imageData);

    console.log(byteArray);
  setImg(byteArray);
  console.log(img);
  } */}
}


function checkHandler1() {
  setIsChecked1(!isChecked1)
}
function checkHandler2() {
  setIsChecked2(!isChecked2)
}
function checkHandler3() {
  setIsChecked3(!isChecked3)
}

function handleNumberInput(event) {  
  const target = event.target;
  const inputname = target.name;
  const inputvalue = target.value;

  if(isNaN(inputvalue)) {
    //if input is not a number then here
    window.alert('Please enter a Number!');
    
    setFormData(formData => ({
      ...formData,
      [inputname]: ""
    }));
    //setTarget("")
  } else {
    
    setFormData(formData => ({
      ...formData,
      [inputname]: inputvalue
    }));
  }
};

 return (
    <div  >
    {localStorage.getItem(ACCESS_TOKEN)==null ? (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Please login first to create a new initiative for fundarising!</h1>
          <Link to ="/loginpage"><button className={styles.OKButton}>OK</button></Link>
        </div>
      </div>
      
    ) : (
    <div>
  
    <form className={styles.theNameOfYourInitiativeParent} onSubmit={handleSubmit}>

      <div className={styles.basicInformationAboutTheInWrapper}>
        <div className={styles.basicInformationAbout}>
          Basic information about the Initiative
        </div>
      </div>

      <i className={styles.firstOfAllContainer}>
        <p className={styles.blankLine}
        >{`First of all you must add the core information about your initiative,  like the title, a basic description. You also need a short description that can be used on places where the long description would be too spacious, e.g. in listings. You should add a short video and some pictures where the initiative is explained and promoted, so it is easy for people to understand and envision the success benefits for the people involved itf they support this. `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}
        >{`Lastly, you should add some basic geographic information, so people can find your initiative based on where it is. `}</p>
      </i>


      <b className={styles.theNameOf}>The name of your initiative*:</b>
      <textarea
        className={styles.frameChild}
        name="nameofInitiative"
        value={formData.nameofInitiative}
        onChange={handleInputChange}
      />
      <b className={styles.aDescriptionOf}>A description of your initiative*:</b>
      <textarea
        className={styles.frameItem}
        name="descriptionOfInitiative"
        value={formData.descriptionOfInitiative}
        onChange={handleInputChange}
      />
      <b className={styles.b}>400</b>

      <b className={styles.aShortDescription}>A short description of your initiative*:</b>
      <textarea
        className={styles.frameItemShort}
        name="shortdescriptionOfInitiative"
        value={formData.shortdescriptionOfInitiative}
        onChange={handleInputChange}
      />

      <b className={styles.yourInitiativeVideopictures}>Your initiative video/pictures*:</b>
      <div className={styles.addANewPicture}>Add a new picture...</div>
      <img className={styles.image133Icon} alt="" src="/image-133@2x.png" />
      <div className={styles.uploadPicture}>
        <input
          type="file"
          id="myFile"
          name="imagesAndVideo"
          //multiple
          accept="image/*, video/*"
          onChange={handlePictureUpload}
        />
        {/*{ imageURLs.map(imageSrc => <img className={styles.previewimage} src={imageSrc} />)} */}
        
        <img className={styles.previewimage}  src={imagesAndVideo} />
      </div>

      <b className={styles.theLocationOf}>The location of you initiative*:</b>
      <div className={styles.chooseCountry}>
                      <Select                            
                        options={CountryOptions}  
                        value={{label: Country}}                          
                        placeholder={'Choose Country'}
                        name = 'Country'           
                        onChange={(e) => { setCountry(e.value);}}
                      />                    
                    </div>

      
                    <div className={styles.chooseRegion}>
                      <Select                            
                        options={CountyOptions}  
                        value={{label: County}}                          
                        placeholder={'Choose County'}
                        name = 'County'           
                        onChange={(e) => { setCounty(e.value);}}
                      />                    
                    </div>              

      
     
     {/* <div className={styles.lineDiv} /> */}

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
      
  {/*
      <img className={styles.frameChild22} alt="" src="/yellowhelp.svg" />
      <div className={styles.div5}>?</div>
      <div className={styles.frameChild23} />
      <div className={styles.supportersOfPerran}>
        Supporters of Perran Bay Care home
      </div>
      <div className={styles.perranporth}>Perranporth</div>
*/}
    <b className={styles.communitiesForThis}>Communities for this initiative*:</b>
    <div className={styles.addACommunity}>Add a community...</div>
    <img className={styles.image203Icon} alt="" src="/image-133@2x.png" />

    <b className={styles.organisationForThis}>Organisation for this initiative:</b>  
    <div className={styles.addAnOrganisation}>Add an organisation...</div>
    <img className={styles.image204Icon} alt="" src="/image-133@2x.png" />
   
    <b className={styles.productserviceInThis}>{`Product/Service in this initiative: `}</b>
    <div className={styles.addAProductservice}>Add a product/service...</div>
    <img className={styles.image205Icon} alt="" src="/image-133@2x.png" />
   
      <div className={styles.frameChild24} />
      

       
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

      <b className={styles.target}>Target*: £ (Numbers only)</b>
      <input className={styles.frameChild6} type="text" 
        name='target'
        value={formData.target}
        onChange={handleNumberInput}
      />

      <div className={styles.frameParent}>
        <div className={styles.frameDiv} />
        <div className={styles.oneTime}>ONE-TIME</div>
      </div>
      <div className={styles.monthlyWrapper}>
        <div className={styles.monthly}>MONTHLY</div>
      </div>

    
      <img className={styles.ellipseIcon} alt="" src="/yellowhelp.svg" />
      <b className={styles.bankDetailsFor}>
        Bank details for receiving donations*:
      </b>

     {/* <div className={styles.accountNumber1}>{`<ACCOUNT NUMBER>`}</div> */}
     <div className={styles.accountHolderName}>Account holder name:</div>
      <input className={styles.frameChild5} type="text" 
        name='accountName'
        value={formData.accountName}
        onChange={handleInputChange}
      />

      <label>
        <div className={styles.bankaccountradio}>
          <input type="radio" name="bankaccountRadio" value="bankaccountvalue" />
            UK bank account
        </div>
      </label>
      <label>
        <div className={styles.paypalradio}>
          <input type="radio" name="bankaccountRadio" value="bankaccountvalue" />
            PayPal
        </div>
      </label>

      <div className={styles.sortCode}>Sort code:</div>
      <input className={styles.rectangleInput} type="text" 
        name='sortCode'
        value={formData.sortCode}
        onChange={handleNumberInput}
      />
      <div className={styles.accountNumber}>Account number:</div>
      <input className={styles.frameChild3} type="text"
        name='accountNumber'
        value={formData.accountNumber}
        onChange={handleNumberInput}
      />
     
          
      <div className={styles.paypalId}>PayPal ID:</div>
      <input  className={styles.frameChild30} type="text" 
        name='paypalID'
        value={formData.paypalID}
        onChange={handleInputChange} 
      />
     

      <b className={styles.confirmationAndConsents}>
        Confirmation and consents*:
      </b>
   
      <img className={styles.frameChild7} alt="" src="/yellowhelp.svg" />
      <img className={styles.frameChild8} alt="" src="/yellowhelp.svg" />
      <img className={styles.frameChild10} alt="" src="/yellowhelp.svg" />
      <div className={styles.frameChild11} />
      <div className={styles.frameChild12} />
      <div className={styles.frameChild13} />
      <div className={styles.frameChild14} />
      <div className={styles.frameChild15} />
      <div className={styles.frameChild16} />
      <img className={styles.lineIcon} alt="" src="/line-40.svg" />
      <div className={styles.frameChild17} />

      <b className={styles.tags}>Tags*</b>      
      <div className={styles.chooseFromAll}>                  
                      <Select                          
                         isMulti
                         name="initiativetags"
                         isSearchable={true}
                         placeholder={'Choose from all...'}
                         options={TagOptions}
                         className="initiative-tag-select"
                         classNamePrefix="select"
                         onChange={handleTagsChange}
                         value={TagOptions.filter(obj => tags.includes(obj.value))} // set selected values
                      />
                    </div>
{/*
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

      
       <img className={styles.image132Icon} alt="" src="/image-132@2x.png" />
       <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
  */}
      {/*<img className={styles.image161Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image163Icon} alt="" src="/image-166@2x.png" />
      <img className={styles.image164Icon} alt="" src="/image-166@2x.png" />
*/}



      <div className={styles.confirmationAndConsentsWrapper}>
        <div
          className={styles.basicInformationAbout}
        >{`Confirmation and consents `}</div>
      </div>
      <i
        className={styles.forClosingThings}
      >{`For closing things up, you need to confirm your responsibilities and consents. `}</i>
      

      {/*<div className={styles.johnSmith}>John Smith</div>
      <div className={styles.debbieJohnson}>Debbie Johnson</div>
<div className={styles.asonJudd}>Ason Judd</div>*/}
      <div className={styles.frameChild26} />
      <div className={styles.inviteANew}>Invite a new team member...</div>
      <img className={styles.image203Icon1} alt="" src="/image-133@2x.png" />
 {/*     <input  className={styles.newteammember} type="text" 
        name='newMember'
        placeholder="enter email address"
        multiple
        onChange={handleNewMember}
        value={newMember.append(value)} // set selected values
/>*/}
     
      <div className={styles.iHerebyConfirmContainer}>
        <p className={styles.blankLine}
        >{`I hereby confirm that all funds raised will be used for the purpose described above. `}</p>
        <p className={styles.blankLine}
        >{`I take full responsibility for solely spending the funds raised towards the initiative, and if that for some reason should be impossible, I will alert Deliberate Impact Ltd. and together with them find a solution for spending the funds for a similar purpose. `}</p>
      </div>

      <img className={styles.frameChild20} alt="" src="/yellowhelp.svg" />
      <input className={styles.frameChild21} 
        type="checkbox" 
        id="checkbox1"
        checked={isChecked1}
        onChange={checkHandler1}
      />
      
      <div className={styles.iHerebyConsent}
      >{`I hereby consent to allowing Deliberate Impact Ltd and their partners to securely store and handle required data to handle the donations to this initiative, whether it is stored on the Takk! platform or elsewhere. I will not hold Deliberate Impact Ltd and their partners liable for any potential losses or damage caused by the initiative and the use of the Takk! platform. `}</div>
        <input className={styles.frameChild31} 
        type="checkbox" 
        id="checkbox2"
        checked={isChecked2}
        onChange={checkHandler2}
      />
      
      <div className={styles.iHerebyConsent1}
      >{`I hereby consent to reporting back to the Takk! platform on the results and impact of  the initiative fundraised for in the format and channel defined by the platform, to the benefit of other users on the platform and general insight. I acknowledge that failure to do so will waive my rights to the initiative and any funds raised. Deliberate Impact Ltd is allowed to use non-sensitive or anonymised data for insight, and for statistical and marketing purposes. `}</div>
      <input className={styles.frameChild32} 
        type="checkbox" 
        id="checkbox3"
        checked={isChecked3}
        onChange={checkHandler3}
      />


     
      <div className={styles.rectangleParent}>
        <button className={styles.groupChild} />
        <button type="submit" value="Submit" className={styles.save} >Save</button>
        <button className={styles.cancel} >Cancel</button>
      </div>

      
    </form>

    <div className={styles.copyrightAndInformationAbouWrapper}>
      <div className={styles.copyrightAndInformation}>
        @copyright and information about the TAKK
      </div>
    </div>

  </div>
    )}
    </div>
 );
};

export default Main;
