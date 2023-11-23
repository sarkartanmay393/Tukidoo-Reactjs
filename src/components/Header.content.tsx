import { BackIcon, UserIcon } from "../assets/icons";
import TeleIcon from '../assets/tele.svg';

export const ContentHeader = () => {
  return (
    <header className="w-[100%] flex justify-between">
      <div className="flex items-center gap-3">
        <button className="h-[42px] w-[42px] grid justify-center items-center rounded-[12px] bg-gray-200">
          <BackIcon />
        </button>
        <h2 className="text-xl lg:text-3xl font-bold">Basic Mathematics 1</h2>
      </div>
      <div className="hidden sm:flex flex items-center">
        <button className="bg-transparent flex items-center justify-center gap-2 font-bold">
          <div className="bg-teal-700 text-white p-3 rounded-[50px]">
            <img alt="" src={TeleIcon} />
          </div>
          <p className="hidden md:inline-block">Call Teacher</p>
        </button>
        <button className="bg-transparent flex items-center justify-center gap-2 font-bold">
          <div className="bg-orange-500 text-white p-3 rounded-[50px]">
            <UserIcon />
          </div>
          <p className="hidden md:inline-block">Support</p>
        </button>
      </div>
    </header>
  );
}