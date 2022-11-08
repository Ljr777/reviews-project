import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // by default we want to render the element at position 0 in the array of data(reviews)
  const [index, setIndex] = useState(0);
  // get the properties out of every object in the array
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevButtonClick = () => {
    setIndex((index) => {
      let prevIndex = index - 1;
      return checkNumber(prevIndex);
    });
  };
  const nextButtonClick = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return checkNumber(nextIndex);
    });
  };
  const randomButtonClick = () => {
    let randomIndex = Math.floor(Math.random() * people.length) + 1;
    if (randomIndex === index) {
      randomIndex = index - 1;
    }
    // do I need to pass a function into this setIndex???
    setIndex(checkNumber(randomIndex));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevButtonClick}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextButtonClick}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomButtonClick}>
          suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
