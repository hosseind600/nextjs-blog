import MainHeader from "../components/MainHeader"
import Community from "../components/Community"
import Footer from "../components/Footer"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Next Personal Website Demo - Downloads',
  description: 'This demo is generated to show a demonstration on Nextjs .',
}
async function getData() {

  let data = await fetch(process.env.SITE_URL +"/api/downloads?no_cache");
 
  if (data.ok) { 
    let json = await data.json();
    return json.data;
  } 
 
} 

export default async function Posts() {
  const downloads = await getData()

  return ( 
    <div>
      <MainHeader activeTab="downloads"/>
      <div className="px-10  lg:px-20 bg-gray-800 py-10 md:py-16 relative pt-[40px] md:pt-[80px]" >
        <svg fill="#0c111770" className="bgsvg h-[230px] z-0 absolute w-full top-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
          <h2 className="text-center mt-20 relative text-white z-10 text-[40px] font-bold uppercase">Downloads</h2>
          <span className="uppercase relative lead z-10 text-sm font-bold text-center mb-10 block">Free Web and Game development assets</span>
          <div className="flex flex-col gap-10 md:flex-row ">
            <div className="relative sidebar min-w-[220px] flex flex-col gap-5">
              <div className="rounded-md bg-gray-600/50 p-4">
                  <input className="bg-gray-500 outline-none focus:bg-gray-600 text-white h-[40px] rounded-md px-3 w-full text-sm border-0" type="text" name="searchInp" placeholder="Search Assets ..." />
              </div>
              <div className="rounded-md bg-gray-600/50 p-4">
                <ul className="flex flex-col gap-2 text-white text-sm font-semibold">
                  <li className="flex flex-row items-center gap-2"><svg fill="#cccccc" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg><a href="#">Demos</a></li>
                  <li className="flex flex-row items-center gap-2"><svg fill="#cccccc" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg><a href="#">Environments</a></li>
                  <li className="flex flex-row items-center gap-2"><svg fill="#cccccc" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg><a href="#">Shaders</a></li>
                  <li className="flex flex-row items-center gap-2"><svg fill="#cccccc" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg><a href="#">GFX</a></li>
                </ul>
              </div>
            </div>
            <div className="relative dcontent grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-5">
              {downloads.map((item,index)=>{
                return (<div className="bg-gray-900 rounded-md shadow-md overflow-hidden">
                <img className=" object-cover w-full aspect-square border-b-4 border-[#8214d1]" src={item.thumbnail} alt={item.title} />
                <h3 className="p-3 text-white font-bold">{item.title}</h3>
                <span className="text-[#777] pl-3 pb-3 block">{item.price}</span>
              </div>)
              })}
              
        
             
      
      
            </div>
          </div>
            
      </div>
      <Community/>
      <Footer/>
    </div>
  )
}
