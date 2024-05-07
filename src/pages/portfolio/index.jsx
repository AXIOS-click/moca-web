/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Our Portfolio",
        }}
        content="Browse our designs to see how we merge together art and functionality, giving our clients their dream space."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
