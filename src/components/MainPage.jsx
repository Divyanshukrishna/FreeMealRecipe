import React, { useState } from 'react'
import MainCards from './MainCards';

const MainPage = () => {
    const [data,setData] = useState();
    const [search,setSearch] = useState();

    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

    const myFun =async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json();
        // console.log(jsonData.meals);
        setData(jsonData.meals);
    }


  return (
    <div className='container'>
        <div className="searchBar">
            <input type="text" placeholder='Enter Dish' onChange={handleInput}  />
            <button onClick={myFun}>Search</button>
        </div>
        <div>
            <MainCards details={data} />
        </div>
    </div>
  )
}

export default MainPage