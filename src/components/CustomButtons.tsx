import { IconType } from "react-icons";


interface IButton {
  label?: string;
  Icon?: IconType;
  active?: boolean;
  props?: string;
}
export const Button = ({ label, Icon, props, active = false }: IButton) => {
  return (
    <button className={`w-[100%] h-[100%] flex justify-center items-center rounded-[32px] gap-2 ${props}`}
      style={{
        backgroundColor: active ? "white" : 'transparent',
      }}
      name={label} onClick={() => { }}>
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
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2rem" width="1.9rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"></path></svg>
          <div className="w-3 h-3 bg-red-500 border-gray-200 border-solid border-2 rounded-md absolute top-0 right-0">
          </div>
        </div>
        : < Icon color={!transparent && active ? "white" : "black"} opacity={active ? 0.3 : 1} fontSize='28px' />
      }
    </button >
  );
}