import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Video from "../assets/SMRTWAYS_Intro_Presale.gif";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import useContracts from "../hooks/useContracts";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // timer stages
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [data, setData] = useState(null);
  const [stageNo, setStageNo] = useState(1);
  const [paymentType, setPaymentType] = useState("BNB");
  const [payAmount, setPayAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [balance, setBalance] = useState(0);

  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { stage, getPresaleData, buyTokens, myTokenBalance } = useContracts();

  useEffect(() => {
    const _getStaticData = async () => {
      const _stage = Number(await stage());
      setStageNo(_stage);

      const data = await getPresaleData(_stage);
      setData(data);
    };

    _getStaticData();
  }, [isConnected]);

  useEffect(() => {
    if (paymentType === "USDT") {
      setReceivedAmount(payAmount / data?.usdtRate);
    } else if (paymentType === "BNB") {
      setReceivedAmount(payAmount / data?.nativeRate);
    }
  }, [paymentType, payAmount]);

  useEffect(() => {
    const _getMyTokenBalance = async () => {
      const balance = await myTokenBalance();
      console.log("balance", balance);
      setBalance(balance);
    };

    if (isConnected) {
      _getMyTokenBalance();
    }
  }, [address]);

  useEffect(() => {
    // timer
    const countdownDate = new Date("Oct 31, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const _days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const _hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const _seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(_days < 10 ? `0${_days}` : _days);
      setHours(_hours < 10 ? `0${_hours}` : _hours);
      setMinutes(_minutes < 10 ? `0${_minutes}` : _minutes);
      setSeconds(_seconds < 10 ? `0${_seconds}` : _seconds);

      if (distance < 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying); // Toggle video playback state
  };

  const handleBuy = async () => {
    if (payAmount <= 0) return toast.error("Please enter valid amount");
    try {
      setLoading(true);
      await buyTokens(payAmount, paymentType);
      toast.success("Transaction Successful");
      setLoading(false);
    } catch (err) {
      toast.error("Transaction Failed");
      setLoading(false);
      console.log(err);
      window.location.reload();
    }
  };

  return (
    <div className="w-full max-w-[1230px] mx-auto text-center">
      <div className="flex lg:flex-row flex-col justify-between items-start gap-4">
        <div className="w-full lg:w-1/2 p-2">
          <div className="mt-10 w-full h-48 sm:h-64 flex justify-center items-center">
            <img src={Video} className="my-10" />
          </div>
          <button
            className="my-4 mt-16 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12"
            onClick={handleVideoToggle}
          >
            {isVideoPlaying ? "Pause Video" : "Watch Video"}
          </button>
          <p className="text-xl sm:text-2xl font-semibold">
            Tired of Sepculative Nature of Cryptocurrency?
          </p>
          <p className="text-base sm:text-lg py-2">
            Invest in $SMRT token that has real use case!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#aaa"
              className="my-4 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12"
            >
              Join Presale
            </a>
            <a
              href="#faq"
              className="my-4 bg-blue-700 py-2 px-4 rounded-xl text-2xl w-full sm:w-auto sm:px-8 h-12"
            >
              How to Buy
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[40%] p-2 rounded-lg bg-blue-500 bg-opacity-50 border border-blue-700 shadow-2xl">
          <div>
            <div className="rounded-xl flex text-center justify-between items-center px-8 my-3 gap-2 w-full h-16 bg-blue-700">
              <div className="countdown-timer flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span>{days}</span>
                  <span>DAY</span>
                </div>
                <div className="flex flex-col">
                  <span>{hours}</span>
                  <span>HRS</span>
                </div>
                <div className="flex flex-col">
                  <span>{minutes}</span>
                  <span>MINS</span>
                </div>
                <div className="flex flex-col">
                  <span>{seconds}</span>
                  <span>SEC</span>
                </div>
              </div>
            </div>
            <p className="text-center py-2 font-bold ">
              BUY NOW BEFORE PRICE INCREASE!
            </p>
            <p className="text-center text-[#cfcaca] font-medium py-2">
              USDT RAISED = ${data?.usdtRate * data?.totalSoldStage} / $
              {data?.totalInStage * data?.usdtRate}
            </p>

            <p className="relative text-center mt-2 lines-lr">
              {/* My Referral Link */}
            </p>
            <p className="relative text-center mt-2 lines-lr">
              Presale Stage # {stageNo}
            </p>
            <p className="relative text-center mt-2 lines-lr">
              1 $SMRT = ${data ? data.usdtRate : 0}
            </p>
            <p className="relative text-center mt-2 lines-lr">
              YOUR PURCHASED $SMRT = {balance}
            </p>
            <div className="flex justify-center gap-8 mt-4">
              <button
                className={`flex items-center gap-2 border w-[33%] justify-center rounded-xl h-[50px] ${
                  paymentType === "BNB" && "bg-blue-800"
                }`}
                onClick={() => setPaymentType("BNB")}
              >
                <img src={Logo} alt="ETH" className="h-6 w-6" />
                <p className="">BNB</p>
              </button>
              <button
                className={`flex items-center gap-2 border w-[33%] justify-center rounded-xl h-[50px] ${
                  paymentType === "USDT" && "bg-blue-800"
                }`}
                onClick={() => setPaymentType("USDT")}
              >
                <img src={Logo} alt="ETH" className="h-6 w-6" />
                <p className="">USDT</p>
              </button>
            </div>
            {/* Data Show */}
            <div className="w-full flex sm:flex-row flex-col items-center gap-4 pt-4 pb-8">
              <div className="flex-1 flex flex-col gap-2 items-start">
                <div className="flex items-center justify-between w-full">
                  <h3>Pay with {paymentType === "BNB" ? "BNB" : "USDT"} </h3>
                </div>
                <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                  <input
                    type="text"
                    placeholder="0"
                    className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                  />
                  <img src={Logo} alt="logo" className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-start">
                <h3>$SMRT Value</h3>
                <div className="flex items-center border border-white bg-white rounded-lg px-3 py-1">
                  <input
                    type="text"
                    placeholder="0"
                    className="text-lg bg-transparent outline-none w-full sm:w-[150px] text-black"
                    value={isNaN(receivedAmount) ? 0 : receivedAmount}
                  />
                  <img src={Logo} alt="logo" className="h-8 w-8" />
                </div>
              </div>
            </div>
            {isConnected ? (
              loading ? (
                <button
                  className="w-full bg-blue-500 h-[50px] rounded-3xl mb-4"
                  onClick={handleBuy}
                >
                  <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </button>
              ) : (
                <button
                  className="w-full bg-blue-500 h-[50px] rounded-3xl mb-4"
                  onClick={handleBuy}
                >
                  BUY
                </button>
              )
            ) : (
              <button
                className="w-full bg-blue-500 h-[50px] rounded-3xl mb-4"
                onClick={() => open("Connect")}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
