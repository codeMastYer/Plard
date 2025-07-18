import React from 'react';
import Genders from "./genders/Genders.jsx";
import Categories from "./categories/Categories.jsx";

function Home() {
    return (
        <div className="border w-full  px-[50px] pt-[50px]" >
         <div className="flex w-full h-[80px] border border-red-400">
             <Genders/>
             <Categories/>
         </div>

        </div>
    );
}

export default Home;