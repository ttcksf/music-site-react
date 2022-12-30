import React from "react";
import MainVisual from "../components/main/MainVisual";
import Trend from "../components/main/Trend";
import LayOutSub from "./LayOutSub";

const TopPage = () => {
  return (
    <>
      <MainVisual />
      <LayOutSub>
        <Trend />
      </LayOutSub>
    </>
  );
};

export default TopPage;
