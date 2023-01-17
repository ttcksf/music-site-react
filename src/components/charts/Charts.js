import React from "react";
import CardSmall from "../common/CardSmall";
import { browserItems } from "../../assets/data/Data";

const Charts = () => {
  return (
    <div>
      <section className="trend mainVisual mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-main">チャート</h1>
        <div className="grid grid-cols-1 gap-5">
          {browserItems.map((item, i) => (
            <CardSmall
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              key={i}
              show={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Charts;
