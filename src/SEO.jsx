import React from 'react';
import seo from "./images/seo.jpeg";

export default function SEO() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        
        {/* Content Div - Keep text on the left for all screens */}
        <div className="md:w-1/2 w-full md:mt-32 mt-12">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              <strong style={{color: "white"}}>SEO</strong>
              <strong className="text-pink-500"> SOLUTION</strong>
            </h1>
            <p className="text-xl" style={{color: "white"}}>
              Elevate your brand’s visibility with tailored, results-driven <strong style={{color: "pink"}}>SEO strategies</strong>.
            </p>

            {/* Add the new content below */}
            <div className="space-y-4 text-xl" style={{color: "white"}}>
              <p><strong>Transforming SEO with Unique Strategies and Real-Time Insights</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>✔ Holistic SEO Strategy Development</li>
                <li>✔ Content-Driven SEO Excellence</li>
                <li>✔ Focus on Long-Term Sustainability</li>
                <li>✔ Proactive Adaptation to Algorithm Changes</li>
                <li>✔ Innovative Technology Adoption</li>
                <li>✔ Insightful Reporting</li>
                <li>✔ Trend Analysis and Forecasting</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Image Div - Keep image on the right side for all screens */}
        <div className="md:w-1/2 w-full md:mt-32 mt-12">
          <img src={seo} className="w-full h-auto" alt="SEO Solutions" />
        </div>

      </div>
    </>
  );
}
