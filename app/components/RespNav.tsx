"use client"

import { useState } from "react"

export default function RespNav({activeTab}) {

  const [isOpen,setIsOpen] = useState(false);
    return (
      <div className="md:hidden h-10 aspect-square flex items-center justify-center cursor-pointer ">
            <svg onClick={()=>setIsOpen(!isOpen)} fill="#fff" xmlns="http://www.w3.org/2000/svg" height="22" width="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            <div className={isOpen ? "md:hidden flex flex-col absolute right-0 top-[85px] w-full p-8 px-10 bg-gray-950/90 rounded shadow-md z-30" : "hidden"}>
              <li className={activeTab=="home" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/">Home</a></li>
              <li className={activeTab=="downloads" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/downloads/">Downloads</a></li>
              <li className={activeTab=="articles" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/posts/">Articles</a></li>
              <li className={activeTab=="about" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/about/">About</a></li>
              <li className={activeTab=="contact" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/contact/">Contact</a></li>
            </div>

      </div>
    )
  }
  
  // <div className="md:hidden h-10 aspect-square flex items-center justify-center cursor-pointer ">
  //   <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="22" width="20" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
  // <div className={isOpen ? "md:hidden flex flex-col absolute right-0 top-[85px] w-full p-8 px-10 bg-gray-950/90 rounded shadow-md" : "hidden"}>
  //   <li className={activeTab=="home" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/">Home</a></li>
  //   <li  className={activeTab=="downloads" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/downloads/">Downloads</a></li>
  //   <li  className={activeTab=="articles" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/posts/">Articles</a></li>
  //   <li  className={activeTab=="about" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/about/">About</a></li>
  //   <li  className={activeTab=="contact" ? 'text-yellow-500  py-7' :  'py-7'}><a href="/contact/">Contact</a></li>
  // </div>