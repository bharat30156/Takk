import "./initiative-section.css";
import React from 'react';

const InitiativeSection = () => {
  return (
    <div className="frame-parent-initiative">
      <div className="frame-parent-block">
      <div class="circle-container">
  <div class="circle">
    <span class="circle-text">95</span>
  </div>
  <div class="circle">
    <span class="circle-text">1500</span>
  </div>
  <div class="circle">
    <span class="circle-text">75</span>
  </div>
  <div class="circle">
    <span class="circle-text">1200</span>
  </div>
</div>
<div class="subtext-container">
  <div class="subtext">Initiatives</div>
  <div class="subtext">please update text</div>
  <div class="subtext">Related Communities</div>
  <div class="subtext">Related Donations</div>
</div>
        
      </div>
      <div className="initiative-wrapper">
        <div className="initiative">
          Initiatives
        </div>
      </div>
    </div>
  );
};

export default InitiativeSection;
