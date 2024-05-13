import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

import {
  USDT_ADDRESS,
  PRESALE_ADDRESS,
  TOKEN_ADDRESS,
  TOKEN_ABI,
  PRESALE_ABI,
} from "../contracts/contracts";

function useContracts() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const getProvider = () => {
    return new BrowserProvider(walletProvider);
  };
  const getSigner = async (provider) => {
    return provider.getSigner();
  };

  const getContract = async (address, abi, signer) => {
    const contract = new Contract(address, abi, signer);
    return contract;
  };

  const stage = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(PRESALE_ADDRESS, PRESALE_ABI, signer);
    const stage = await contract.currentStage();
    return stage;
  };

  const getPresaleData = async (stage) => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(PRESALE_ADDRESS, PRESALE_ABI, signer);

    let usdtRate;
    let nativeRate;
    let totalSold = await contract.totalSold();
    let totalInStage;
    const min = await contract.minPurchaseAmount();
    const minUsdt = await contract.minPurchaseAmountUsdt();
    let endTime;
    let totalSoldStage;

    if (stage === 1) {
      usdtRate = await contract.rateStage1BNB();
      nativeRate = await contract.rateStage1Usdt();
      totalInStage = await contract.stage1();
      endTime = await contract.endTime1();
      totalSoldStage = await contract.tokenSolds1();
    } else if (stage === 2) {
      usdtRate = await contract.rateStage2BNB();
      nativeRate = await contract.rateStage2Usdt();
      totalInStage = await contract.stage2();
      endTime = await contract.endTime2();
      totalSoldStage = await contract.tokenSolds2();
    } else if (stage === 3) {
      usdtRate = await contract.rateStage3BNB();
      nativeRate = await contract.rateStage3Usdt();
      totalInStage = await contract.stage3();
      endTime = await contract.endTime3();
      totalSoldStage = await contract.tokenSolds3();
    } else if (stage === 4) {
      usdtRate = await contract.rateStage4BNB();
      nativeRate = await contract.rateStage4Usdt();
      totalInStage = await contract.stage4();
      endTime = await contract.endTime4();
      totalSoldStage = await contract.tokenSolds4();
    } else if (stage === 5) {
      usdtRate = await contract.rateStage5BNB();
      nativeRate = await contract.rateStage5Usdt();
      totalInStage = await contract.stage5();
      endTime = await contract.endTime5();
      totalSoldStage = await contract.tokenSolds5();
    } else if (stage === 6) {
      usdtRate = await contract.rateStage6BNB();
      nativeRate = await contract.rateStage6Usdt();
      totalInStage = await contract.stage6();
      endTime = await contract.endTime6();
      totalSoldStage = await contract.tokenSolds6();
    }
    // convert from 18 decimals
    return {
      usdtRate: formatUnits(nativeRate, 18),
      nativeRate: formatUnits(usdtRate, 18),
      totalSold: formatUnits(totalSold, 18),
      totalInStage: formatUnits(totalInStage, 18),
      min: formatUnits(min, 18),
      minUsdt: formatUnits(minUsdt, 18),
      endTime: Number(endTime) * 1000,
      totalSoldStage: formatUnits(totalSoldStage, 18),
    };
  };

  const buyTokens = async (amount, paymentType) => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(PRESALE_ADDRESS, PRESALE_ABI, signer);

    if (paymentType === "BNB") {
      console.log("amount", amount);
      const value = parseUnits(amount, 18);
      console.log("value", value);
      await contract.buyFromNative(
        "0x0000000000000000000000000000000000000000",
        { value }
      );
    } else if (paymentType === "USDT") {
      const usdtContract = await getContract(USDT_ADDRESS, TOKEN_ABI, signer);
      let allowance = await usdtContract.allowance(address, PRESALE_ADDRESS);
      allowance = formatUnits(allowance, 18);

      if (allowance < amount) {
        await usdtContract.approve(PRESALE_ADDRESS, parseUnits(amount, 18));
      }
      console.log("amount", parseUnits(amount, 18));
      await contract.buyFromUSDT(
        "0x0000000000000000000000000000000000000000",
        parseUnits(amount, 18),
        1
      );
    }
  };

  const myTokenBalance = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(TOKEN_ADDRESS, TOKEN_ABI, signer);
    const balance = await contract.balanceOf(address);
    return formatUnits(balance, 18);
  };

  return { stage, getPresaleData, buyTokens, myTokenBalance };
}

export default useContracts;
