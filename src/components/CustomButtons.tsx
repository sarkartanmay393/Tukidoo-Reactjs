import { IconType } from "react-icons";
import BellIcon from '../assets/bell.svg';

interface IButton {
  label?: string;
  Icon?: IconType;
  active?: boolean;
  props?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: number;
}
export const Button = ({ label, Icon, props, handleClick, value, active = false }: IButton) => {
  return (
    <button value={value && value} className={`w-[100%] h-[100%] flex justify-center items-center rounded-[32px] gap-2 ${props}`}
      style={{
        backgroundColor: active ? "white" : 'transparent',
      }}
      name={label} onClick={handleClick}>
      {Icon && <Icon className='text-[20px] sm:text-[26px]' />}
      <p className={`hidden lg:inline text-lg ${active ? 'font-[600]' : 'font-[500]'}`}>{label}</p>
    </button >
  );
}


interface IXButton {
  label?: string;
  Icon: IconType;
  active?: boolean;
  props?: string;
  transparent?: boolean;
}
export const XButton = ({ label, Icon, props, transparent = false, active = false }: IXButton) => {
  return (
    <button className={`${transparent && 'bg-transparent'} w-[100%] h-[56px] flex justify-center items-center ${props}`} name={label} onClick={() => { }}>
      {label == 'bell' ?
        <div className="relative">
          <img alt="" src={BellIcon} />
          <div className="w-3 h-3 bg-red-500 border-gray-200 border-solid border-2 rounded-md absolute top-0 right-0">
          </div>
        </div>
        : < Icon color={!transparent && active ? "white" : "black"} opacity={active ? 0.3 : 1} fontSize='28px' />
      }
    </button >
  );
}