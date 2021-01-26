import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
function Slider() {
  const sliderImages = useSelector(
    (state) => state.CartItemReducer.sliderImages
  );
  return (
    <div>
      <Carousel classes={{ carousel: "carousel" }} autoPlay>
        {sliderImages &&
          sliderImages.map((images) => {
            return (
              <>
                <div>
                  <img className="carousel-img" alt="" src={images.img} />
                </div>
              </>
            );
          })}
      </Carousel>
    </div>
  );
}

export default Slider;
