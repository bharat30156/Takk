import "./story-section.css";
import '../../index.css';
import Modal from "react-modal";
import PaymentPageDonate1 from "../../pages/PaymentPageDonate1";
import PaymentPageDonate2 from "../../pages/PaymentPageDonate2";
import PaymentPageDonate3 from "../../pages/PaymentPageDonate3";


import {React, useCallback, useState} from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom'

const StorySection = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const handleOpenModal1 = () => {
    setCurrentModal('modal1');
  };

  const handleOpenModal2 = () => {
    setCurrentModal('modal2');
  };

  const handleOpenModal3 = () => {
    setCurrentModal('modal3');
  };

  const handleModal2Back = () => {
    setCurrentModal('modal1');
  };

  const handleModal3Back = () => {
    setCurrentModal('modal2');
  };

  const handleCloseModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className="frame-parent5">
      <div className="image-8-parent">
        <img className="image-8-icon" alt="" src="../image-8@2x.png" />
        <div className="group-div">
          <button className="group-child6" />
        </div>
        <div className="elizabeths-story">
          <p className="elizabeths-story1">Elizabeth’s Story</p>
        </div>
        <button className="read-more">Read More</button>
        <div className="donate1">Donate</div>
        <div className="lorem-ipsum-dolor">
          Read the strong story about Elisabeth’s journey from a double hipfracture and being bound to be in a wheelchair to walks along the beach!  When Elisabeth experienced a double hip-fracture both her, her family, and the carers was sure she would be in a wheelchair the rest of her life. But thanks to the strong community near Abforth care home and more than 50 kind donors coming together, the home was able to support Elisabeth regaining her strength and balance. Support Elisabeth and the rest of the seniors getting active again and living fuller lives!
        </div>

        
        <button className="donate-wrapper" onClick={handleOpenModal1} >
          <div className="donate2">Donate</div>
        </button>

    

      {currentModal === 'modal1' && (
        <Modal
          isOpen={true} // Set isOpen to true for Modal 1
          onRequestClose={handleCloseModal}
          contentLabel="Modal 1"
          className="modal1"
          appElement={document.getElementById('root') || undefined}
        >
           <PaymentPageDonate1  />   
          <input className="continue1" type="button" value="Continue" onClick={handleOpenModal2} />

          <input className="x" type="button" value="X" onClick={handleCloseModal} />
          <input className="cancel1" type="button" value="Cancel" onClick={handleCloseModal} />
        </Modal>
      )}

     {currentModal === 'modal2' && (
        <Modal
          isOpen={true} // Set isOpen to true for Modal 2
          onRequestClose={handleCloseModal}
          contentLabel="Modal 2"
          className="modal2" // Add a custom class for larger size
          appElement={document.getElementById('root') || undefined}
        >
          <PaymentPageDonate2  />   

          <input className="modal2continue1" type="button" value="Continue" onClick={handleOpenModal3} />
          <input className="x" type="button" value="X" onClick={handleCloseModal} />
          <input className="modal2back" type="button" value="Back" onClick={handleModal2Back} />
          
        </Modal>
      )}
    
    {currentModal === 'modal3' && (
        <Modal
          isOpen={true} // Set isOpen to true for Modal 2
          onRequestClose={handleCloseModal}
          contentLabel="Modal 3"
          className="modal3" // Add a custom class for larger size
          appElement={document.getElementById('root') || undefined}
        >
          <PaymentPageDonate3  />   

          <input className="modal3continue1" type="button" value="Pay" onClick={handleOpenModal2} />
          <input className="x" type="button" value="X" onClick={handleCloseModal} />
          <input className="modal3back" type="button" value="Back" onClick={handleModal3Back} />
          
        </Modal>
      )}
    
      </div>

      <div className="story-of-the-day-wrapper">
        <div className="story-of-the">Story of the Day</div>
      </div>
    </div>
  );
};

export default StorySection;
