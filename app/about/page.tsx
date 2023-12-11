import MainHeader from "../components/MainHeader"
import Community from "../components/Community"
import Footer from "../components/Footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Personal Website Demo - About',
  description: 'This demo is generated to show a demonstration on Nextjs .',
}

export default async function About() {

  return ( 
    <div>
      <MainHeader activeTab="about"/>
      <div className="px-2  lg:px-20 md:px-10 sm:px-5 bg-gray-800 py-16 relative pt-[80px]" >
        <svg fill="#0c111770" className="bgsvg h-[230px] z-0 absolute w-full top-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
          <h2 className="text-center mt-20 relative text-white z-10 text-[40px] font-bold uppercase">About Me</h2>
          <span className="uppercase relative lead z-10 text-sm font-bold text-center mb-10 block">Fullstack Dev</span>
         
          <div className="posttext text-white leading-7">
            
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis sit numquam expedita aliquid non ex, iusto ratione modi perferendis tempora provident voluptate! Reiciendis laboriosam repellendus eos. Magnam, mollitia sed?

<br/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis sit numquam expedita aliquid non ex, iusto ratione modi perferendis tempora provident voluptate! Reiciendis laboriosam repellendus eos. Magnam, mollitia sed?

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis sit numquam expedita aliquid non ex, iusto ratione modi perferendis tempora provident voluptate! Reiciendis laboriosam repellendus eos. Magnam, mollitia sed?

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis sit numquam expedita aliquid non ex, iusto ratione modi perferendis tempora provident voluptate! Reiciendis laboriosam repellendus eos. Magnam, mollitia sed?

<br/>            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis sit numquam expedita aliquid non ex, iusto ratione modi perferendis tempora provident voluptate! Reiciendis laboriosam repellendus eos. Magnam, mollitia sed?
          </div>
      </div>
      <Community/>
      <Footer/>
    </div>
  )
}
