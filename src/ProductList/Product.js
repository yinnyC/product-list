

function Product(props) {
  const {name,description,price,category,rating,units} = props
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <small>Category: {category} | Units: {units} | Rating: {rating} </small>
    </div>
  )
}

export default Product;