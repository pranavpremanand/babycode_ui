import ProfileIcon from "../assets/Frame 48096367.png";
import Speaking from "../assets/Frame 427318922.png";
import Listening from "../assets/Frame 427318923.png";
import Reading from "../assets/Frame 427319153.png";
import Writing from "../assets/Frame 48097381.png";
import Vocalbulary from "../assets/Frame 427319150.png";
import Classes from "../assets/Frame 427319151.png";
import BookIelts from "../assets/Frame 427319154.png";
import StudentNews from "../assets/Frame 427319114.png";
import YTubeIcon from "../assets/youtube (8) 1.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import CheckList from "../assets/checklist_2936769 1.png";
import ArrowIcon from "../assets/ArrowCircleRight.png";
import WAIcon from "../assets/whatsapp (9) 1.png";
import BuyNowSection from "./BuyNowSection";
import ShareApp from "./ShareApp";

const gridItems = [
  {
    icon: Speaking,
    title: "Speaking",
  },
  {
    icon: Listening,
    title: "Listening",
  },
  {
    icon: Reading,
    title: "Reading",
  },
  {
    icon: Writing,
    title: "Writing",
  },
  {
    icon: Vocalbulary,
    title: "Vocalbulary",
  },
  {
    icon: Classes,
    title: "Classes",
  },
  {
    icon: BookIelts,
    title: "Book IELTS Exam",
  },
  {
    icon: StudentNews,
    title: "Student News",
  },
];

const data = {
  labels: [
    "11 Feb",
    "12 Feb",
    "13 Feb",
    "14 Feb",
    "15 Feb",
    "16 Feb",
    "17 Feb",
    "18 Feb",
  ].reverse(),
  datasets: [
    {
      label: "",
      data: [90, 50, 45, 40, 30, 20, 10, 0],
      //   backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#1158DA",
      //   pointRadius: 5,
      //   pointHoverRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  aspectRatio: 6 / 3,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: false,
    },
  },
};
Chart.register(CategoryScale);
const Content = () => {
  return (
    <div className="w-full flex flex-col bg-[#F7F7F7]">
      <div className="hidden lg:flex justify-end py-2 w-full px-6 md:px-14 bg-white">
        <img
          src={ProfileIcon}
          alt=""
          className="w-8 h-8 object-contain cursor-pointer"
        />
      </div>
      <div className="lg:hidden py-4 px-6 md:px-14">
        <div className="bg-gradient-to-r from-[#8ea7d6] to-[#ffdc19] rounded-xl p-[1px] shadow-md">
          <div className="bg-white p-3 rounded-xl flex gap-3 items-center justify-between">
            <span className="text-md font-medium">
              How many students we helped?
            </span>
            <button className="bg-[#FFEFE1] text-[#F49043] py-2 px-4 rounded-xl">
              Check
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-14 py-6">
        <div className="lg:my-5 gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">Your Progress Summary</h3>
            <div className="flex justify-between gap-3 h-max">
              <div className="w-full md:w-[60%] mb-4 md:mb-0 bg-white shadow-lg md:shadow-none rounded-xl p-4">
                <div className="bg-[#FEF9E5] p-2 rounded-lg mb-4">
                  <span className="text-sky-500">Wow! </span>
                  <span>You{"'"}re about to reach your targeted band</span>
                </div>
                <Line datasetIdKey="id" data={data} options={options} />
              </div>
              <div className="hidden md:block w-[38%] flex-1">
                <ShareApp />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-6 w-full">
          <h3 className="hidden md:inline-block text-xl font-medium mb-1">
            Prepare with ease
          </h3>
          <div className="w-full flex justify-between items-start">
            <div className="w-full md:w-[68%] grid grid-cols-3 sm:grid-cols-4">
              {gridItems.map(({ icon, title }) => (
                <div
                  className={`flex flex-col gap-2 items-center mx-2 mb-2 md:mb-8
                  ${title === "Book IELTS Exam" && "order-last md:order-2"}
                  `}
                  key={title}
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-full aspect-square max-w-44 object-contain"
                  />
                  <span className="text-md md:text-sm font-medium text-center">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-[27%] md:flex flex-col gap-5 hidden mt-3">
              <button className="w-full flex items-center justify-center gap-2 bg-white shadow-md p-2 rounded-md">
                <img
                  src={YTubeIcon}
                  className="w-5 h-5 object-contain"
                  alt=""
                />
                <span className="text-sm text-gray-600">App Guide Video</span>
              </button>
              <div className="bg-white p-4 rounded-md flex flex-col gap-3 shadow-sm text-center">
                <h2 className="text-md font-medium">Practice Mock Tests</h2>
                <p className="text-sm text-gray-600">
                  Get the authentice IELTS exam experience with all four modules
                  covered!
                </p>
                <button className="bg-[#1158DA] hover:bg-[#1157dac2] transition-colors duration-300 text-white p-2 rounded-full">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between w-full md:hidden bg-white border border-gray-400 p-3 rounded-xl mb-7">
          <div className="flex gap-2 items-start">
            <img src={CheckList} className="w-14 object-contain" alt="" />
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-medium">Practice Mock Test</h4>
              <p className="text-md text-gray-600">
                Get the authentic IELTS exam experience with all four modules
                covered!
              </p>
            </div>
          </div>
          <img src={ArrowIcon} className="h-8 w-8 object-contain" alt="" />
        </div>

        <div className="w-full md:hidden">
          <BuyNowSection />
        </div>

        <div className="columns-2 gap-2 my-5 md:hidden">
          <button className="w-full flex items-center justify-center gap-2 bg-white shadow-md px-2 py-4 rounded-md">
            <img src={YTubeIcon} className="w-5 h-5 object-contain" alt="" />
            <span className="text-sm text-gray-600">App Guide Video</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white shadow-md px-2 py-4 rounded-md">
            <img src={WAIcon} className="w-5 h-5 object-contain" alt="" />
            <span className="text-sm text-gray-600">Help & Support</span>
          </button>
        </div>

        <div className="md:hidden">
          <ShareApp />
        </div>
      </div>
    </div>
  );
};

export default Content;
