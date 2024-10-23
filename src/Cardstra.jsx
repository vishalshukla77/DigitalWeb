import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img 
            src={props.imgsrc} 
            className="card-img-top" 
            alt={props.imgsrc} 
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        
        </div>
      </div>
    </>
  );
};

export default Card;
