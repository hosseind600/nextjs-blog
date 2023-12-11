export default function Community() {
    return (
      <div className="py-20 px-5  community relative" id="community">
        <h3 className="text-center mb-10 relative text-white z-10 text-[28px] lg:text-[40px] font-bold uppercase">Join the Community</h3>
        <p className="text-center relative  py-3 px-10 z-20 text-black/80">join the community of developers to recieve daily articles and freemiume downloadables at your inbox.</p>
        <div className="flex lg:w-[300px] mx-auto w-full flex-row relative items-center justify-center px-10 mt-10 z-20">
          <input type="email" placeholder="Enter your email" className="px-2 flex-1   outline-none text-sm rounded-md shadow-md h-8" />
          <input type="button" value="Join" className="h-8 px-5 bg-[#8214d1] cursor-pointer hover:bg-[#950ef5] text-white ml-2 rounded-md shadow-md" />
        </div>
        <svg fill="#15485850" className="z-1 h-[230px] z-0 absolute w-full bottom-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
      
      </div>
    )
  }
  