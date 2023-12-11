export default function MainHeader({activeTab}) {
  
    return (
      <div className="bg-gray-900 shadow-md z-40 fixed top-0 left-0 w-full  flex items-center justify-between px-2 text-white lg:px-20 md:px-10 sm:px-5 ">
        <img className="h-[60px] my-3 aspect-square mr-10" alt="logo" src="/hdlogo.svg"/>
        <ul className="flex  flex-row list-none gap-8 text-md font-bold">
          <li className={activeTab=="home" ? 'text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7' :  'py-7'}><a href="/">Home</a></li>
          <li  className={activeTab=="downloads" ? 'text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7' :  'py-7'}><a href="/downloads/">Downloads</a></li>
          <li  className={activeTab=="articles" ? 'text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7' :  'py-7'}><a href="/posts/">Articles</a></li>
          <li  className={activeTab=="about" ? 'text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7' :  'py-7'}><a href="/about/">About</a></li>
          <li  className={activeTab=="contact" ? 'text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7' :  'py-7'}><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    )
  }
  