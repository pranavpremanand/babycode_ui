import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home (1).png";
import CommunityIcon from "../assets/Users.png";
import StoriesIcon from "../assets/Frame 48097125.png";
import ShopIcon from "../assets/Storefront.png";
import MsgIcon from "../assets/message-square.png";
import LogoutIcon from "../assets/logouticon.png";
import BuyNowSection from "./BuyNowSection";

const navOptions = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Community",
    icon: CommunityIcon,
  },
  {
    label: "Stories",
    icon: StoriesIcon,
  },
  {
    label: "Shop",
    icon: ShopIcon,
  },
  {
    label: "Feedback",
    icon: MsgIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="w-[20vw] bg-gradient-to-b from-[#1158DA] to-[#002569] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-1 items-center">
          <img src={Logo} alt="" className="h-12 w-12 object-contain my-1" />
          <span className="text-xl text-white">BabyCode</span>
        </div>
        <div className="flex w-full items-center flex-col gap-2 my-6">
          {navOptions.map(({ label, icon }) => (
            <div
              className={`flex w-[80%] gap-2 items-center rounded-md hover:bg-[#3771DD] cursor-pointer p-2 ${
                label === "Home" && "bg-[#3771DD]"
              }`}
              key={label}
            >
              <img src={icon} alt="" className="h-6 w-6 object-contain" />
              <span className="text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <BuyNowSection />
      </div>
      <div className="mb-6 flex w-[80%] gap-2 items-center rounded-md hover:bg-[#3771DD] cursor-pointer p-2">
        <img src={LogoutIcon} alt="" className="h-7 w-7 object-contain" />
        <span className="text-white">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
