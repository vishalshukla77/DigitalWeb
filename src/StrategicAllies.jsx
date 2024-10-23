import React from "react";
import Sdata from './StraData'; // Ensure Sdata is imported correctly
import Card from './Cardstra'; // Ensure Card component is imported

const Strategic = () => {
  return (
    <>
      <section id="header" className="d-flex flex-column align-items-center" style={{ paddingTop: "100px" }}> {/* Adjust padding to match your navbar height */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto text-center"> {/* Centered text for the heading and description */}
              <h1>
                STRATEGIC 
                <strong style={{ color: "#00BFFF" }}> ALLIES</strong>
              </h1>
              <h2 className="my-3">
                Honored by industry{" "}
                <strong className="brand-name">partnerships</strong> and <strong className="brand-name">awards</strong>
              </h2>
            </div>
          </div>

          {/* Row for cards */}
          <div className="row gx-2 gy-3"> {/* Adjusted gx-2 for horizontal spacing and gy-3 for vertical spacing */}
            {
              // Dynamically render Card components based on Sdata array
              Sdata.map((val, ind) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={ind}> {/* Adjusted for better responsiveness */}
                    <Card imgsrc={val.imgsrc} title={val.title} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategic;
