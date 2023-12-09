export const slideStyle = {
    backgroundImage:'url("slides/slide2.jpg")'
}
export default function MainSlider(){
    return (
        <div className="h-[580px] flex items-end p-[80px] bg-cover bg-no-repeat " style={slideStyle}>
            <div>
                <div className="text-[70px] [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)] text-white shadow-md font-bold leading-[70px] mb-8 "> Unleash Your Creativity. <br/> Make Apps In Nextjs. </div>
                <div className="bg-yellow-500 inline-block cursor-pointer hover:bg-yellow-600 uppercase text-black py-4 px-10 text-sm font-bold">Join the community</div>
            </div>
        </div>

    )
}