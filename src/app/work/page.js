// "use client"
import CricketGame from "@/components/CricketGame";
import Myntra from "@/components/Myntra";
// import { useSearchParams } from "next/navigation";
// import { usePathname } from "next/navigation";

export default function Work() {
    // const pathName = usePathname();
    // console.log(pathName);
    // const src = useSearchParams();
    // console.log(src);

    return (
        <div className="workMainContainer h-lvh bg-[#1c1b22] px-64 py-16">
            {/* <Myntra/> */}
            <CricketGame/>
        </div>
    )
}

export function texting(){
    return "Salam";
  }