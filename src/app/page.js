import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#1c1b22] h-lvh w-[100%]">
      
      <div className="mainSectionDiv flex gap-5 pt-3">
        <div className="profileDiv w-1/2 py-8 pl-64">
          <div className="text-white text-sm mb-2">Software Developer</div>
          <div className="text-white text-5xl mb-2">Hello I'm</div>
          <div className="text-5xl text-[#03fd9d] font-semibold mb-7">
            Ajaz Ahmad
          </div>
          <div className="text-[#77777c] text-xs mb-8">
            <div>I excel at crafting elegant digital experiences and</div>
            <div>I am proficient in various programming languages and</div>
            <div>technologies</div>
          </div>
          <div className="actions flex items-center gap-5">
            <button className="flex items-center text-[#03fd9d] text-xs py-3 px-6 border-solid border-2 border-[#03fd9d] rounded-full">
              <div>DOWNLOAD CV</div>{" "}
              <div className="text-sm ml-2">
                <FiDownload />
              </div>
            </button>
            <Link href={``}>
              <div className="text-[#03fd9d] px-1.5 py-1.5 border-2 border-solid border-[#03fd9d] rounded-full">
                <FaGithub />
              </div>
            </Link>
            <Link href={``}>
              <div className="text-[#03fd9d] px-1.5 py-1.5 border-2 border-solid border-[#03fd9d] rounded-full">
                <FaSnapchat />
              </div>
            </Link>
            <Link href={``}>
              <div className="text-[#03fd9d] px-1.5 py-1.5 border-2 border-solid border-[#03fd9d] rounded-full">
                <FaInstagramSquare />
              </div>
            </Link>
            <Link href={``}>
              <div className="text-[#03fd9d] px-1.5 py-1.5 border-2 border-solid border-[#03fd9d] rounded-full">
              <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
        <div className="Pic w-1/2 flex justify-center items-center pr-60">
          <div className="outerDiv border-4 border-dashed border-[#03fd9d] w-fit rounded-full">
            <div className="innerDiv">
              <img src="images/my1.jpg" className="h-80 rounded-full"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
