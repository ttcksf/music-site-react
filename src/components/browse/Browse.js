import React from "react";
import { browserItems } from "../../assets/data/Data";
import CardLarge from "../common/CardLarge";

const Browse = () => {
  return (
    <div>
      <section className="trend mainVisual mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-main">レコメンド</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-5">
          {browserItems.map((item, i) => (
            <CardLarge
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
