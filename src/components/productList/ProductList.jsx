import './productList.css'
import Product from "../product/Product"
import {products} from "../../data"
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>My Portfolio</h1>
            <p className='pl-desc'>This is a creative portfolio that shows my web development works and projects, <button><Link to={'/portfolio'}>Click to view my detailed portfolio</Link></button></p>
        </div>
        <div className='pl-list'>
            {products.map((item)=> (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
            
         
        </div>
    </div>
  )
}

export default ProductList