import React, {useEffect} from 'react';
import Bg from "../backgroundImage/Bg.jsx";
import gold from "./images/goldImg.png"
import {useForm} from "react-hook-form";
import {userEmailValidation, userPasswordValidation} from "../Validation.js";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, login} from "../../redux/slices/userSlice.js";
import {homePage} from "../pages.jsx";
import {useNavigate} from "react-router-dom";


function LogIn() {
    const {users} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm({mode: "onTouched"})

    function onSubmit(data) {
        // console.log(data)
        const user = users.find(user => user.email === data.email && user.password === data.password)
        // console.log(user, "user")
        if (user) {
            localStorage.setItem("user", "token")
            dispatch(login(user)).then(() => {
                navigate(homePage)
                window.location.reload()
            })

        }
        reset()
    }

    // console.log(errors)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <Bg>
                <div className="w-[554px] h-[392px]  flex rounded-[50px] bg-white"
                     style={{boxShadow: "0px 0px 10px 0px #00000040"}}>
                    <div
                        className="w-1/2 h-full bg-white flex flex-col justify-between items-center py-[18px] rounded-[5px] ">
                        <h1 className="w-[239px]  font-[600] text-[18px] text-[#4F4F4F]">Вход</h1>
                        <form onSubmit={handleSubmit(onSubmit)}
                              className="w-[239px]  font-[400] text-[14px] text-[#4F4F4F] gap-[10px] flex flex-col">
                            <p>Эл. адрес</p>
                            <input className=" w-[239px] h-[32px] rounded-[25px] bg-[#EBEBEB] outline-none pl-2"
                                   type="text"  {...register("email", userEmailValidation)}/>
                            <small className="text-red-500">{errors.email && errors.email.message}</small>
                            <p className="mt-[5px]">Пароль</p>
                            <input className=" w-[239px] h-[32px] rounded-[25px] bg-[#EBEBEB] outline-none pl-2"
                                   type="password"  {...register("password", userPasswordValidation)}/>

                            <small className="text-red-500">{errors.password && errors.password.message}</small>
                            <div className="flex items-center">
                                <input id="check" type="checkbox" className="block"/>
                                <label htmlFor="check" className="font-[500] text-[12px] ml-[8px] pointer">Запомни
                                    Меня</label>
                            </div>
                            <button disabled={!isValid}
                                    className={`w-[239px] h-[32px] rounded-[25px] font-[600] text-[14px] text-white ${isValid ? " bg-[#C10016] " : "bg-red-300"}`}>Вход
                            </button>
                        </form>
                        <div className="flex flex-col gap-[8px]">
                            <p className="text-center font-[500] text-[14px] text-[#717171]">Забыли Пароль?</p>
                            <p className="text-center font-[600] text-[14px] text-[#1F1617]">Восстановить</p>
                        </div>
                    </div>
                    <div
                        className="w-1/2 1/2 flex justify-center items-center font-700 text-[24px] text-white rounded-[5px]"
                        style={{backgroundImage: ` url(${gold})`}}>
                        <span>PlardGold</span>
                    </div>
                </div>
            </Bg>
        </div>
    );
}

export default LogIn;