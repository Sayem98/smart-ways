import React from 'react'
import Logo from '../assets/Logo.png'
import Image1 from '../assets/Ecosystem.png'
import Image2 from '../assets/Engagement.png'
import Image3 from '../assets/Investment.png'
import Image4 from '../assets/R&D.png'
const SmrtTokenUtility = () => {
  return (
    <div className='w-full max-w-[1230px] mx-auto text-center py-16 px-4' id="aaa">
      <h1 className='text-3xl font-bold mb-14 text-[#48e463]'>$SMRT Token Utility</h1>
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full  text-left lg:gap-2 gap-6'>
        <div className='flex flex-col gap-2'>
          <img src={Image1} alt='logo' className='w-24 h-24' />
          <h2 className='text-xl md:text-2xl font-semibold'>Ecosystem Token</h2>
          <p className='text-base md:text-lg'>
            Can be used to buy reliable Renewable Energy products and services at very competitive prices globally
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src={Image4} alt='logo' className='w-24 h-24' />
          <h2 className='text-xl md:text-2xl font-semibold'>Research & Development</h2>
          <p className='text-base md:text-lg'>
            Support R&D initiative to explore new technologies and define new future proof Renewable Energy solutions
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src={Image3} alt='logo' className='w-24 h-24' />
          <h2 className='text-xl md:text-2xl font-semibold'>Investment Pools</h2>
          <p className='text-base md:text-lg'>
          Token holders will be encouraged to invest in Renewable Energy projects with high Return on Investment 
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src={Image2} alt='logo' className='w-24 h-24' />
          <h2 className='text-xl md:text-2xl font-semibold'>Engagement Rewards</h2>
          <p className='text-base md:text-lg'>
          Tokens are used to reward token holders’ participation in R&D activities (Surveys, etc)
          </p>
        </div>
      </div>
    </div>
  )
}

export default SmrtTokenUtility