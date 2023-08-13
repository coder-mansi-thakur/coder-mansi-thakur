import Image from "next/image";
import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon, RightArrowWithLeadIcon } from "../Icons";
import {
  Title,
  Wrapper,
  ReadButton,
  CrouselSlide,
  Description,
  ImageConatiner,
} from './crousel.style'


export default function Crousel({ carouselSlidesData }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = (event) => {
    event.preventDefault();
    if (activeIndex === carouselSlidesData.length - 1) {
      setActiveIndex(0);
      return
    }
    setActiveIndex(activeIndex + 1);
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrevSlide = (event) => {
    event.preventDefault()
    if (activeIndex === 0) {
      setActiveIndex(carouselSlidesData.length - 1)
      return
    }
    setActiveIndex(activeIndex - 1);
  }

  return (
    <Wrapper>
      <div className="carousel">
        <div>
          <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={e => goToPrevSlide(e)}
          >
            <Image src={LeftArrowIcon} alt="prev" />
          </a>
        </div>

        <div>
          <ul className="carousel__slides">
            {carouselSlidesData.map((slide, index) =>
              <li
                className={
                  index == activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
                }
                key={index}
              >
                <CrouselSlide>
                  <ImageConatiner>
                    <Image src={slide.image || LeftArrowIcon} alt="" />
                  </ImageConatiner>

                  <div>
                    <Title>{slide.title}</Title>
                    <Description>{slide.description}</Description>
                    <ReadButton>
                      <div>
                      Read
                      </div>
                      <div>
                      <Image src={RightArrowWithLeadIcon} alt="read"/>
                      </div>
                    </ReadButton>
                  </div>
                </CrouselSlide>
              </li>
            )}
          </ul>

          <div>
            <ul className="carousel__indicators">
              {carouselSlidesData.map((slide, index) =>
                <li key={index}>
                  <a
                    className={
                      index == activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                    }
                    onClick={e => goToSlide(index)}
                  />
                </li>
              )}
            </ul>
          </div>

        </div>

        <div>

          <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={e => goToNextSlide(e)}
          >
            <Image src={RightArrowIcon} alt="next" />
          </a>
        </div>

      </div>
    </Wrapper>
  )

}