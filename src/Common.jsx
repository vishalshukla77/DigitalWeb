import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.jpg";
import subs from "../src/images/subs.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong>{props.name}</strong>
                    <strong className="brand-name"> MARKETING</strong>
                  </h1>
                  <h2 className="my-3">
                    Quickly unlock where the problems are.
                  </h2>
                  <div className="mt-3">
                  
                    <div className="navlink-container">
                  
                      <NavLink to={props.visit} className="btn-get-started">
                        {props.btname}
                      </NavLink>

                    
                      <NavLink to={props.visit} className="btn-get-started">
                        {"Know Process"}
                      </NavLink>

                  
                      <NavLink to={props.visit} className="btn-get-started">
                        {"Need Help?"}
                      </NavLink>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h2>Beyond Interaction</h2>
                    <h3 style={{ color: "#87CEFA" }}>Subsidiaries: </h3>
                    <img src={subs} alt="subsidiaries" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
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

export default Common;
