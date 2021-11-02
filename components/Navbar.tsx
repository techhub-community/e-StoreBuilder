import React, { useContext } from 'react'
import {FiShoppingBag,FiMenu} from "react-icons/fi"
import {BiCategory,BiUser} from "react-icons/bi"
import { AppContext } from '../contexts/AppContext'
import SearchBar from "../components/SearchBox"
import Link from 'next/Link'

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
function Navbar() {

    
    return (
        <div>
            <nav className="m-0 px-4 pt-4 h-16 lg:px-24 ">
            <div className="box-border  flex justify-between items-center h-12 max-w-full">
                <div className="flex">
                    <div>
                    <img src="#" alt="logo" className="rounded-full "/>
                    </div>     
                    <a  className="text-xl lg:hidden font-semibold cursor-pointer pl-2">Explore Store</a>
                </div>
                <div className="hidden lg:block">
                    <SearchBar/>
                </div>
                <div >
                   <div className="lg:flex items-center justify-center hidden" >
                        <NavOption  text="Categories" Icon={<BiCategory/>}/>
                        <NavOption text="Bag" Icon={<FiShoppingBag/>}/>
                        <NavOption text="Account" Icon={<BiUser/>}/>
                   </div>  
                    <button title="menu" className="lg:hidden block text-2xl">
                            <FiMenu/>
                    </button>
                </div>
            </div>   
            </nav>
            <div className=" mx-auto flex flex-row justify-center lg:hidden">
                <SearchBar/>
            </div>
            <div className="lg:flex justify-start items-center ml-24 hidden ">
                   <div className="p-2"> <Link href="#">Home</Link></div>
                    <div className="p-2"><Link href="#">Special Offers</Link></div>
                    <div className="p-2"> <Link href="#">Instagram</Link></div>
            </div>
           <hr></hr>
        </div>   
          
    )
}

export default Navbar
