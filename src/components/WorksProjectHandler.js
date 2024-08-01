"use client"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {texting} from "@/app/work/page";

export default function WorksProjectHandler() {
  const handletaxt = () => {
    let data = texting();
    // console.log(data);
  }
  
  return (
    <div className="actionDiv flex gap-2 mt-3 justify-end text-xl text-semibold">
      <div onClick={handletaxt} className="bg-[#03fd9d] p-1.5 rounded-sm"><IoIosArrowBack /></div>
      <div className="bg-[#03fd9d] p-1.5 rounded-sm"><IoIosArrowForward /></div>
    </div>
  )
}