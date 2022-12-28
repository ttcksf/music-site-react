import React from "react";
import { mainItems, subItems } from "../../assets/data/Data";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainVisual = () => {
  // https://react-slick.neostack.com/docs/example/custom-arrows

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] left-0 text-white cursor-pointer"
        onClick={onClick}
      >
        <MdKeyboardArrowLeft size={50} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] right-0 z-10 text-white cursor-pointer"
        onClick={onClick}
      >
        <MdKeyboardArrowRight size={50} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // https://react-slick.neostack.com/docs/example/custom-arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="mainVisual mt-16">
        <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
          <div className="w-full h-full md:w-1/2">
            {/* react-slick,slick-carouselをインストールしておく */}
            <Slider {...settings}>
              {mainItems.map((item, i) => (
                <div key={i} className="box relative h-[92vh] sm:mt-16 w-full">
                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="text absolute top-0 left-0 text-white p-5">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <span className="text-white">{item.tag}</span>
                  </div>
                  <div className="overlay icon absolute top-1/2 left-[40%] text-white">
                    <BsPlayCircle size={45} className="show" />
                    <AiFillPlayCircle
                      size={45}
                      className="hide absolute -top-1 -left-1"
                    />
                  </div>
                  <div className="overlay absolute bottom-0 right-0 text-white">
                    <div className="flex p-3">
                      <AiOutlineHeart size={22} className="mx-3" />
                      <BsThreeDots size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full h-full md:w-1/2 grid grid-cols-2 sm:grid-cols-1">
            {subItems.map((item, i) => (
              <div key={i} className="box relative">
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
                <div className="text absolute top-0 left-0 text-white p-5">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-white">{item.tag}</span>
                </div>
                <div className="overlay icon absolute top-1/2 left-[40%] text-white">
                  <BsPlayCircle size={45} className="show" />
                  <AiFillPlayCircle
                    size={45}
                    className="hide absolute -top-1 -left-1"
                  />
                </div>
                <div className="overlay absolute bottom-0 right-0 text-white">
                  <div className="flex p-3">
                    <AiOutlineHeart size={22} className="mx-3" />
                    <BsThreeDots size={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVisual;
