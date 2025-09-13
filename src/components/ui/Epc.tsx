import React from 'react'
import Marquee from "react-fast-marquee";


const Epc = () => {
  return (
    <div className="w-full h-[90px] flex text-white bg-black py-2">
      <Marquee
        gradient={false}
        speed={50}
        className="text-white font-bold dark:text-white tracking-wide text-base md:text-xl px-2"
        pauseOnHover
      >
        <span className="flex items-center gap-4">
          <span className="inline-block px-2">21+ MW Project Experience</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">27+ Team Members</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">100+ Satisfied Customers</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">Established 2016</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">Solar EPC</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">Solar Asset Management</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">Eco Society Solar Program</span>
          <span className="inline-block px-2 border-l border-blue-300 dark:border-white/30">Solar Design & Engineering</span>
        </span>
      </Marquee>
    </div>
  )
}

export default Epc
