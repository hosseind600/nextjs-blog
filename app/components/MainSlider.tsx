"use client"
export const slideStyle = {
    backgroundImage:'url("slides/slide2.jpg")'
}

const slideToCommunity = ()=>{
    const element = document.getElementById("community");
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}
export default function MainSlider(){
    return (
        <div className="h-[450px] md:h-[650px] flex items-end p-[30px] md:p-[50px] lg:p-[80px] bg-cover bg-no-repeat bg-center " style={slideStyle}>
            <div>
                <span className="text-yellow-300 font-bold text-md">Nextjs Released</span>
                <div className="text-[30px] leading-[35px] md:leading-[50px]  md:text-[50px] lg:text-[70px] lg:leading-[70px] [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] text-white shadow-md font-bold  mb-8 "> Unleash Your Creativity. <br/> Make Apps In Nextjs. </div>
                <div onClick={()=>slideToCommunity()} className="bg-yellow-500 inline-block cursor-pointer hover:bg-yellow-600 uppercase text-black py-4 px-10 text-sm font-bold">Join the community</div>
            </div>
        </div>

    )
}