import React, { useState } from "react";
import exe from '../src/images/exe.jpeg'; // Image path
import brains from '../src/images/brains.png';

const Execution = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      {/* First Section */}
      <section id="header" className="d-flex align-items-center" style={{ marginTop: "80px", paddingBottom: "50px", minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              {/* First Row */}
              <div className="row">
                {/* Image Column for Smaller Devices */}
                <div className="col-12 d-flex justify-content-center align-items-center mb-4 d-md-none">
                  <img src={exe} className="img-fluid animated" alt="Execution process" />
                </div>
                
                {/* Text Column */}
                <div className="col-12 col-md-6 d-flex justify-content-center flex-column pt-5">
                  <h1 style={{ color: "white" }}>
                    <b>OUR EXECUTION</b> <strong style={{ color: "#00BFFF" }}>PROCESS</strong>
                  </h1>
                  <h2 className="my-3" style={{ color: "white" }}>Crafting Success Through Structured Execution.</h2>
                  <div className="mt-3" >
                    <h2  style={{ color: "white" }}> 
                      This structured onboarding process aligns marketing strategies with the client's unique goals while fostering a collaborative partnership.
                      <br /><br />
                      By ensuring optimal use of the client's resources, it maximizes impact. Additionally, tailoring each step to the client's specific needs enhances the onboarding process's overall effectiveness.
                    </h2>
                  </div>
                </div>

                {/* Image Column for Larger Devices */}
                <div className="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center">
                  <img src={exe} className="img-fluid animated" alt="Execution process" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section id="focus-areas" className="d-flex align-items-center" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              <div className="brain-diagram">
                <div className="container">
                  <div className="row mt-5 mb-4">
                    <div className="col-10 mx-auto text-center">
                      <h1><strong style={{ color: "#00BFFF" }}>WHY WORK WITH US?</strong></h1>
                      <h2 className="my-3">
                        <b style={{ color: "white" }}>Providing Clarity, Structure, and Consistency for your Marketing</b>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Key Focus Areas Content */}
                {isContentVisible && (
                  <>
                    <h2><strong style={{ color: "#00BFFF" }}>Key Focus Areas</strong></h2>
                    <div className="brain-container row flex-wrap justify-content-center">
                      {/* Left Side Content */}
                      <div className="col-12 col-md-5 mb-4">
                        <ul className="list-unstyled">
                          <li>
                            <b style={{ color: "#00BFFF" }}>Strategy:</b>
                            <p style={{ color: "white" }}>Aligning marketing efforts with business goals for a cohesive online presence.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Data-Driven:</b>
                            <p style={{ color: "white" }}>Insights from robust analytics drive strategy.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Experience:</b>
                            <p style={{ color: "white" }}>15+ years of successful campaigns and 100+ clients.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Bespoke:</b>
                            <p style={{ color: "white" }}>Tailored solutions that cater to each client's unique needs.</p>
                          </li>
                        </ul>
                      </div>

                      {/* Image */}
                      <div className="col-12 col-md-2 d-flex justify-content-center align-items-center my-3">
                        <img src={brains} alt="Brain diagram" className="img-fluid" />
                      </div>

                      {/* Right Side Content */}
                      <div className="col-12 col-md-5 mb-4">
                        <ul className="list-unstyled">
                          <li>
                            <b style={{ color: "#00BFFF" }}>ROI Focus:</b>
                            <p style={{ color: "white" }}>Every action maximizes ROI for clients.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Support:</b>
                            <p style={{ color: "white" }}>Outstanding customer service sets us apart.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Transparency:</b>
                            <p style={{ color: "white" }}>Detailed insights for informed decision-making.</p>
                          </li>
                          <li>
                            <b style={{ color: "#00BFFF" }}>Adaptability:</b>
                            <p style={{ color: "white" }}>Quick responses to market changes and trends.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Button for Medium and Smaller Devices */}
                <button 
                  className="btn btn-primary my-3" 
                  onClick={toggleContent}
                >
                  {isContentVisible ? 'Hide Key Focus Areas' : 'Show Key Focus Areas'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Styles */}
      <style jsx>{`
        .brain-diagram {
          margin-top: 50px;
        }

        .brain-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        }

        .brain img {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .brain-container {
            flex-direction: column;
            margin-top: 20px;
          }

          .brain img {
            margin: 20px 0;
          }

          .pt-5 {
            padding-top: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Execution;
