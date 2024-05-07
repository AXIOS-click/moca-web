/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const projects = [
    {
      img: "/assets/img/moca/01.jpg",
      title: "Chalet Ramona",
      url: "portfolio/",
    },
    {
      img: "/assets/img/moca/02.jpg",
      title: "JERSEY CITY",
      url: "portfolio/",
    },
    {
      img: "/assets/img/moca/03.jpg",
      title: "Sedgwick Chalet",
      url: "portfolio/",
    },
  ];
  return (
    <section
      className="works filter-img section-padding"
      style={{
        color: "#181818!important",
      }}
    >
      <div className="container">
        <div className="row gallery">
          <div className="col-lg-6 items mt-0 interior theaters residential">
            <div className="section-head mb-0">
              <h3>Works</h3>
            </div>
          </div>
          {projects.map((e, i) => (
            <div className="col-lg-6 items theaters" key={i}>
              <div className="item">
                <div className="img">
                  <img src={e.img} alt="" />
                </div>
                <div className="cont vis">
                  <h5 style={{ color: "#fff" }}>
                    <Link href={e.url}>
                      {e.title}
                    </Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
