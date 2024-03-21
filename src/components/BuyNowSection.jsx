import TickIcon from "../assets/tickmark.png";
import ArrowIcon from "../assets/ArrowCircleRight (1).png";

const content = [
  "Unlimited Speaking Test Access",
  "Unlimited Writing Test Access",
  "Analyze Your Answer",
  "Check Band Score",
];

const BuyNowSection = () => {
  return (
    <div className="bg-[#E5EFFF] m-3 rounded-xl">
      <div className="px-4 pt-4">
        <h2 className="text-transparent font-semibold text-lg bg-clip-text bg-gradient-to-r from-[#3561e4] to-[#7A7FFA]">
          Explore premium features with ease!
          {/* #717171 */}
        </h2>
        <div className="flex flex-col gap-2 mt-3">
          {content.map((content) => (
            <div
              className="flex gap-2 items-center text-[.75rem] text-[#717171]"
              key={content}
            >
              <img
                src={TickIcon}
                className="w-[.9rem] h-[.9rem] object-contain"
                alt=""
              />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4 pb-4 items-center w-full">
        <span className="text-[.75rem] ml-4">Only @ ₹ 299</span>
        <button className="text-white bg-[#1158DA] flex py-2 px-3 text-sm gap-2 rounded-s-full">
          Buy Now <img src={ArrowIcon} className="w-5 h-5" alt="" />
        </button>
      </div>
    </div>
  );
};

export default BuyNowSection;
