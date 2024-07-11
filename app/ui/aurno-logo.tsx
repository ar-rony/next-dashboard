import {GlobeAltIcon} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const AurnoLogo = () => {
  return (
    <div className={`${lusitana.className} flex items-center text-white gap-2 leading-none`}>
        <GlobeAltIcon className='h-12 w-12 rotate-[15deg]' />
        <p className='text-[44px] uppercase'>Aurno</p>
        </div>
  )
}

export default AurnoLogo