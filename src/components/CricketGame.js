import { ImArrowUpRight2 } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";
import WorksProjectHandler from "./WorksProjectHandler";

export default function CricketGame() {
  return (
    <div className="workDiv flex gap-5">
      <div className="projectDetailDiv w-1/2">
        <div className="projectNo text-5xl text-white font-semibold pb-5">02</div>
        <div className="projectType text-4xl text-white pb-5">Frontend Project</div>
        <div className="projectDescription text-[#77777c] text-xs pb-5">
          <div>lorem ipmus dolor sit amet, consectetur adipiscing elit.</div>
          <div>scelerisque consequat, favcibus et, et.</div>
        </div>
        <div className="skillsUse text-[#03fd9d] text-sm pb-4">Html 5, Css 3, Javascript</div>
        <div className="projectAction w-[90%] flex border-t-2 border-solid border-[#77777c] py-4 gap-4">
          <div className="bg-[#232229] p-3 text-white text-xl rounded-full">
            <Link href={`https://ajaz1717.github.io/Cricket-Game/`} target="_blank"><ImArrowUpRight2 /></Link>
          </div>
          <div className="bg-[#232229] p-3 rounded-full text-[#232229]">
            <Link href={`https://github.com/Ajaz1717/Cricket-Game`} target="_blank"><TbBrandGithubFilled className="bg-white rounded-full text-xl px-0.5 pt-1" /></Link>
          </div>
        </div>
      </div>
      <div className="projectBannerDiv w-1/2">
        <div className="imageDiv">
          <img src="./images/cricketGame.png" alt="pic" />
        </div>
        <WorksProjectHandler/>
      </div>
    </div>
  )
}
