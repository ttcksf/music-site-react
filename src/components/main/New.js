import React from "react";
import { newItems } from "../../assets/data/Data";
import CardLarge from "../common/CardLarge";
import Title from "../common/Title";

const New = () => {
  return (
    <div>
      <section className="trend mainVisual">
        <Title title="新着" />
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-5">
          {newItems.map((item, i) => (
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

export default New;
