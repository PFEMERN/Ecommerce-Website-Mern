import React from 'react'
import { Link } from 'react-router-dom'

const Cardscg = ({title}) => {
    return (

        <div className="cardscg">
            <h1>{title}</h1>
            <button className="ShopNowcg">Shop Now</button>
        </div>
    )
}

export default Cardscg
