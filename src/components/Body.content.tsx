import { Button, XButton } from "./CustomButtons";
import { ContentBodyIcon, ContentInnerIcons } from "../assets/icons";
import { useState } from "react";

export const ContentBody = () => {
  return (
    <div className="h-[100%] w-[100%] flex flex-col border-0 border-solid gap-4 lg:gap-6">
      <ContentRouterHeader />
      {/* Videos Route */}
      <div className="h-[calc(100%-60px)] w-[100%] flex flex-col-reverse lg:flex-row gap-4 lg:gap-2">
        <ContentController />
        <ContentPlayer />
      </div>
    </div>

  );
}

const ContentRouterHeader = () => {
  const [activeIdx, setActiveIdx] = useState(2);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setActiveIdx(Number(e.currentTarget.value));
  }

  return (
    <div aria-label="options-router"
      className="w-[100%] h-[60px] flex items-center justify-center bg-gray-200 rounded-[32px] p-1 lg:gap-2">
      {ContentBodyIcon.map((d, i) => (
        <Button value={i} handleClick={handleClick} key={i} label={d.label} Icon={d.icon} active={i == activeIdx && true} />
      ))}
      <Button props="hidden lg:flex" key={"s23"} label={''} active={false} />
    </div>
  );
}

const ContentController = () => (
  <div aria-label="controller" className="w-[100%] lg:w-[20%] h-[50%] lg:h-[100%] flex flex-col items-center gap-6">
    <div aria-label="camera" className="flex flex-row lg:flex-col gap-4">
      <div className="relative w-fit rounded-[32px] overflow-hidden">
        <img
          className="w-[220px] h-[150px]"
          src="https://media.istockphoto.com/id/585081766/photo/african-descent-teenage-girl-studying-reading-book-at-home.jpg?s=1024x1024&w=is&k=20&c=tS9WnW-uLEJRUhtCU9R_RWW5jDA5xCRmQyZNgffmRVs="
        />
        <p className="rounded-tr-[32px] font-bold absolute bg-gray-300 w-fit bottom-0 px-6 py-1">Ridha</p>
      </div>
      <div className="relative w-fit rounded-[32px] overflow-hidden">
        <img
          className="w-[220px] h-[150px]"
          src="https://media.istockphoto.com/id/1279156232/photo/father-with-daughter-compose-a-song-in-home-music-studio.jpg?s=1024x1024&w=is&k=20&c=4ZSYeQsOKmrNBhAFKvNVaQUnsqeZByrks0ObcaGkqqo="
        />
        <p className="rounded-tr-[32px] font-bold absolute bg-gray-300 w-fit bottom-0 px-6 py-1">Ms. Kaur</p>
      </div>
    </div>
    <div aria-label="actions" className="grid grid-cols-5 lg:grid-cols-3 gap-4">
      {ContentInnerIcons.map((d, i) => {
        const bg = i == 4 ? 'bg-[rgba(57,130,159)]' : 'bg-gray-100';
        return (
          <div key={i} className="w-[100%] flex flex-col justify-center items-center">
            <XButton props={`w-[58px] ${bg} rounded-[18px]`} label={""} Icon={d.icon} active={i == 4 ? true : false} />
            <p className="mt-1 font-bold text-sm">{d.label}</p>
          </div>
        );
      })}
    </div>
  </div>
)

const ContentPlayer = () => (
  <div aria-label="player" className="w-[100%] lg:w-[80%] h-[50%] lg:h-[100%]">
    <iframe
      className="w-[100%] h-[100%] rounded-[30px] p-0"
      src="https://www.youtube.com/embed/094y1Z2wpJg?si=_RGxk2BQZko6q0_h"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    >
    </iframe>
  </div>
)