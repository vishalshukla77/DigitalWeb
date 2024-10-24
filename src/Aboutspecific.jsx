import React from "react";
import { NavLink } from "react-router-dom";
import Strategic from './StrategicAllies';
import Card from './Cardstra'; 
import Sdata from './Sdata'; 

const Aboutspecific = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center" style={{ marginTop: "80px" }}>
        <div className="container-fluid">
          {/* First Row */}
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6 d-flex justify-content-center flex-column pt-5">
                  <h1 style={{ color: "#00BFFF" }}>
                    <strong>{props.name}</strong>
                  </h1>
                  <h2 className="my-3" style={{ color: "white" }}>
                    Digital marketing isn't what we do - it's{" "}
                    <strong className="brand-name">who we are</strong>
                  </h2>

                  <div className="mt-3" >
                    <h2 style={{ color: "white" }}>
                      We provide agile marketing solutions that adapt to shifting trends and business demands. We go beyond conventional strategies to not only fill gaps but accelerate your growth.
                      <br />
                      <br />
                      As your marketing partner, we’re committed to building a high-performing marketing team and ecosystem that drives long-term success. We work alongside you to deliver the best solutions—whenever and however you need them—acting as the backbone of your marketing efforts.
                    </h2>
                    <div className="mt-3">
                      <NavLink to="/strategic" className="btn-get-started">
                        {"Strategic Allies"}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>

       
         
        </div>
      </section>
    </>
  );
};

export default Aboutspecific;
