import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBox = () => {
    return (
        <div className=" h-16 py-2.5 px-4 bg-white w-[80vh]">
            <div className=" relative max-w-screen-lg outline-none flex  items-start rounded-md box-border mx-auto my-0 py-3  bg-purple-100">
                <span className="relative my-auto ml-0 text-2xl  pl-2 pr-1 text-gray-400"><BiSearch/></span>
                <input className="bg-purple-100 outline-none border-none" type="text" name="search" id="search" placeholder="Search for products... "  />
            </div>
        </div>
    );
};

export default SearchBox;