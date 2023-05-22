import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const prevPerson = () => {
    if (index === 0) {
      return setIndex(data.length - 1);
    }
    setIndex(index - 1);
  };

  const nextPerson = () => {
    if (index === data.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surpise me
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </article>
    </main>
  );
};
export default App;
