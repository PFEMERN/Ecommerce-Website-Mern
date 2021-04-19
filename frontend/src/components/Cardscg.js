import React from 'react'
import { Link } from 'react-router-dom'

const Cardscg = ({title}) => {
    return (
        <Link to = '/shop/?cg=Women'>

        <div className="cardscg">
            <h1>{title}</h1>
            <button className="ShopNowcg">Shop Now</button>
        </div>
        </Link>
    )
}

export default Cardscg
