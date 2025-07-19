// CategoryModal.jsx
import React, {useState, useEffect} from "react";
import x from "./images/no.png"
import {GrUserFemale} from "react-icons/gr";
import {SlUserFemale} from "react-icons/sl";
import {useSearchParams} from "react-router-dom";
import uploadIcon from "./images/ulpload.png"

export default function CategoryModal({isOpen, onClose, onSubmit}) {
    const [category, setCategory] = useState("");
    const [searchParams, setSearchParams] = useSearchParams()
    const queryGender = searchParams.get("gender")
    useEffect(() => {
        if (!isOpen) setCategory("");
    }, [isOpen]);

    const handleSubmit = () => {
        onSubmit && onSubmit(category);
        onClose && onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-end bg-black/80  z-50 top-[69.9px]"
            onClick={onClose}>
            <div
                className="bg-white rounded-lg shadow-lg  w-[301px] h-[360px] max-w-md absolute right-[100px] top-[139px] flex flex-col  justify-evenly items-center"
                onClick={e => e.stopPropagation()}>
                <div className="flex w-[259px] h-[20px]  justify-between items-center">
                    <h2 className="font-[600] text-[16px] text-[#2E2E2E]">Добавить Категория</h2>
                    <img src={x} className="w-[16px] h-[16px] cursor-pointer"/>
                </div>
                <div className="w-[259px] h-[32px]  flex justify-between">
                    <div onClick={() => {
                        searchParams.set("gender", "1")
                        setSearchParams(searchParams)
                    }}
                         className={`w-[125px] h-[32px] border border-solid border-[#A4A4A4] rounded-[5px] flex justify-center items-center gap-[10px] cursor-pointer  ${queryGender === "1" ? "text-[#C10016]" : "text-[#939393]"}`}
                         style={queryGender === "1" ? {boxShadow: "0px 0px 10px 0px #00000040", border:"none"} : {boxShadow:"none"}}>
                        <GrUserFemale/>
                        <span className="font-[400] text-[14px] text-[#4F4F4F]">Женский</span>
                    </div>
                    <div onClick={() => {
                        searchParams.set("gender", "2")
                        setSearchParams(searchParams)
                    }}
                         className={`w-[125px] h-[32px] border border-solid border-[#A4A4A4] rounded-[5px] flex justify-center items-center gap-[10px] cursor-pointer  ${queryGender === "2" ? "text-[#C10016]" : "text-[#939393]"}`}
                         style={queryGender === "2" ? {boxShadow: "0px 0px 10px 0px #00000040", border:"none"} : {boxShadow:"none"}}>
                        <SlUserFemale/>
                        <span className="font-[400] text-[14px] text-[#4F4F4F]">Мужской</span>
                    </div>
                </div>
                <input type="text" placeholder="Категория"
                       className="w-[259px] h-[39px] font-[400] text-[#4F4F4F] text-[14px] border-b  border-b-[#C1C1C1] outline-none placeholder:text-[#4F4F4F] placeholder:text-[14px] placeholder:font-[400]"/>
                <div className="w-[261px] h-[145px]  bg-[#D3D3D3] rounded-[5px] flex flex-col justify-center items-center gap-[21px]">
                    <img src={uploadIcon}/>
                    <p className="font-[500] text-[16px] text-[#FFFFFF] w-[110px] h-[40px]  text-center" >Загрузить
                        Фото</p>
                </div>
                <button className="w-[259px] h-[32px] bg-[#C10016] rounded-[25px] font-[600] text-[16px] text-[#FFFFFF]">Добавить</button>

            </div>
        </div>
    );
}
