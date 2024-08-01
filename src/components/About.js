export default function About() {
    return (
        <div className="about w-2/3">
            <div className="heading text-white font-semibold text-[25px] mb-[24px]">About me</div>
            <div className="text-xs text-[#77777c] mb-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div>Scelerisque consequat, faucibus et, et.</div>
            </div>
            <div className="scrollableDiv h-[264px] rounded-md flex">
                <div className="Div1 w-1/2 gap-y-3 flex flex-col">
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Name</div>
                        <div className="text-white">Ajaz Ahmad</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Experience</div>
                        <div className="text-white">1+ Years</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Nationality</div>
                        <div className="text-white">Indian</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Freelance</div>
                        <div className="text-white">Available</div>
                    </div>
                </div>
                <div className="Div2 w-1/2 gap-y-3 flex flex-col">
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Phone</div>
                        <div className="text-white">(+91) 7985893269</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Email</div>
                        <div className="text-white">pakke1234raza@gmail.com</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">Snapchat</div>
                        <div className="text-white">Ajaz_0017</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs text-[#77777c] mr-3">languages</div>
                        <div className="text-white">English, Hindi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}