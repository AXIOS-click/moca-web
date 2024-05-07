import React from "react";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image }) => {
  const router = useRouter();
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/JerseyCity2.jpg" : image})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
