// import { useState } from 'react'
import data from './AccordianData';
import iconPlus from '../public/assets/images/icon-plus.svg';
import iconMinus from '../public/assets/images/icon-minus.svg';
import star from '../public/assets/images/icon-star.svg'
import React, { useRef, useState } from 'react';

const AccordianItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  // store our useRef hook in a variable called contentHeight so it can be passed into the ref attribute of our answer-container element. We do that so we’ll be able to dynamically adjust the height of the container based on the answer content’s scroll height.
  return (
    <div className='wrapper'>
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className='question-content'>{question}</p>
        <img
          src={isOpen ? iconMinus : iconPlus}
          className={`iconPlus ${isOpen ? 'active' : ''}`}
        />
      </button>

      <div
        ref={contentHeight}
        className='answer-container'
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <p className='answer-content'>{answer}</p>
      </div>
    </div>
  );
};

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='container'>
      <header>
        <img src={star}/>
        <h1>FAQs</h1>
      </header>
      {data.map((data, index) => (
        <AccordianItem
          key={index}
          question={data.question}
          answer={data.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordian;
