import Footer from "../components/footer";
import styles from "./CommunityCreateEditPage.module.css";
import React, { useState, useEffect } from 'react';
import { DataContext } from "../context/DataContext";
import ViewCommunityPage from "../pages/CommunityViewPage";
import FeedCommunity from '../components/FeedCommunity';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import { createCommunityRequest, addTagsToCommunity} from '../util/APIUtils';

import { CountryOptions } from '../constants';
import { TagOptions } from '../constants';
import { CountyOptions } from '../constants';


const CommunityCreateEdit = (props) => {

  const navigate = useNavigate();
  const handleCancel = () => {
    // Go back to the previous page when cancel button is clicked
    navigate(-1);
  };
  
  const {state} = useLocation();
  const originalformData = state ? state.originalformData : null;
    
  const [formData, setFormData] = useState({});
  const [allInitiativelist, setAllInitiativelist] = useState([]);
  const [relatedInitiatives, setRelatedInitiatives] = useState([]);
  const [tags, setTags] = useState([]);
  const [Country, setCountry] = useState("");
  const [County, setCounty] = useState('');
  const [imageFiles, setImageFiles] = useState([]);

  
  useEffect(()=>{
    setFormData(originalformData);

    fetch("http://localhost:8080/api/initiative", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          window.alert("Could not get initiatives");
          console.log("Error");
        }
      })
      .then((data) => {
        setAllInitiativelist(data);
      })
      .catch((error) => console.error("Error:", error));    
      
    // let t = formData.tags;
    // setTags(Array.isArray(t) ? t.map(x => x.name) : []);
    if (Array.isArray(originalformData.tags)) {
      const tagNames = originalformData.tags.map((tag) => tag.name);
      setTags(tagNames);
    } else {
      setTags([]);
    }
     setCountry(originalformData.country);
     setCounty(originalformData.region);
     setImageFiles(originalformData.images);

    if (Array.isArray(originalformData.initiatives)) {
      const initiatives = originalformData.initiatives.map((initiative) => 
        `${initiative.id} ${initiative.nameofInitiative}`);
      setRelatedInitiatives(initiatives);
    } else {
      setRelatedInitiatives([]);
    }
    
  }, []) 

  let initiativeNameOptions = [];
  if (allInitiativelist != null) {
    allInitiativelist.map((v) => {
      initiativeNameOptions.push({
        label: v.id + " " + v.nameofInitiative,
        value: v.id + " " + v.nameofInitiative,
      });
    });
  }

  
  console.log(relatedInitiatives, "relatedInitiatives")
  console.log(formData, "formData in CommunityCreateEdit")

  function handleRelatedInitiativesChange (e) {
    setRelatedInitiatives(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  function handleTagsChange(e) {
    setTags(Array.isArray(e) ? e.map(x => x.value) : []);
  }
 
  const addFile = (e) => {
    const files = Array.from(e.target.files);
    console.log("addFile", files);
    const decoder = new TextDecoder();
    // Create a new array of imageEntities
    files.map((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = reader.result; // Binary data as ArrayBuffer
        const byteArray = new Uint8Array(arrayBuffer); // Convert to Uint8Array
      //  const data = event.target.result;
      //  console.log("addFile-data", data);
        // Create the imageEntity with the necessary properties
        const imageEntity = {
          id: -1,
          name: file.name,
          imageData:   JSON.stringify(byteArray)//byteArray,
        };
        
        // Update the state with the new imageEntity
        setImageFiles((prevImages) => [...(prevImages || []), imageEntity]);
      };
  
      // Start reading the file
      reader.readAsArrayBuffer(file);
      console.log("addFile-imageFiles", imageFiles);
      return null; // We don't need to return anything here
    });
  
{/*
  files.map((file) => {
setImageFiles((prevImages) => [...(prevImages || []), file]);
  })
console.log("addFile-imageFiles", imageFiles); */}
  };
  

  const removeFile = (i) => {
    setImageFiles([...imageFiles.filter((_, index) => index !== i)]);
  };

  const handleInputChange = event => {
    const target = event.target;
    const targetname = target.name;
    const value = target.value;

    setFormData(formData => ({
      ...formData,
      [targetname]: value
    }));
  
  };
  const [communityData, setCommunityData] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    //const tagsObject = JSON.stringify(Object.assign({}, tags))
    formData.country = Country
    formData.region = County
    //formData.imageFiles = JSON.stringify(imageFiles);
    formData.imageFiles = imageFiles.slice();

    formData.tagNames = tags.slice()//tagsObject

    let relatedInitiativeIDs = [];
    relatedInitiatives.map(v => 
      relatedInitiativeIDs.push(v.split(" ")[0])
    );
    formData.relatedInitiativeIDs = relatedInitiativeIDs;

    console.log("formData to submit", formData)
        
    if(formData.id!=-1) {
      fetch("http://localhost:8080/api/community/updateRequest/"+formData.id, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
          if (res.ok) {
            window.alert("You've updated the community!");  
            return res.json();  
           // navigate('/CommunityView',{state:{formData:formData}})

          } else {
              window.alert("Your inputs are wrong");
              console.log("Error");
          }
      })
      .then(data => {
        setCommunityData(data)
        console.log("API  data",data)
          console.log("API community data",communityData)
        navigate('/CommunityView',{state:{formData:data}})
      })
      .catch((error) => console.error("Error:", error));
      }    
      else {
        //  createCommunityRequest(formData);
        
    console.log(555, formData)
    fetch("http://localhost:8080/api/community/createRequest", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
    })
    .then((res) => {
          if (res.ok) {
            console.error("res:", res);
            window.alert("You've successfully created a community!");  
            return res.json(); 
          } else {
              window.alert("Your inputs are wrong");
          }
          
    })
    .then(data => {
      setCommunityData(data)
      console.log("API  data",data)
        console.log("API community data",communityData)
      navigate('/CommunityView',{state:{formData:data}})
    })
    .catch((error) => { 
        console.error("Error:", error);
    })
    }
  };


  return (
    <div className={styles.macbookPro161}>
{/*
      {communityData.nameOfCommunity && communityData.descriptionOfCommunity ? (
       <FeedCommunity key={communityData.nameOfCommunity} communities={communityData} />
    ) : (
    */}

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
      <b className={styles.aShortDescription}>A short description of your initiative*:</b>
      <textarea
        className={styles.frameItemShort}
        name="shortDescriptionOfCommunity"
        value={formData.shortDescriptionOfCommunity}
        onChange={handleInputChange}
      />

      <b className={styles.yourCommunityPictures}>Your community pictures*:</b>
      <label className={styles.addANewPicture}>
          Add a new picture...
          <input
            type="file"
            onChange={(e) => addFile(e)}
            accept="image/*, video/*"
            name="imageFiles"
            label="upload"
            id="myFile"
            multiple
            hidden
          />
      </label>
      {console.log("imageFiles", imageFiles)}
      {imageFiles!=null && imageFiles.length > 0 && (
        <div className={styles.pictureContainer}>
        <ul className={styles.list}>
          {imageFiles.map((val, index) => {
            return (
            <li key={index} className={styles.uploadPicture}>
              <img className={styles.rubbishbinimage} src="../image-51@2x.png" alt="" />

              <span style={{ margin: '10px' }}>{val.name}</span>

              <a href="#" onClick={() => removeFile(index)}>
                <img className={styles.rubbishbinimage} src="../image132@3x.png" alt="Image" />
              </a>
            </li>
            )}
          )}
        </ul>
        </div>
      )}
    {/*
      <button><img className={styles.image133Icon} alt="" src="/image-133@2x.png" /></button>
      <div className={styles.uploadPicture}>
        <input
          type="file"
          id="myFile"
          name="imagesAndVideo"
          multiple
          accept="image/*, video/*"
          onChange={handlePictureUpload}
        />
      //  <img className={styles.previewimage}  src={imagesAndVideoURL} />
      </div>
        */}
           
      <b className={styles.theLocationOf}>
        The location of you community (if any):
      </b>
      

      <div className={styles.chooseCountry}>
                      <Select                            
                        options={CountryOptions}  
                        value={{label: Country}}                          
                        placeholder={'Choose country'}
                        name = 'Country'           
                        onChange={(e) => { setCountry(e.value);}}
                      />
                    
                    </div>

            
      <div className={styles.chooseRegion}>
                      <Select                            
                        options={CountyOptions}  
                        value={{label: County}}                          
                        placeholder={'Choose county'}
                        name = 'County'           
                        onChange={(e) => { setCounty(e.value);}}
                      />
                    
                    </div>        

      <b className={styles.b}>100</b>
      <img className={styles.ellipseIcon} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild1} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild2} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild3} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild4} alt="" src="../yellowhelp.svg" />
      <div className={styles.frameChild5} />
      <div className={styles.frameChild6} />
      <img className={styles.lineIcon} alt="" src="../line-40.svg" />

      <div className={styles.frameChild8} />
      <div className={styles.frameChild9} />

     

  <img className={styles.image133Icon} alt="" src="../image-133@2x.png" />
      <img className={styles.frameChild11} alt="" src="../yellowhelp.svg" />
       

      <b className={styles.initiativesInThe}>Initiatives in the community</b>
 
      <button className={styles.image185} />
      <div className={styles.addANew}>Add initiatives...</div>
      <div className={styles.chooseInitiatives}>                  
                      <Select                          
                         isMulti
                         name="addInitiatives"
                         isSearchable={true}
                         placeholder={'Choose initiatives ...'}
                         options={initiativeNameOptions}
                         className="initiative-select"
                         classNamePrefix="select"
                         onChange={handleRelatedInitiativesChange}
                         value={initiativeNameOptions.filter(obj => relatedInitiatives.includes(obj.value))} // set selected values
                      />
                    </div>
                    
      <b className={styles.tags}>Tags*</b>
      <div className={styles.chooseFromAll}>                  
                      <Select                          
                         isMulti
                         name="communitytags"
                         isSearchable={true}
                         placeholder={'Choose from all...'}
                         options={TagOptions}
                         className="community-tag-select"
                         classNamePrefix="select"
                         onChange={handleTagsChange}
                         value={TagOptions.filter(obj => tags.includes(obj.value))} // set selected values
                      />
                    </div>


     
      <button className={styles.image186} />
      <div className={styles.frameChild14} />
      <b className={styles.organisationsInThe}>
        Organisations in the community
      </b>
     {/* <a className={styles.perranBayCare}>Perran Bay Care home</a>
      <a className={styles.perranBayCommunity}>Perran Bay Community Centre</a>*/}
      <div className={styles.frameChild15} />
      <a className={styles.addANew1}>Add a new organisation...</a>
      <b
        className={styles.productService}
      >{`Product & Service Providers in the community`}</b>
      {/*<a className={styles.cornwallArts}>Cornwall Arts</a>
      <div className={styles.frameChild16} />*/}
      <a
        className={styles.addANew2}
      >{`Add a new Product & Service Provider...`}</a>
      <button className={styles.image144} />
      <img className={styles.frameChild17} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild18} alt="" src="../yellowhelp.svg" />
      <img className={styles.frameChild19} alt="" src="../yellowhelp.svg" />
      
     
      <b className={styles.communityMembers}>Community members</b>
      <div className={styles.johnSmith}>John Smith</div>
      <div className={styles.debbieJohnson}>Debbie Johnson</div>
      <div className={styles.asonJudd}>Ason Judd</div>
      <div className={styles.winifredTimber}>Winifred Timber</div>
      
      <div className={styles.rectangleParent}>
      <button className={styles.groupChild} />
        <button type="submit" value="Submit" className={styles.save} >Save</button>
        <button type="button" className={styles.cancel} onClick={handleCancel}>Cancel</button>
      </div>
    </form>
      )


      <Footer />
      
     {/* <a className={styles.motitech}>Motitech</a>
      <div className={styles.macbookPro161Child} />*/}
      <button className={styles.seeAllCommunity}>
        See all community members...
      </button>
    </div>
  );
};

export default CommunityCreateEdit;
