import React from 'react'
import {FaWhatsapp} from "react-icons/fa"
import styles from "./WhatsappFab.module.css"
function WhatsappFab() {
    return (
        <a href='#' className={styles.whatsapp_fab}>
            <FaWhatsapp/>
        </a>
    )
}

export default WhatsappFab
