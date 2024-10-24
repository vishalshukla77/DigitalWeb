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
            style={{ width: "100%", height: "200px", objectFit: "cover" }} 
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <NavLink to={props.path} className="btn btn-primary">Click</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
