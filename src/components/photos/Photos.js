import React from "react";
import Astrophoto from "../../img/astrophoto.jpg";
import Events from "../../img/events.jpg";
import Travel from "../../img/travel.jpg";
import Property from "../../img/property.jpg";

const Photos = () => {
  return (
    <div className="photos">
      <h2>Photos</h2>
      <div className="container">
        <div>
          <img src={Travel} alt=""></img>
          <h3>Travel</h3>
        </div>
        <div>
          <img src={Astrophoto} alt=""></img>
          <h3>Astrophoto</h3>
        </div>
        <div>
          <img src={Property} alt=""></img>
          <h3>Property</h3>
        </div>
        <div>
          <img src={Events} alt=""></img>
          <h3>Events</h3>
        </div>
      </div>
    </div>
  );
};

export default Photos;
