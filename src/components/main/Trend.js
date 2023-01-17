import React from "react";
import { treadItems } from "../../assets/data/Data";
import CardLarge from "../common/CardLarge";
import Title from "../common/Title";
import Slider from "react-slick";

const Trend = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="trend mainVisual">
        <Title title="トレンド" />
        <Slider {...settings}>
          {treadItems.map((item, i) => (
            <CardLarge
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              key={i}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Trend;
