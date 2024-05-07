/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/Project-Intro";
import NextProject from "../../../components/Next-Project";
import ProjectVideo from "../../../components/Project-Video";
import initIsotope from "../../../common/initIsotope";
const ProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const BASE_PATH = "/assets/img/moca/chalet-ramona/";
  return (
    <MainLayout>
      <PageHeader title="Chalet Ramona" image="/assets/img/moca/01.jpg" />
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            
            {Array.from({ length: 13 }).map((_, index) => (
              <div className="col-lg-6 items theaters" key={index}>
                <div className="item">
                  <div className="img">
                    <img src={`${BASE_PATH}${index + 1}.jpg`} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextProject />
    </MainLayout>
  );
};

export default ProjectDetails;
