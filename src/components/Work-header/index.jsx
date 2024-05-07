import React from "react";

const WorkHeader = ({ title, content, center }) => {
  return (
    <header
      className="work-header bg-img valign"
      style={{
        backgroundImage: "url(/assets/img/patern.png)",
        color: "#181818!important",
      }}
    >
      <div
        className="container"
        style={{
          color: "#181818!important",
        }}
      >
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`} style={{
                  color: "#181818",
                }}>
              <h2
                style={{
                  color: "#181818",
                }}
              >
                {typeof title == "object" ? (
                  <>
                    {title.first} <br />
                  </>
                ) : (
                  title
                )}
              </h2>

              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
