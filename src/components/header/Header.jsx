import React, {useState} from 'react';
import logo from "./images/logo.png";
import search from "./images/ico.png";
import {useDispatch, useSelector} from "react-redux";
import userImg from "./images/girl.jpg";
import vector from "./images/Vector.png";
import { logOut} from "../../redux/slices/userSlice.js";

function Header() {
    const {user} = useSelector(state => state.userReducer);
    const [menuOpen, setMenuOpen] = useState(false);
const  dispatch = useDispatch()
    console.log(user, "user");

    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="w-full h-[69.9px] flex justify-between items-center px-[50px] relative">
            <img src={logo} className="w-[109px] h-[60.71px]"/>
            <div
                className="w-[378.17px] h-[40px] rounded-[25px] bg-[#E8EAEB] flex justify-between items-center pr-[5px] pl-[20px]">
                <input
                    type="text"
                    className="w-[330px] border-none outline-none text-black placeholder:font-[Montserrat] text-[#BABABA] font-[600]"
                    placeholder="Поиск"/>
                <button className="w-[32px] h-[32px] rounded-full bg-[#C10016] flex justify-center items-center">
                    <img src={search} alt="Search"/>
                </button>
            </div>
            {user ? (
                <div className="relative">
                    <div className="w-[173px] h-[50px]  flex gap-[10px] items-center cursor-pointer"
                         onClick={handleToggle}>
                        <img className="w-[52px] h-[50px] rounded-full" src={user.img} alt="User"/>
                        <div className="flex items-center gap-[10px]" id="logOut">
                            <h1 className="font-[600] text-[16px] text-[#4F4F4F]">{user.userName}</h1>
                            <img src={vector} className="w-[12px] h-[6px]" alt="Toggle"/>
                        </div>
                    </div>
                    {menuOpen && (
                        <div
                            className="absolute right-0 mt-1 w-[206px] h-[126px] bg-white  z-10 rounded-[5px] flex flex-col items-center"
                            style={{
                                boxShadow: "0px 0px 10px 0px #00000040"
                            }}>
                            <div className="w-[195px] h-[84px]  flex flex-col items-center justify-center gap-[10px]">
                                <h1 className="font-[700] text-[16px] color-[#1F1617] cursor-pointer">Личные Данные</h1>
                                <p className="font-[400] text-[16px] text-[#000000] cursor-pointer w-[195px] text-center">Создать Пользователя</p>
                            </div>
                            <p className="w-[190px] h-[42px]  flex justify-center items-center  cursor-pointer  border-t-[2px] border-t-[#B3B3B4]"
                              onClick={()=>{
                                  dispatch(logOut(user.id))
                                  localStorage.removeItem("token")
                              }}
                            >Выход</p>
                        </div>
                    )}
                </div>
            ) : (
                <h1 className="text-[16px] font-[Montserrat] font-[600] cursor-pointer">Вход</h1>
            )}
        </div>
    );
}

export default Header;
