import React from 'react';

const RoadmapData = [
  { projectphase: 'Project Phase 1',listing: 'RESEARCH' ,listone: 'Market Research', listtwo: 'Project Concept', listthree: 'Team formation', listfour: 'Tokenomics & Vesting', listfive: 'Whitepaper v.1 Release'},
  { projectphase: 'Project Phase 2',listing: 'PRESALE' , listone: 'Token Presale', listtwo: 'Community Building', listthree: 'Community Event', listfour: 'PR & Influencer Marketing', listfive: 'RE Platform Development', listsix: 'Collaborations & Partnerships' },
  { projectphase: 'Project Phase 3', listing: 'LISTING' ,listone: 'Token Presale Completion', listtwo: 'Project Website', listthree: 'TGE & DEX Listing', listfour: 'CEX Listing', listfive: 'Product Development & Test Centre' },
  { projectphase: 'Project Phase 4', listing: 'BRAND LAUNCH' , listone: 'AI Powered Solution Design Website (Beta)', listtwo: 'Online Store', listthree: 'Rewards Program', listfour: 'Product Marketing and Branding' },
  { projectphase: 'Project Phase 5',  listing: 'DEVELOPMENT' ,listone: 'Investment Pool', listtwo: 'Research Center for New Green Technologies', listthree: 'Project Expansion', listfour: 'Token Buy Back', listfive: 'Performance Metrics Improvement' },
];

function Roadmap() {
  return (
    <div className='w-full max-w-[1230px] mx-auto pb-16 px-10' id="roadmap">
      <h1 className='text-center text-3xl font-bold text-[#48e463] mb-20'>Roadmap</h1>
      <div className='flex lg:flex-nowrap flex-wrap justify-center gap-4'>
        {RoadmapData.map((item, index) => (
          <div key={index} className='w-full'>
            <ul className='bg-[#2423239e] text-white border-t border-l border-[#48e462cb] p-3 py-6 rounded-lg flex flex-col gap-2 relative h-full'>
              <h2 className=' text-white text-sm rounded-lg'>{item.projectphase}</h2>
              <h1 className='text-2xl font-bold'>{item.listing}</h1>
              <li>{item.listone}</li>
              <li>{item.listtwo}</li>
              <li>{item.listthree}</li>
              <li>{item.listfour}</li>
              {item.listfive && <li>{item.listfive}</li>}
              {item.listsix && <li>{item.listsix}</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
