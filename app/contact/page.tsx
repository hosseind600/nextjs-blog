import MainHeader from "../components/MainHeader"
import Community from "../components/Community"
import Footer from "../components/Footer"


export default async function Contact() {

  return ( 
    <div>
      <MainHeader activeTab="contact"/>
      <div className="px-2  lg:px-20 md:px-10 sm:px-5 bg-gray-800 py-16 relative pt-[80px]" >
        <svg fill="#0c111770" className="bgsvg h-[230px] z-0 absolute w-full top-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
          <h2 className="text-center mt-20 relative text-white z-10 text-[40px] font-bold uppercase">Contact Me</h2>
          <span className="uppercase relative lead z-10 text-sm font-bold text-center mb-10 block">Hire me or make a chat appointment </span>
         
          <div className="posttext text-white leading-7 flex flex-row items-center justify-center">
                <div className="w-[500px] bg-gray-900/50 rounded-md p-10 flex flex-col gap-3">
                    <input type="text" className="h-[40px] border-0 rounded-md px-5 text-sm text-white bg-gray-950/40 outline-none" placeholder="Enter your name" />
                    <input type="email" className="h-[40px] border-0 rounded-md px-5 text-sm text-white bg-gray-950/40 outline-none" placeholder="Enter your email" />
                    <input type="tel" className="h-[40px] border-0 rounded-md px-5 text-sm text-white bg-gray-950/40 outline-none" placeholder="Enter your phone number" />
                    <textarea placeholder="Enter your message " className="h-[140px] border-0 rounded-md px-5 text-sm text-white bg-gray-950/40 outline-none">

                    </textarea>
                    <input type="button" value="Send Message" className="h-8 px-5 bg-[#8214d1] cursor-pointer hover:bg-[#950ef5] text-white ml-2 rounded-md shadow-md" />

                </div>
           </div>
      </div>
      <Community/>
      <Footer/>
    </div>
  )
}
