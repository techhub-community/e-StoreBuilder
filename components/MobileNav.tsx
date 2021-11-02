import React, { useContext } from 'react'
import Link from 'next/Link'
import {FiSearch,FiShoppingBag} from "react-icons/fi"
import { BiUser, BiHome} from 'react-icons/bi'
import { AppContext } from '../contexts/AppContext'

type Props = {
    Icon :any;
    text: string;
}

function NavOption({Icon ,text}:Props){
    const {cart,setCart,user} = useContext(AppContext);
    return (
        <button  className="w-12 h-12 ml-4 flex flex-col items-center justify-center text-gray-500 relative ">
           <div className="text-2xl">
               {Icon}
            </div>
            <span className="text-md ">{text}</span>
            {text==="Bag" && <span className="absolute block w-5 h-5 bg-red-600 -top-1.5 right-0 border border-transparent rounded-full text-xs font-semibold  text-white">{cart.items.length}</span>}
        </button>
    )

}
const MobileNav = () => {
   
    return (
        <div>
             <div className="fixed ">
            <div className="w-screen h-2 mb-0 flex items-center justify-between lg:hidden ">
                <Link href="#">
                    <NavOption  text="Home" Icon={<BiHome/>}/>
                </Link>
                <Link href="#">
                    <NavOption  text="Search" Icon={<FiSearch/>}/>
                </Link>
                <Link href="#">
                    <NavOption  text="Bag" Icon={<FiShoppingBag/>}/>
                </Link>
                <Link href="#">
                    <NavOption  text="Account" Icon={<BiUser/>}/>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default MobileNav;