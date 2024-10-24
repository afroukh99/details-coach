import React from 'react';
import Stars from './Stars';
import FeedbackBar from './FedbackBar';

const Feedback = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-medium-300 text-dark-500 font-[700]">Customers Feedback</h1>
      <section className="flex flex-col sm:flex-row gap-3 h-[230px]">
        <div className="flex-[1] bg-bgGray2 flex flex-col gap-2 p-4 sm:p-0 sm:gap-5 items-center justify-center rounded-[8px]">
          <h1 className="text-primary font-[700] text-larger">4.8</h1>
          <Stars starsNumber={5} size={"size-[10px] md:size-[14px]"} />
          <span className="text-small-200 text-txt-500">Product Rating</span>
        </div>
        <div className="flex-[3] flex flex-col justify-between bg-bgGray2 rounded-[8px] p-4 sm:p-6">
          <FeedbackBar percentage={60} label="60%" />
          <FeedbackBar percentage={20} label="20%" />
          <FeedbackBar percentage={10} label="10%" />
          <FeedbackBar percentage={4} label="4%" />
          <FeedbackBar percentage={6} label="6%" />
        </div>
      </section>
    </div>
  );
};



export default Feedback;
