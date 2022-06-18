import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight } from "react-icons/bs";
import { images } from "../../constants";
import "./Partners.scss";
const Partners = () => {
  return (
    <div className="app__section4-partnerSwipper">
      <div className="app__section4-arrows">
        <div>
          <img src={images.section4Arrow1} alt="leftarrow" />
          <img src={images.section4Arrow2} alt="rightarrow" />
        </div>
      </div>
      <div className="app__section4-partners-horizontalSlider">
        <Swiper spaceBetween={50} slidesPerView={2} loop={true}>
          <SwiperSlide>
            <div className="app__section4-partners">
              <div>
                <img src={images.maiar} alt="maiarLogo" />
                <h5>Maiar</h5>
                <p>
                  Maiar is powered by the amazing technology of the Elrond blockchain, and is going
                  to radically change the way we interact with money.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app__section4-partners">
              <div>
                <img src={images.elrond} alt="elrond" />
                <h5>Elrond</h5>
                <p>
                  Elrond Network is a highly scalable, fast and secure blockchain platform for
                  distributed apps, enterprise use cases and the new internet economy.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app__section4-partners">
              <div>
                <img src={images.ratherlabs} alt="ratherlabs" />
                <h5>Rather Labs</h5>
                <p>
                  Rather Labs Network is a highly scalable, fast and secure blockchain platform for
                  distributed apps, enterprise use cases and the new internet economy.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="app__section4-partners-verticalslider">
        <Swiper direction="vertical" slidesPerView={2} spaceBetween={50}>
          <SwiperSlide>
            {" "}
            <div className="app__section4-partners">
              <div>
                <img src={images.maiar} alt="maiarLogo" />
                <h5>Maiar</h5>
                <p>
                  Maiar is powered by the amazing technology of the Elrond blockchain, and is going
                  to radically change the way we interact with money.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="app__section4-partners">
              <div>
                <img src={images.elrond} alt="elrond" />
                <h5>Elrond</h5>
                <p>
                  Elrond Network is a highly scalable, fast and secure blockchain platform for
                  distributed apps, enterprise use cases and the new internet economy.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="app__section4-partners">
              <div>
                <img src={images.ratherlabs} alt="ratherlabs" />
                <h5>Rather Labs</h5>
                <p>
                  Rather Labs Network is a highly scalable, fast and secure blockchain platform for
                  distributed apps, enterprise use cases and the new internet economy.
                </p>
                <a href="/">
                  Learn More <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
