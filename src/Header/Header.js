import './Header.css';

function Header(props) {
  const {titile,productCount, categoryCount} = props
  return (
    <div className='Header'>
      <h1>{titile}</h1>
      <p>Product Count: {productCount}</p>
      <p>Category Count: {categoryCount}</p>
    </div>
  )
}

export default Header;