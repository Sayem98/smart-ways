import React,{useState} from 'react'
import Logo from '../assets/Logo.png'
import Video from '../assets/SMRTWAYS_Intro_Presale.gif'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying); // Toggle video playback state
  };
  return (
    <div className='w-full max-w-[1230px] mx-auto text-center'>
      <div className='flex lg:flex-row flex-col justify-between items-start gap-4'>
        <div className='w-full lg:w-1/2 p-2'>
          <div className='mt-10 w-full h-48 sm:h-64 flex justify-center items-center'>
            <img src={Video} className='my-10'/>
          </div>
          <button
        className='my-4 mt-16 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12'
        onClick={handleVideoToggle}
      >
        {isVideoPlaying ? 'Pause Video' : 'Watch Video'}
      </button>
          <p className='text-xl sm:text-2xl font-semibold'>Tired of Sepculative Nature of Cryptocurrency?</p>
          <p className='text-base sm:text-lg py-2'>Invest in $SMRT token that has real use case!</p>
          <div className='flex flex-wrap gap-3 justify-center'>
            <a href='#aaa' className='my-4 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12'>Join Presale</a>
            <a href='#faq' className='my-4 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12'>How to Buy</a>
          </div>
        </div>
        <div className='w-full lg:w-[40%] p-2 rounded-lg bg-blue-500 bg-opacity-50 border border-blue-700 shadow-2xl'>
          <div >
            <div className="rounded-xl flex text-center justify-between items-center px-8 my-3 gap-2 w-full h-16 bg-blue-700">
              <div className="countdown-timer flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span>00</span>
                  <span>DAY</span>
                </div>
                <div className="flex flex-col">
                  <span>00</span>
                  <span>HRS</span>
                </div>
                <div className="flex flex-col">
                  <span>00</span>
                  <span>MINS</span>
                </div>
                <div className="flex flex-col">
                  <span>00</span>
                  <span>SEC</span>
                </div>
              </div>
            </div>
            <p className="text-center py-2 font-bold ">
              BUY NOW BEFORE PRICE INCREASE!
            </p>
            <p className="text-center text-[#cfcaca] font-medium py-2">
              USDT RAISED = $28695.48 / $250 ,000
            </p>

            <p className="relative text-center mt-2 lines-lr">
              {/* My Referral Link */}
            </p>
            <p className="relative text-center mt-2 lines-lr">
              Presale Stage #
            </p>
            <p className="relative text-center mt-2 lines-lr">
              1 $SMRT = $0.20
            </p>
            <p className="relative text-center mt-2 lines-lr">
              YOUR PURCHASED $SMRT = 0
            </p>
            <div className="flex justify-center gap-8 mt-4">
              <button className='flex items-center gap-2 border w-[33%] justify-center rounded-xl h-[50px]'>
                <img
                  src={Logo}
                  alt="ETH"
                  className="h-6 w-6"
                />
                <p className="">BNB</p>
              </button>
              <button className='flex items-center gap-2 border w-[33%] justify-center rounded-xl h-[50px]'>
                <img
                  src={Logo}
                  alt="ETH"
                  className="h-6 w-6"
                />
                <p className="">USDT</p>
              </button>
            </div>
            {/* Data Show */}
            <div className="w-full flex sm:flex-row flex-col items-center gap-4 pt-4 pb-8">
              <div className="flex-1 flex flex-col gap-2 items-start">
                <div className="flex items-center justify-between w-full">
                  <h3>Pay with USDT </h3>
                </div>
                <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                  <input
                    type="text"
                    placeholder="0"
                    className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                  />
                  <img
                    src={Logo}
                    alt="logo"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-start">
                <h3>$SMRT Value</h3>
                <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                  <input
                    type="text"
                    placeholder="0"
                    className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                  />
                  <img src={Logo} alt="logo" className="h-8 w-8" />
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-500 h-[50px] rounded-3xl mb-4">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero