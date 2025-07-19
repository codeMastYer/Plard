import React from 'react';
import Genders from "./genders/Genders.jsx";
import Categories from "./categories/Categories.jsx";

function Home() {
    return (
        <div className=" w-full  px-[50px] pt-[50px]">
            <div className="  pr-[50px] flex w-full h-[80px] justify-between ">
                <Genders/>
                <Categories/>
            </div>

        </div>
    );
}

export default Home;