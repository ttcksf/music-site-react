import React from "react";
import { recommendItems } from "../../assets/data/Data";
import Title from "../common/Title";
import CardSmall from "../common/CardSmall";

const Recommend = () => {
  return (
    <div>
      <section className="trend mainVisual mt-7 pb-72">
        <Title title="おすすめ" />
        <div className="grid grid-cols-2 gap-5">
          {recommendItems.map((item, i) => (
            <CardSmall
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

export default Recommend;
