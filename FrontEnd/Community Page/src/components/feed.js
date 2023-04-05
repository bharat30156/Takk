import styles from "./feed.module.css";
import React, { useState, useContext } from 'react';
import { DataContext } from "../context/DataContext";
import ViewCommunityPage from "../pages/ViewCommunityPage";
import FeedCommunity from '../components/FeedCommunity';

const Feed = () => {
  const { communityInfo, setCommunityInfo } = useContext(DataContext)
  const [communityData, setCommunityData] = useState({
    nameOfCommunity: "",
    descriptionOfCommunity: "",
  });
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: null
  });

  const handleInputChange = event => {
    const target = event.target;
    const nameOfCommunity = target.name;
    const value = target.value;

    setFormData(formData => ({
      ...formData,
      [nameOfCommunity]: value
    }));
    console.log(2111, formData)
  };

  const handleFileChange = event => {
    const target = event.target;
    const file = target.files[0];

    setFormData(formData => ({
      ...formData,
      images: file
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    event.preventDefault();

  const nameOfCommunity = event.target.nameOfCommunity.value;
  const descriptionOfCommunity = event.target.descriptionOfCommunity.value;

  setCommunityData({ nameOfCommunity, descriptionOfCommunity });

  // Add the form data to the community info array
  setCommunityInfo((communityInfo) => communityInfo ? [...communityInfo, formData] : [formData]);
  // Reset the form data
  setFormData({
    nameOfCommunity: "",
    descriptionOfCommunity: "",
    images: null,
  });

    console.log(1111, formData);
    // Add the form data to the community info array
    setCommunityInfo((communityInfo) => communityInfo ? [...communityInfo, formData] : [formData])
    // Reset the form data
    fetch("http://localhost:8080/api/communityUser/create", {
      method: "POST",
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
          window.alert("You've successfully created a community!");
          console.log("Community created");
        } else {
          window.alert("Your inputs are wrong");
          console.log("Error");
        }
      })
      .catch((error) => console.error("Error:", error));
    setFormData({
      nameOfCommunity: "",
      descriptionOfCommunity: "",
      images: null,
    });
  };

  const handleImageUpload = () => {
    // need to code functionality for uploading image
  }

  return (
    <div>
    {communityData.nameOfCommunity && communityData.descriptionOfCommunity ? (
       <FeedCommunity key={communityData.nameOfCommunity} communities={communityData} />
    ) : (
      <form action="/CommunityPage" className={styles.theNameOfYourCommunityParent} onSubmit={handleSubmit}>
    <b className={styles.theNameOf}>The name of your community*:</b>
      <textarea
        className={styles.frameChild}
        name="nameOfCommunity"
        value={formData.nameOfCommunity}
        onChange={handleInputChange}
      />
 <b className={styles.aDescriptionOf}>A description of your community*:</b>
      <textarea
        className={styles.frameItem}
        name="descriptionOfCommunity"
        value={formData.descriptionOfCommunity}
        onChange={handleInputChange}
      />
      <b className={styles.yourCommunityPictures}>Your community pictures*:</b>
      <form className={styles.uploadPicture} onSubmit={handleFileChange}>
        <input
          type="file"
          id="myFile"
          name="images"
          onChange={handleFileChange}
        />
          <button type="submit">Submit</button>
        </form>
      
      <b className={styles.theLocationOf}>
        The location of you community (if any):
      </b>
      
      <div className={styles.frameInner} />
      <div className={styles.frameInner} />
      <div className={styles.chooseCountry}>Choose country...</div>
      <div className={styles.lineDiv} />
      <img className={styles.image89Icon} alt="" src="../image-89@2x.png" />
      <button className={styles.image134} />
      <button className={styles.rectangleButton} />
      <button className={styles.image90} />
      <b className={styles.b}>100</b>
      <img className={styles.ellipseIcon} alt="" src="../ellipse-11.svg" />
      <div className={styles.div}>?</div>
      <img className={styles.frameChild1} alt="" src="../ellipse-11.svg" />
      <div className={styles.div1}>?</div>
      <img className={styles.frameChild2} alt="" src="../ellipse-11.svg" />
      <div className={styles.div2}>?</div>
      <img className={styles.frameChild3} alt="" src="../ellipse-11.svg" />
      <div className={styles.div3}>?</div>
      <img className={styles.frameChild4} alt="" src="../ellipse-11.svg" />
      <div className={styles.div4}>?</div>
      <div className={styles.frameChild5} />
      <div className={styles.frameChild6} />
      <div className={styles.frameChild7} />
      <img className={styles.lineIcon} alt="" src="../line-40.svg" />

      <div className={styles.frameChild8} />
      <div className={styles.frameChild9} />
      <div className={styles.frameChild10} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.education}>
            <p className={styles.education1}>Education</p>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.medical}>
            <p className={styles.education1}>Medical</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
      </div>
      <img className={styles.image51Icon} alt="" src="../image-51@2x.png" />
      <img className={styles.image182Icon} alt="" src="../image-51@2x.png" />
      <button className={styles.image132} />
      <button className={styles.image183} />
      <img className={styles.image133Icon} alt="" src="../image-133@2x.png" />
      <img className={styles.frameChild11} alt="" src="../ellipse-11.svg" />
      <div className={styles.div5}>?</div>
      <button className={styles.image160} />
      <button className={styles.image161} />
      <button className={styles.image162} />
      <button className={styles.image163} />
      <button className={styles.image164} />
      <button className={styles.image165} />
      <button className={styles.image166} />
      <button className={styles.image167} />
      <button className={styles.image176} />
      <button className={styles.image168} />
      <div className={styles.perranbayjpg}>Perranbay.jpg</div>
      <div className={styles.thetownjpg}>TheTown.jpg</div>
      <div className={styles.frameChild12} />
      <div className={styles.frameChild13} />
      <button className={styles.image184} />
      <div className={styles.chooseRegion}>Choose region...</div>
      <b className={styles.initiativesInThe}>Initiatives in the community</b>
      <a className={styles.indoorCyclingAt}>Indoor cycling at Perran Bay</a>
      <a className={styles.artLessonsAt}>Art lessons at Perran Bay</a>
      <button className={styles.addANew}>Add a new initiative...</button>
      <button className={styles.image185} />
      <button className={styles.image186} />
      <div className={styles.frameChild14} />
      <b className={styles.organisationsInThe}>
        Organisations in the community
      </b>
      <a className={styles.perranBayCare}>Perran Bay Care home</a>
      <a className={styles.perranBayCommunity}>Perran Bay Community Centre</a>
      <div className={styles.frameChild15} />
      <a className={styles.addANew1}>Add a new organisation...</a>
      <b
        className={styles.productService}
      >{`Product & Service Providers in the community`}</b>
      <a className={styles.cornwallArts}>Cornwall Arts</a>
      <div className={styles.frameChild16} />
      <a
        className={styles.addANew2}
      >{`Add a new Product & Service Provider...`}</a>
      <button className={styles.image144} />
      <img className={styles.frameChild17} alt="" src="../ellipse-11.svg" />
      <div className={styles.div6}>?</div>
      <div className={styles.div4}>?</div>
      <img className={styles.frameChild18} alt="" src="../ellipse-11.svg" />
      <div className={styles.div8}>?</div>
      <div className={styles.div6}>?</div>
      <img className={styles.frameChild19} alt="" src="../ellipse-11.svg" />
      <div className={styles.div10}>?</div>
      <b className={styles.tags}>Tags*</b>
      <div className={styles.chooseFromAll}>Choose from all...</div>
      <b className={styles.communityMembers}>Community members</b>
      <div className={styles.johnSmith}>John Smith</div>
      <div className={styles.debbieJohnson}>Debbie Johnson</div>
      <div className={styles.asonJudd}>Ason Judd</div>
      <div className={styles.winifredTimber}>Winifred Timber</div>
      <div className={styles.rectangleParent}>
        <button className={styles.groupChild} />
        <button type="submit" value="Submit" className={styles.save} >Save</button>
        <button className={styles.cancel} >Cancel</button>
      </div>
    </form>
      )}
     </div>
  );
};

export default Feed;