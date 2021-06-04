import React from 'react';
import { CatsAndCounts } from '../data';
import CatButton from './CatButton';
import './CatagoryList.css';

function CatagoryList(props) {
  const { category, onClick } = props;
  return (
    <div className="CatagoryList">
      {CatsAndCounts.map((obj) => {
        const { name, count } = obj;
        const className = category.includes(name) ? 'selected' : '';
        return <CatButton onClick={() => onClick(name)} name={name} count={count} className={className} />;
      })}
    </div>
  );
}

export default CatagoryList;
