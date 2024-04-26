import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect';
import './hero.css';
import Image from 'next/image';
import DP from './dp2.png'
import Socials from './socials';

const words = `Coming Soon...`;

export default function Hero() {
  return (
    <div className='bg-white '>
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <div className='flex justify-center pt-4'>
            <Image src={DP} alt="dp" width={100} height={100} className='rounded-full'></Image>
          </div>
          <TextGenerateEffect className='px-12 pt-5' words={words} />
          <div className='scale-75  flex items-center justify-center'>
            <div className='scale-50'>
              <Socials />
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
