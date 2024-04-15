/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from "next/link";

const AboutUs2 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title">Who We Are</h6>
              <h2 className="mb-20 playfont">ECCENTRIC YET PEACEFUL</h2>
              <p>Moira and Carlos met because of their mutual love for art and design. They have turned their passions for aesthetics into a business, joining forces and each doing what they know best, thus complementing each other's work.</p>
              <p>By not representing a particular era, movement or genre, we can work with many differing architectural styles and hope the specificity of our work will hold relevance to our clients for many years beyond its inception.</p>
              {/* <ul>
                {aboutUs2Data.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul> */}
              {/* <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Read More</span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src={"/assets/img/downloaded/Sedgwick.jpg"} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={"/assets/img/downloaded/Dove.jpg"} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">x</h2>
                      <h6>Years Of Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
