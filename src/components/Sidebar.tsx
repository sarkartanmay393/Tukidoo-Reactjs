import { IconBase } from 'react-icons';
import { CompanyLogo, MenuButtons, MenuIcon, UserIcon } from '../assets/icons';
import { XButton } from './CustomButtons';

export default function Sidebar() {
  return (
    <aside
      aria-label='sidebar'
      className='hidden sm:flex w-[120px] h-[100%] bg-gray-200 flex-col items-center justify-between pb-12'
    >
      <div>
        <div className='flex flex-col items-center justify-center gap-[22px]'>
          <img className='h-auto w-[64px]' alt='logo' src={CompanyLogo} />
          <button className='bg-transparent w-[100%] h-[56px] flex justify-center items-center font-[2rem]'>
            <IconBase fontSize='38px'>
              <MenuIcon />
            </IconBase>
          </button>
        </div>

        <div className='p-2 w-[100%] grid gap-4 mt-2'>
          {MenuButtons.map((d, i) => (
            <XButton transparent key={i} label={d.label} Icon={d.icon} active={i != 0 && true} />
          ))}
        </div>
      </div>

      <div className=''>
        <button className='w-fit bg-transparent flex justify-center items-center focus:border-0 hover:border-0 select:border-0'>
          <img className='w-[56px]' alt="" src="https://cdn-icons-png.flaticon.com/512/147/147132.png" />
        </button>
      </div>

    </aside>
  );
}
