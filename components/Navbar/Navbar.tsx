import React, { useContext } from 'react'
import {FiSearch,FiShoppingBag,FiMenu} from "react-icons/fi"
import {BiCategory,BiUser} from "react-icons/bi"
import styles from "./Navbar.module.css"
import { AppContext } from '../../contexts/AppContext'
function NavOption({Icon,text}){
    const {cart,setCart,user} = useContext(AppContext);
    return (
        <button className={styles.navButton}>
            {Icon}
            <span>{text}</span>
            {text==="Bag" && <span className={styles.cart_count}>{cart.items.length}</span>}
        </button>
    )

}
function Navbar() {

    const {user} = useContext(AppContext);
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
