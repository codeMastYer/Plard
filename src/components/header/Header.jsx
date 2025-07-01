import logo from "./images/logo.png"
import search from "./images/ico.png"

function Header() {
    return (
        <div className='w-full h-[69.9px] flex justify-between items-center px-[50px]'>
            <img src={logo} className="w-[109px] h-[60.71px]"/>
            <div
                className="w-[378.17px] h-[40px]  rounded rounded-[25px] bg-[#E8EAEB] flex justify-between items-center pr-[5px] pl-[20px]">
                <input type="text"
                       className="w-[330px] border-none outline-none text-black placeholder:font-[Montserrat] text-[#BABABA] font-[600]"
                       placeholder="Поиск"/>
                <button
                    className="w-[32px] h-[32px]  rounded rounded-[50%] bg-[#C10016] flex justify-center items-center">
                    <img src={search}/>
                </button>
            </div>
            <h1 className="text-[16px] font-[Montserrat] font-[600]">Вход</h1>
        </div>
    )
}

export default Header