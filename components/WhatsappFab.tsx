import React from 'react'
import {FaWhatsapp} from "react-icons/fa"
import Link from 'next/Link'

function WhatsappFab() {
    return (
       
        <Link href='#'>
             <div className="w-[55px] h-[55px] flex items-center justify-center fixed text-[23px] text-white rounded-full bottom-6 right-6 bg-[#01D140]">
            <FaWhatsapp/>
            </div>
        </Link>
      
    )
}

export default WhatsappFab
