export default function Education() {
    return (
        <div className="education w-2/3">
            <div className="heading text-white font-semibold text-[25px] mb-[24px]">Education</div>
            <div className="text-xs text-[#77777c] mb-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div>Scelerisque consequat, faucibus et, et.</div>
            </div>
            <div className="scrollableDiv h-[264px] rounded-md overflow-y-scroll scroll-smooth">
                <div className="w-full flex gap-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2020 - 2024</div>
                        <div className="domain text-white text-xl">B.Tech</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>NIT Kurukshetra</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2019-2020</div>
                        <div className="domain text-white text-xl">IIT/JEE</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Online Courses</div>
                    </div>
                </div>
                <div className="w-full flex gap-7 my-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2018</div>
                        <div className="domain text-white text-xl">Intermediate</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>National Inter College</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2016</div>
                        <div className="domain text-white text-xl">High School</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>National Inter College</div>
                    </div>
                </div>
                <div className="w-full flex gap-7">
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2023-2023</div>
                        <div className="domain text-white text-xl">Web Development</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>KG Coding</div>
                    </div>
                    <div className="bg-[#232229] rounded-md px-10 py-5 w-1/2">
                        <div className="year text-[#03fd9d] text-xs mb-1.5">2023-2024</div>
                        <div className="domain text-white text-xl">CNC Simulation</div>
                        <div className="projectName text-xs text-[#77777c]"><span className="text-[#03fd9d] font-semibold text-xl mr-2 relative bottom-1">.</span>Simans Centre</div>
                    </div>
                </div>
            </div>
        </div>
    )
}