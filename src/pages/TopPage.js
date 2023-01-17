import React from "react";
import MainVisual from "../components/main/MainVisual";
import New from "../components/main/New";
import Recommend from "../components/main/Recommend";
import Trend from "../components/main/Trend";
import LayOutSub from "./LayOutSub";

const TopPage = () => {
  return (
    <>
      <MainVisual />
      <LayOutSub>
        <Trend />
        <New />
        <Recommend />
      </LayOutSub>
    </>
  );
};

export default TopPage;
