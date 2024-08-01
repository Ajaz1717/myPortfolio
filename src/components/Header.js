"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <header className="flex py-14 bg-[#1c1b22]">
            <div className="nameDiv flex w-1/2 justify-center pr-20">
                <div className="text-3xl text-white font-semibold">Ajaz</div>
                <div className="text-3xl text-[#03fd9d] ml-2 font-semibold">.</div>
            </div>
            <div className="navDiv">
                <ul className="flex gap-5 text-white font-semibold text-sm items-center">
                    <li className="">
                        <div className={`py-1  ${pathName == "/" && "border-b-2 border-[#03fd9d] text-[#03fd9d]"}`}>
                            <Link href={`/`}>Home</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`py-1 ${pathName == "/serv" && "border-b-2 border-[#03fd9d] text-[#03fd9d]"}`}>
                            <Link href={`/serv`}>Services</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`py-1 ${pathName == "/resume" && "border-b-2 border-[#03fd9d] text-[#03fd9d]"}`}>
                            <Link href={`/resume`}>Resume</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`py-1 ${pathName == "/work" && "border-b-2 border-[#03fd9d] text-[#03fd9d]"}`}>
                            <Link href={`/work`}>Work</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`py-1 ${pathName == "/contact" && "border-b-2 border-[#03fd9d] text-[#03fd9d]"}`}>
                            <Link href={`/contact`}>Contact</Link>
                        </div>
                    </li>
                    <li className="bg-[#03fd9d] py-1 px-3 rounded-full text-[#77777c]">
                        Hire Me
                    </li>
                </ul>
            </div>
        </header>
    )
}