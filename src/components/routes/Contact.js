import React from "react";
import image1 from './../../images/food1.jpeg';
import image2 from './../../images/food2.jpeg';
import image3 from './../../images/food3.jpeg';

export default function Contact() {
  return (
    <div>
    <div className="contact">
       <p>Fine Dinner aims to connect the 
          neighborhood to a dining experience in the 
          same way ingredients are connected to food.
          Specialized on Swedish delicatessen 
          we serve our best version of swedish high cuisine. 
          Reinventing traditional swedish dishes into new high cuisine.
      </p>
    </div>
  <div className="images-contact">
    <ul>
      <li><img src={image1} className="imagestyle" alt="oysters"/></li>
      <li><img src={image2} className="imagestyle" alt="restaurant"/></li>
      <li><img src={image3} className="imagestyle" alt="maindish"/></li>
    </ul>
    </div>
  </div>


  );
}
