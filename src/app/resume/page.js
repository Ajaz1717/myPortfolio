"use client"
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Resume() {
    const [tabValue, setTabValue] = useState('Skills');

    const handleExperience = () => {
        setTabValue("Experience");
    }
    const handleEducation = () => {
        setTabValue("Education");
    }
    const handleSkill = () => {
        setTabValue("Skills");
    }
    const handleAbout = () => {
        setTabValue("About");
    }
    // console.log(tabValue);
    return (
        <div className="resumeMainContainer h-lvh px-64 py-0 bg-[#1c1b22] pt-5 pb-[157px]">
            <div className="resumeDiv flex gap-2">
                <div className="why w-1/3">
                    <div className="hireMe text-white text-4xl mb-7 font-semibold">Why hire me?</div>
                    <div className="text-xs text-[#77777c] mb-7">
                        <div>lorem ipmus dolor sit amet,</div>
                        <div>consectetur adipiscing elit et, et.</div>
                    </div>
                    <div className="actionDiv">
                        <div>
                            <button onClick={handleSkill} className={`text-xs rounded-md mb-4 font-semibold  px-[103px] py-1.5  ${tabValue == "Skills" ? "bg-[#03fd9d] text-[#77777c]" : "bg-[#232229] text-white"}`}>Skills</button>
                        </div>
                        <div>
                            <button onClick={handleEducation} className={`text-xs rounded-md mb-4 font-semibold  px-[89px] py-1.5  ${tabValue == "Education" ? "bg-[#03fd9d] text-[#77777c]" : "text-white bg-[#232229]"}`}>Education</button>
                        </div>
                        <div>
                            <button onClick={handleExperience} className={`text-xs rounded-md mb-4 font-semibold  px-[86px] py-1.5  ${tabValue == "Experience" ? "bg-[#03fd9d] text-[#77777c]" : "text-white bg-[#232229]"}`}>Experience</button>
                        </div>
                        <div>
                            <button onClick={handleAbout} className={`text-xs rounded-md mb-4 font-semibold px-[90px] py-1.5  ${tabValue == "About" ? "bg-[#03fd9d] text-[#77777c]" : "bg-[#232229] text-white"}`}>About me</button>
                        </div>
                    </div>
                </div>
                {tabValue == "Experience" && <Experience />}
                {tabValue == "Education" && <Education />}
                {tabValue == "Skills" && <Skills />}
                {tabValue == "About" && <About />}
            </div>
        </div>
    )
}