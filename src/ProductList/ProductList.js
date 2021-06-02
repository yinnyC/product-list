import data from '../data'
import Product from './Product'
import './ProductList.css'
function ProductList(props) {
  const { category } = props
  return(
    <div className='ProductList'>
        {data.filter(obj => category.includes(obj.category) || category[0] === 'All').map((obj) => {
            return (
              <Product key={obj.description} {...obj}/>
            )
          })}
      </div>
  )
}

export default ProductList;