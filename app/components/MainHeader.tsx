export default function MainHeader() {
    return (
      <div className="bg-gray-900 shadow-md fixed top-0 left-0 w-full  flex items-center justify-between px-2 text-white lg:px-20 md:px-10 sm:px-5 ">
        <img className="h-[60px] my-3 aspect-square mr-10" src="hdlogo.svg"/>
        <ul className="flex  flex-row list-none gap-8 text-md font-bold">
          <li className="text-yellow-500 border-b-[3px] border-y-0 border-yellow-300 py-7"><a href="#">Home</a></li>
          <li className="py-7"><a href="#">Downloads</a></li>
          <li className="py-7"><a href="#">Articles</a></li>
          <li className="py-7"><a href="#">About</a></li>
          <li className="py-7"><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
  