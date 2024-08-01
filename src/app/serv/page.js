"use client"
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

export default function Page() {
    const [value, setValue] = useState("");

    const handleFirst = () => {
        setValue("01");
        if (value == "01") {
            setValue("");
        }
    }
    const handleSecond = () => {
        setValue("02");
        if (value == "02") {
            setValue("");
        }
    }
    const handleThird = () => {
        setValue("03");
        if (value == "03") {
            setValue("");
        }
    }
    const handleForth = () => {
        setValue("04");
        if (value == "04") {
            setValue("");
        }
    }

    // console.log(value);

    return (
        <div className="mainServiceContainer h-lvh px-64 bg-[#1c1b22]">
            <div className="serviceDiv py-0">
                <div className="upperDiv flex gap-16 pt-5 pb-6">
                    <div onClick={handleFirst} className="div1 cursor-pointer pb-5 border-b-2 border-solid border-[#77777c]">
                        <div className="numberr flex items-center w-full justify-between">
                            <div className={`text-4xl ${value == "01" ? "text-[#03fd9d]" : "text-white"}`}>01</div>
                            <div className="text-4xl">
                                {value == "01" ? <span className="text-[#03fd9d]"><BsArrowDownRightCircleFill /></span> : <span className="text-white"><BsArrowRightCircleFill /></span>}
                            </div>
                        </div>
                        <div className={`headingg text-4xl font-semibold ${value == "01" ? "text-[#03fd9d]" : "text-white"}`}>Web Development</div>
                        <div className="commmment text-[#77777c]">
                            <div>lorem ipmus dolor sir amet consecteture adipiscing</div>
                            <div>Scelerisque consequet, faucibus et, et.</div>
                        </div>
                    </div>
                    <div onClick={handleSecond} className="div2 cursor-pointer pb-5 border-b-2 border-solid border-[#77777c]">
                        <div className="numberr flex items-center w-full justify-between">
                            <div className={`text-4xl ${value == "02" ? "text-[#03fd9d]" : "text-white"}`}>02</div>
                            <div className="text-4xl">
                                {value == "02" ? <span className="text-[#03fd9d]"><BsArrowDownRightCircleFill /></span> : <span className="text-white"><BsArrowRightCircleFill /></span>}
                            </div>
                        </div>
                        <div className={`headingg text-4xl font-semibold ${value == "02" ? "text-[#03fd9d]" : "text-white"}`}>UI/UX Design</div>
                        <div className="commmment text-[#77777c]">
                            <div>lorem ipmus dolor sir amet consecteture adipiscing</div>
                            <div>Scelerisque consequet, faucibus et, et.</div>
                        </div>
                    </div>
                </div>
                <div className="lowerDiv flex gap-16 mt-10 pt-8 pb-28">
                    <div onClick={handleThird} className="div3 cursor-pointer pb-5 border-b-2 border-solid border-[#77777c]">
                        <div className="numberr flex items-center w-full justify-between">
                            <div className={`text-4xl ${value == "03" ? "text-[#03fd9d]" : "text-white"}`}>03</div>
                            <div className="text-4xl">
                                {value == "03" ? <span className="text-[#03fd9d]"><BsArrowDownRightCircleFill /></span> : <span className="text-white"><BsArrowRightCircleFill /></span>}
                            </div>
                        </div>
                        <div className={`headingg text-4xl font-semibold ${value == "03" ? "text-[#03fd9d]" : "text-white"}`}>Logo Design</div>
                        <div className="commmment text-[#77777c]">
                            <div>lorem ipmus dolor sir amet consecteture adipiscing</div>
                            <div>Scelerisque consequet, faucibus et, et.</div>
                        </div>
                    </div>
                    <div onClick={handleForth} className="div4 cursor-pointer pb-5 border-b-2 border-solid border-[#77777c]">
                        <div className="numberr flex items-center w-full justify-between">
                            <div className={`text-4xl ${value == "04" ? "text-[#03fd9d]" : "text-white"}`}>04</div>
                            <div className="text-4xl">
                                {value == "04" ? <span className="text-[#03fd9d]"><BsArrowDownRightCircleFill /></span> : <span className="text-white"><BsArrowRightCircleFill /></span>}
                            </div>
                        </div>
                        <div className={`headingg text-4xl font-semibold ${value == "04" ? "text-[#03fd9d]" : "text-white"}`}>SEO</div>
                        <div className="commmment text-[#77777c]">
                            <div>lorem ipmus dolor sir amet consecteture adipiscing</div>
                            <div>Scelerisque consequet, faucibus et, et.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}