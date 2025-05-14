import React from 'react'
import TimeBasedGreeting from './TimeBasedGreeting'

function Header() {
  return (
    <div>
       <header className="bg-[#18376d]  text-[#dcd956] py-4 px-6 shadow-md">
      <h1 className="text-3xl md:text-2xl font-bold">Welcome to AI Avatar Dashboard</h1>
      <p className=" text-center text-2xl md:text-xl mt-1 text-[#7cf7e0] font-bold"> <TimeBasedGreeting username={"Sachin"} />  Your AI assistants are ready to assist you.</p>
    </header>
    </div>
  )
}

export default Header