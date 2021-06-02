import { CatsAndCounts } from '../data';
import './CatagoryList.css';

function CatagoryList(props)
{
  const { category, onClick } = props
  return (
    <div className='CatagoryList'>
        {CatsAndCounts.map((obj)=>{
          const {name,count} = obj
          const className = category.includes(name) ? 'selected' : ''
          return (
          <button
            key = {name}
            className={className}
            onClick={ () => onClick(name) }
          >
            {name} 
            <span> {count} </span>
          </button>)
        })}
    </div>
  )
}

export default CatagoryList