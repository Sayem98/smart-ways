import React from 'react';
import Logo from '../assets/Logo.png';

const WhatIsSmrt = () => {
  return (
    <div className='w-full max-w-[1230px] mx-auto text-center flex items-center justify-center flex-col gap-6 pt-16 px-4'>
      <img src={Logo} alt='Logo' className='w-32 h-32 md:w-48 md:h-48' />
      <h1 className='text-3xl md:text-4xl font-semibold text-[#48e463]'>What is $SMRT Token</h1>
      <p className='text-base md:text-lg w-full md:max-w-[750px]'>
        $SMRT is a token with real use case and has constant price pump with multiple
        rewards mechanism. The token is launched to promote, design, and deploy smart
        ecosystem to support global initiatives against global warming
      </p>
      <div className='flex flex-col md:flex-row items-center w-full md:max-w-[750px] gap-5 mt-5'>
        <div className='flex-1 md:border-r  px-2'>
          Smart Ecosystem with
          multiple use cases including
          investment opportunities in
          Renewable Energy projects
        </div>
        <div className='h-1 rounded-lg w-full bg-white md:hidden'></div>
        <div className='flex-1 px-2'>
        AI powered
Application to
support
Research and
Development of
Renewable
Energy
solutions

        </div>
        <div className='h-1 rounded-lg w-full bg-white md:hidden'></div>
        <div className='flex-1 md:border-l px-2'>
        Renewable
energy market
is massive
(around $1085
Billion) and
continues to
rise. 
        </div>
      </div>
    </div>
  )
}

export default WhatIsSmrt;
