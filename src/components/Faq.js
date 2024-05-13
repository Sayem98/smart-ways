import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";

const Faq = () => {
  const faqData = [
    {
      question: "What is Smrtways?",
      answer:
        "Smrtways is building Renewable Energy ecosystem that will provide a variety of financial tools and services, including online store, staking, Research & Development, and Investment Pools.",
    },
    {
      question: "What is $SMRT Token?",
      answer:
        "$SMRT serves as a utility token for the Smrtways platform, enabling token holders to procure Renewable Energy products and engage in investments in Renewable Energy projects. $SMRT token is built upon the Binance Smart Chain (BSC), adhering to the BEP20 standard.",
    },
    {
      question: "How and Where can I buy $SMRT token?",
      answer:
        "As of now, Smrtways ($SMRT) is in its presale phase, which means it is not yet available on traditional cryptocurrency exchanges. Beware of potential scams using Smrtways name. ",
      answer1:
        "The only legitimate way to participate in the Smrtways presale is through our official website at https://smrtways.io . Please exercise caution and ensure you're on the official platform to avoid fraudulent schemes.",
      answer2:
        "For detailed instructions on how to buy $SMRT tokens, please consult our How to Buy guide at https://smrtways.io/how-to-buy",
    },

    {
      question: "When and where will I receive my $SMRT tokens?",
      answer:
        "$SMRT tokens will be airdropped after the presale concludes. Announcement of the process will be made on Smrtways official website.",
    },
    {
      question: "How many presale stages are there?",
      answer:
        "Smrtways presale consists of 1 stage. For additional details, please visit: https://smrtways.io/presale.",
    },
    {
      question: "When and where will $SMRT launch?",
      answer:
        "Following the presale, $SMRT will launch on decentralized exchange, including at least two top-tier exchanges.",
        answer1: "Stay tuned for official announcements about the specific launch date and trading platforms by following our social media channels."
    },
    {
      question: "My wallet is compromised/hacked, what should I do?",
      answer:
        "If you suspect that your wallet has been compromised, it's essential to take immediate action to protect your assets. Please follow these steps:",
      answer1:
        "Stay tuned for official announcements about the specific launch date and trading platforms by following our social media channels.",
      answer2:
        "Never Share Your Seed Phrase or Private Key: Under no circumstances should you share your Seed Phrase or Private Key with anyone. These are sensitive and should be kept secure. Contact Us: Reach out to us at: https://smrtways.io/help to report the issue and seek guidance on how to proceed. Important Note: It's crucial to understand that we cannot recover lost funds. Beware of Scammers: Remember that we will never ask for your private details, such as your Seed Phrase or Private Key. Be cautious of potential scams and always verify the authenticity of the support you're engaging with.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section id="faq">
      <div className="px-2 py-10 ">
        <h1 className="text-3xl text-center font-bold text-[#48e463]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="max-w-[1230px] w-full mx-auto flex flex-col space-y-2 py-10">
          {faqData.map((item, index) => (
            <div key={index} className="p-1 rounded-lg">
              <h2
                className="text-lg font-semibold cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {activeIndex === index ? (
                  <FaArrowUp className="" />
                ) : (
                  <FaArrowDown />
                )}
              </h2>
              <p
                className={`text-white my-1 ml-1 ${activeIndex === index ? "block" : "hidden"
                  }`}
              >

                {item.answer}<br/>
                {item.answer1}<br/>
                {item.answer2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center w-full max-w-[1000px] mx-auto pb-10 text-xl px-1">Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction</p>
    </section>
  );
};

export default Faq;
