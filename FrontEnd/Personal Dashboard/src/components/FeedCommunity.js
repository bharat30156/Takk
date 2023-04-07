import JoinAndShare from "../components/JoinAndShare";
import ImageSection from "../components/ImageSection";
import Tags from "../components/Tags";
import AssociatedInitiative from "../components/AssociatedInitiative";
import styles from "./FeedCommunity.module.css";
import React, { useState , useEffect} from 'react';



const FeedCommunity = ({ communities }) => {
  console.log('Communities Prop:', communities);

  return (
    <div className={styles.image62Parent}>
      <img className={styles.image62Icon} alt="" src="../image-62@2x.png" />
      <img className={styles.image63Icon} alt="" src="../image-63@2x.png" />
      <img className={styles.image51Icon} alt="" src="../image-51@2x.png" />
      <div className={styles.frameChild} />
      <JoinAndShare />
      <div className={styles.frameItem} />
      <ImageSection />
      <div
        className={styles.descriptionAboutCommunity}
      >{communities.descriptionOfCommunity || ''}</div>
      <button className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameInner} />
        </div>
        <button className={styles.createPost}>
          <p className={styles.createPost1}>Create Post</p>
        </button>
      </button>
      <b className={styles.communityPosts}>Community Posts</b>
      <img className={styles.image102Icon} alt="" src="../image-102@2x.png" />
      <div className={styles.descriptionAboutCommunity1}>
        Description about community post Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Cumque similique eaque delectus unde commodi
        assumenda, rerum, et doloribus nobis qui eius voluptatum vitae suscipit
        quos quod? Description about community Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Cumque similique eaque delectus unde
        commodi assumenda, rerum, et doloribus nobis qui eius voluptatum vitae
        suscipit quos quod?
      </div>
      <div className={styles.lineDiv} />
      <img className={styles.lineIcon} alt="" src="../line-50.svg" />
      <div className={styles.frameChild1} />
      <button className={styles.image104} />
      <img className={styles.image105Icon} alt="" src="../image-105@2x.png" />
      <div className={styles.nameOfPost}>Name of Post Owner</div>
      <button className={styles.image106} />
      <textarea className={styles.rectangleTextarea} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-20.svg" />
      <img className={styles.image51Icon1} alt="" src="../image-511@2x.png" />
      <div className={styles.addComment}>Add comment</div>
      <img className={styles.image108Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image109Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image110Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image111Icon} alt="" src="../image-108@2x.png" />
      <button className={styles.comments}>20 Comments</button>
      <img className={styles.image112Icon} alt="" src="../image-105@2x.png" />
      <div className={styles.nameOfPost1}>Name of Post Owner</div>
      <img className={styles.image103Icon} alt="" src="../image-103@2x.png" />
      <img className={styles.frameChild2} alt="" src="../ellipse-20.svg" />
      <img className={styles.image113Icon} alt="" src="../image-511@2x.png" />
      <div className={styles.descriptionAboutCommunity2}>
        Description about community post Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Cumque similique eaque delectus unde commodi
        assumenda, rerum, et doloribus nobis qui eius voluptatum vitae suscipit
        quos quod? Description about community Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Cumque similique eaque delectus unde
        commodi assumenda, rerum, et doloribus nobis qui eius voluptatum vitae
        suscipit quos quod?
      </div>
      <img className={styles.frameChild3} alt="" src="../line-50.svg" />
      <button className={styles.image114} />
      <button className={styles.image116} />
      <button className={styles.comments1}>20 Comments</button>
      <div className={styles.addComment1}>Add comment</div>
      <textarea className={styles.frameChild4} />
      <img className={styles.image117Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image118Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image119Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image120Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image121Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image122Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image123Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image124Icon} alt="" src="../image-108@2x.png" />
      <img className={styles.image125Icon} alt="" src="../image-108@2x.png" />
      <button className={styles.view55More}>view 55 more comments</button>
      <div className={styles.descriptionAboutCommunity3}>
        Description about community post Lorem ipsu
      </div>
      <Tags />
      <AssociatedInitiative />
      <div className={styles.titleOfTheCommunityWrapper}>
      <div className={styles.titleOfThe}>{communities.nameOfCommunity || ''}</div>
      </div>
      <div className={styles.helloDescriptionAbout}>
        Hello, Description about
      </div>
      <div className={styles.descriptionAboutCommunity4}>
        Description about community post Lorem ipsum Descriptio
      </div>
      <div className={styles.helloDescriptionAbout1}>
        Hello, Description about
      </div>
      <div className={styles.helloDescriptionAbout2}>
        Hello, Description about
      </div>
      <div className={styles.name}>Name</div>
      <div className={styles.name1}>Name</div>
      <div className={styles.name2}>Name</div>
      <div className={styles.name3}>Name</div>
      <div className={styles.helloDescriptionAbout3}>
        Hello, Description about
      </div>
      <div className={styles.name4}>Name</div>
      <div className={styles.helloDescriptionAbout4}>
        Hello, Description about
      </div>
      <div className={styles.descriptionAboutCommunity5}>
        Description about community post Lorem ipsu
      </div>
      <div className={styles.helloDescriptionAbout5}>
        Hello, Description about
      </div>
      <div className={styles.descriptionAboutCommunity6}>
        Description about community post Lorem ipsu
      </div>
      <div className={styles.descriptionAboutCommunity7}>
        Description about community post Lorem ipsu
      </div>
      <div className={styles.descriptionAboutCommunity8}>
        Description about community post Lorem ipsu
      </div>
      <div className={styles.helloDescriptionAbout6}>
        Hello, Description about
      </div>
      <div className={styles.name5}>Name</div>
      <div className={styles.name6}>Name</div>
      <div className={styles.name7}>Name</div>
      <div className={styles.name8}>Name</div>
      <div className={styles.name9}>Name</div>
      <div className={styles.name10}>Name</div>
      <div className={styles.name11}>Name</div>
      <div className={styles.name12}>Name</div>
      <a className={styles.communityMembers}>
        <span>1400 community members</span>
        <span className={styles.span}>{`   `}</span>
      </a>
      <a className={styles.relatedInitiatives}>
        <span>{`70 related initiatives `}</span>
        <span className={styles.span}>{`  `}</span>
      </a>
      <button className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
      </button>
      <button className={styles.leaveCommunity}>Leave Community</button>
    </div>
  );
};

export default FeedCommunity;
