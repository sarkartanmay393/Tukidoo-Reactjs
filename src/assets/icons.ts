import { GoBell } from "react-icons/go";
import { CgStopwatch } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";

import { FaChalkboard } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

import Logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { FiMic } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { IoChevronBack } from "react-icons/io5";

import { PiVideoCameraBold } from "react-icons/pi";
import { FaRegShareFromSquare } from "react-icons/fa6";

export const CompanyLogo = Logo;
export const MenuIcon = CgMenuLeft;
export const UserIcon = FaUser;
export const BackIcon = IoChevronBack;

export const ContentInnerIcons = [
  {
    label: "Cam",
    icon: PiVideoCameraBold,
  },
  {
    label: "Mic",
    icon: FiMic,
  },
  {
    label: "Share",
    icon: FaRegShareFromSquare,
  },
  {
    label: "Chat",
    icon: IoChatbubblesOutline,
  },
  {
    label: "Leave",
    icon: RxExit,
  },
];

export const ContentBodyIcon = [
  {
    label: "Classroom",
    icon: SiGoogleclassroom,
  },
  {
    label: "Whiteboard",
    icon: FaChalkboard,
  },
  {
    label: "Videos",
    icon: MdOndemandVideo,
  },
  {
    label: "Slide Show",
    icon: RiSlideshowLine,
  },
  {
    label: "Documents",
    icon: IoDocumentTextOutline,
  },
  {
    label: "Doc.Cam",
    icon: HiMiniClipboardDocumentList,
  },
];

export const MenuButtons = [
  {
    label: "bell",
    icon: GoBell,
  },
  {
    label: "",
    icon: CgStopwatch,
  },
  {
    label: "",
    icon: BiTask,
  },
  {
    label: "",
    icon: FaRegEye,
  },
  {
    label: "",
    icon: BsPeopleFill,
  },
  {
    label: "",
    icon: IoStatsChart,
  },
];
