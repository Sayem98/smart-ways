import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsSmrt from '../components/WhatIsSmrt';
import SmrtTokenUtility from '../components/SmrtTokenUtility';
import KeyAdvantages from '../components/KeyAdvantage';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';

const MainPage = () => {
  return (
    <>
      <div className='section1'>
        <Navbar />
        <Hero />
        <WhatIsSmrt />
      </div>
      <div className='section1'>
        <SmrtTokenUtility />
        <KeyAdvantages />
        <Roadmap />
      </div>
      <div className='section1'>
        <Faq />
      </div>
    </>
  )
}

export default MainPage;