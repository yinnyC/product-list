import React, { useState } from 'react';
import data, { uniqueCategories } from './data';
import Inventory from './Inventory/Inventory';

import CatagoryList from './CatagoryList/CategoryList';
import ProductList from './ProductList/ProductList';
import Header from './Header/Header';

import './App.css';

function App() {
  const [category, setCategory] = useState(['All']);
  return (
    <div className="App">
      <Header
        key="Productuify"
        titile="Productuify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CatagoryList
        category={category}
        onClick={(newCategory) => {
          if (newCategory !== 'All') {
            if (category.includes('All')) {
              setCategory([newCategory]);
            } else if (category.includes(newCategory)) {
              const index = category.indexOf(newCategory);
              category.splice(index, 1);
              setCategory([...category]);
            } else {
              setCategory([...category, newCategory]);
            }
          } else {
            setCategory(['All']);
          }
        }}
      />
      <ProductList
        category={category}
      />
      <Inventory />
    </div>
  );
}

export default App;

/*

- div.App <- category
  - Header
  - CatagoryList (div.CategoryList)
     - button
     - button
     - ...
  - ProductList (div.ProductList)
    - div
      - h2
      - p
      - p
      - small

 */
