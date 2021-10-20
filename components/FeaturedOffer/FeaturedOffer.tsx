import React from 'react'
import styles from "./FeaturedOffer.module.css"
function FeaturedOffer({Image}) {
    return (
        <div className={styles.feature_offer_card}>
            <img src={Image} alt="" />
        </div>
    )
}

export default FeaturedOffer
