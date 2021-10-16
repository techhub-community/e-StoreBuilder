import React from 'react'
import {FiSearch,FiShoppingBag,FiMenu} from "react-icons/fi"
import {BiCategory,BiUser} from "react-icons/bi"
import styles from "./Navbar.module.css"
function NavOption({Icon,text}){
    return (
        <button className={styles.navButton}>
            {Icon}
            <span>{text}</span>
        </button>
    )

}
function Navbar() {
    return (
        <nav className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__main}>
                        <div className={styles.nav__left}>
                        <a href="#" className={styles.brand__logo}>E-store</a>
                        <div className={styles.nav__searchbar}><FiSearch/>
                        <input type="text" name="search" id="search" placeholder="Search"/>
                        </div>
                        </div>

                        <div className={styles.nav__right}>
                            <NavOption text="Categories" Icon={<BiCategory/>}/>
                            <NavOption text="Bag" Icon={<FiShoppingBag/>}/>
                            <NavOption text="Account" Icon={<BiUser/>}/>

                            <button className={styles.hamburger}>
                                <FiMenu/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
