
import React from 'react';
import { useState } from 'react';
import items from './data'
import Menu from './Menu';
import Catagories from './Catagories';
import './App.css';
const allCatagories =['all',...new Set(items.map((item)=>item.category))];
console.log(allCatagories)

function App() {
  const [menuItems, setMenuItems] =useState(items);
  const [catagories,setCatagories] = useState(allCatagories);
  const filterItems = (catagory)=>{
    if(catagory==='all'){
      setMenuItems(items)
      return;
    }
    const newItem = items.filter((item)=>item.category===catagory)
    setMenuItems(newItem)
    console.log(newItem)
  }
  return (
   <main>
    <div className="menu section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
        <Catagories catagories={catagories} filterItems={filterItems}/>
        <Menu  items={menuItems}/>
      </div>
    </div>
   </main>
  );
}

export default App;