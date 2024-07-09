import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import React from 'react'

const AurnoLogo = () => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center'>
      <GlobeAltIcon />
      <span className="font-bold text-2xl uppercase">Aurno</span>
    </div>
  )
}

export default AurnoLogo