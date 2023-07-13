import React, {  useState , useEffect} from 'react';
import styles from "./ImageSlider.module.css";
import { imageDataConvertToUint8 } from '../util/APIUtils';

const ImageSlider = ({ imageDataList }) => {
  const images = imageDataList.reduce((acc, imageData) => {
    const url = imageDataConvertToUint8(imageData.imageData);
    if (url !== null) {
      acc.push(url);
    }
    return acc;
  }, []);
  
console.log("imageslider", images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className={styles.imageContainer}>
      {currentImageIndex < 1 ? (
            <img className={styles.image62Icon} alt="" src="../image-62@2x.png"/>
          ) : (
            <img onClick={previousImage}
              className={styles.image62Icon} alt="" src="../image-62@2x.png" />
          )}  

      {console.log("currentImageIndex", currentImageIndex)}
      <img className={styles.mainimage} src={currentImage} alt="Current" />

      {currentImageIndex === images.length - 1 ? (
          <img className={styles.image63Icon} alt="" src="../image-63@2x.png" />
          ) : (
            <img onClick={nextImage} className={styles.image63Icon} alt="" src="../image-63@2x.png" />
        )}
      
      <img className={styles.image51Icon} alt="" src="../image-51@2x.png" />

{/*
      <button onClick={previousImage} disabled={currentImageIndex === 0}>
        Previous
      </button>
     
      
      <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
        Next
      </button>
  */}

    </div>
  );
};

export default ImageSlider;