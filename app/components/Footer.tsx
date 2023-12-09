export default function Footer() {
    return (
      <div className="p-20 bg-gray-800 grid grid-cols-1 md:grid-cols-3 relative">
        <div>
          <div className="text-white font-bold text-md mb-6 ft">About </div>
          <p className="text-sm text-[#ccc] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio non error voluptas nihil officia cumque labore laboriosam iusto. Officiis, at. Perspiciatis rerum inventore ratione facilis labore iure pariatur delectus. Fugiat.</p>
        </div>

        <div className="ml-5">
          <div className="text-white font-bold text-md mb-6 ft">Contact </div>
          <div className="flex flex-row items-center gap-2 mb-3 ml-2">
            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <span className="text-[#ccc] text-sm">+98-917-776-3200</span>
          </div>
          <div className="flex flex-row items-center gap-2 mb-3 ml-2">
            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span className="text-[#ccc] text-sm">yourmail@gmail.com</span>
          </div>
        </div>
        <div>
          <div className="text-white font-bold text-md mb-6 ft">Social Media</div>
          <div className="flex flex-row items-center gap-2 mb-3 ml-2">
            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
            <span className="text-[#ccc] text-sm">@Channelname</span>
          </div>
          <div className="flex flex-row items-center gap-2 mb-3 ml-2">
            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
            <span className="text-[#ccc] text-sm">@ChannelXaccount</span>
          </div>
          <div className="flex flex-row items-center gap-2 ml-2">
            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
            <span className="text-[#ccc] text-sm">@ChannelTGaccount</span>
          </div>
        </div>

      </div>
    )
  }
  