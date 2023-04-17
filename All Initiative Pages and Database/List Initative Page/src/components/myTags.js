import "./myTags.css";
import React from 'react';
const Mytags = () => {
  return (
    <section className="frame-group-tags" >
      
      <div className="mytags s">My Tags</div>
      
    <div class="tags-button-group">
      <button class="button-tags">Medical</button>
      <button class="button-tags">Education</button>
      <button class="button-tags">Sports</button>
      <button class="button-tags">Animals and Pets</button>
      <button class="button-tags">Disable</button>
  </div>

      <div className="tags-initiatives">Shows only Initiatives related to my tags</div>
      <label class="switch">
         <input type="checkbox"></input>
          <sbutton class="slider round"></sbutton>
      </label>
    </section>
  );
};

export default Mytags;
