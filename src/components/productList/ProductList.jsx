import './productList.css'
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Create & Inspire. It's Jestin</h1>
            <p className='pl-desc'>This is a creative portfolio that shows Jestin's web dev work and stunnin g portfolio and a whole lot more inside</p>
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