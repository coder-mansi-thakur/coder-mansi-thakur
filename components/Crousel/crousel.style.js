import styled from 'styled-components'

export const Wrapper = styled.div`
// SASS variable for media query breakpoint

// Resetting default styles

    margin-top: 100px;
    display: flex;
    justify-content: center;
    padding: 0px 100px;

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.carousel {
  display: flex;
  
}

// Carousel slides
.carousel__slide {
  margin-right: auto;
  margin-left: auto;
  display: none;
  max-width: 900px;
  list-style-type: none;
  text-align: center;
  width: 500px;

  @media (max-width: 991px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  &--active {
    display: block;
  }
}

// Content of slides
.carousel-slide__content {
  margin-bottom: 19px;
  font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
  font-size: 16px;

  @media (max-width: 991px) {
    font-size: 18px;
  }
}

.carousel-slide__author,
.carousel-slide__source {
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;

  @media (min-width: 992px) {
    font-size: 16px;
  }
}

.carousel-slide__source {
  font-style: italic;
  color: #888;
}

// Carousel arrows
.carousel__arrow {
  display: block;
  color: #111;
  cursor: pointer;
  opacity: .75;
  transform: translateY(-50%);
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: .5;
  }

  &--left {
    margin-right: 50px;
  }

  &--right {
    margin-left: 50px;
  }
}

// Carousel indicators
.carousel__indicators {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  li {
    &:nth-of-type(n + 2) {
      margin-left: 9px;
    }
  }
}

.carousel__indicator {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #111;
  cursor: pointer;
  opacity: .15;
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:hover {
    opacity: .5;
  }

  &--active {
    &,
    &:hover {
      opacity: .75;
    }
  }
}
`

export const ReadButton = styled.div`
    background-color: #f9660b;
    padding: 12px;
    color: #FFFFFF;
    border-radius: 12px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

export const CrouselSlide = styled.div`
      display: flex;
      justify-content: space-between;
      text-align: start;
`

export const Description = styled.div`
      color: #b3b1ad;
      font-size: 12px;
      margin: 20px 0px;
      text-align: justify;

`

export const Title = styled.div`
    font-weight: bold;
    font-size: 28px;

`

export const ImageConatiner = styled.div`
    width: 320px;
    height: 200px;
`