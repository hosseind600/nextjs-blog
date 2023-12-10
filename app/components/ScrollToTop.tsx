"use client";
import React, { useState ,useEffect } from 'react'

function scrollmetoTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});

}
export default function ScrollToTop() {

  const [visible,setVisible] = useState(false);


  const scrollThreshold = 200;
  const handleScroll = () => {setVisible(window.scrollY>= scrollThreshold);};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });


  if(visible) {
    return (
      <div onClick={()=>{scrollmetoTop()}} className="cursor-pointer hover:bg-gray-900 fixed bottom-[20px] right-[20px] w-12 h-12 bg-black shadow-md rounded-md flex items-center justify-center">
        <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
      </div>
    ) 
  } else {
      return (<div>
        {/* scroll to top */}
      </div>)
  }
}
  