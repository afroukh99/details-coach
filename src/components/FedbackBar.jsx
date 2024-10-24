import Stars from "./Stars";

const FeedbackBar = ({ percentage, label }) => {
    return (
      <div className="flex items-center justify-between gap-6">
        <div className="relative w-[70%] sm:w-[80%] h-[5px] sm:h-2 bg-bgGray3 rounded">
          <div
            className="absolute top-0 left-0 h-full bg-[#20590C] rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <Stars starsNumber={5} size={'size-[8px] sm:size-[10px]'} />
        <span className="text-primary text-small-300 ">{label}</span>
      </div>
    );
  };
  
export default FeedbackBar;