export default function Experience() {
    return (
        <div className="myExperience w-2/3">
            <div className="heading text-white font-semibold text-[25px] mb-[24px]">My experiance</div>
            <div className="text-xs text-[#77777c] mb-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div>Scelerisque consequat, faucibus et, et.</div>
            </div>
            <div className="scrollableDiv h-[264px] rounded-md overflow-y-scroll scroll-smooth">
                <div className="w-full flex gap-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2 month</div>
                        <div className="domain text-white text-xl">Next Js</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Inventory Control</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">3 month</div>
                        <div className="domain text-white text-xl">React Js</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>E-Learning Web App</div>
                    </div>
                </div>
                <div className="w-full flex gap-7 my-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">1 month</div>
                        <div className="domain text-white text-xl">Node Js</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>CRUD Operation</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">1 month</div>
                        <div className="domain text-white text-xl">Javascript</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Cricket Game</div>
                    </div>
                </div>
                <div className="w-full flex gap-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2 Week</div>
                        <div className="domain text-white text-xl">CSS</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Myntra Clone</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">1 Week</div>
                        <div className="domain text-white text-xl">HTML</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Make Simple Layout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}