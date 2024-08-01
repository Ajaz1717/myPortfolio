import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
    return (
        <div className="skills w-2/3">
            <div className="heading text-white font-semibold text-[25px] mb-[24px]">Skills</div>
            <div className="text-xs text-[#77777c] mb-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div>Scelerisque consequat, faucibus et, et.</div>
            </div>
            <div className="scrollableDiv h-[264px] rounded-md">
                <div className="upperDiv flex w-full gap-7 mb-7">
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><FaHtml5 /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><FaCss3Alt /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><IoLogoJavascript /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><FaNodeJs /></div>
                </div>
                <div className="lowerDIv flex w-full gap-7">
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><GrReactjs /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><SiNextdotjs /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><RiTailwindCssFill /></div>
                    <div className="text-7xl bg-[#232229] rounded-md p-6 hover:text-[#03fd9d]"><SiMongodb /></div>
                </div>
            </div>
        </div>
    )
}