import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>EAST CLOTHING</title>
        </Helmet>
             <div>
                <Slider/>
                 <div className="cards">
                     <Link to = '/shop/?cg=women'><Cardscg title='Women'/></Link>

                     <Link to = '/shop/?cg=Men'><Cardscg title='Men'/></Link>
                     <Link to = '/shop/'><Cardscg title='Accessoires'/></Link>                 
                     </div>
                <CgDiv/>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home
