import React, { useState } from 'react'
import MainCards from './MainCards';

const MainPage = () => {
    const [data,setData] = useState();
    const [search,setSearch] = useState("");
    const [message,setMessage] = useState("");
    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

    const myFun =async () =>{
        if(search == ""){
            setMessage("Please enter something")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const jsonData = await get.json();
            // console.log(jsonData.meals);
            setData(jsonData.meals);
            setMessage("");
        }
    }


  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className='container'>
        <div className="searchBar">
            <input type="text" placeholder='Enter Dish' onChange={handleInput}  />
            <button onClick={myFun}>Search</button>
        </div>
        <h3 className='error'>{message}</h3>
        <div>
            <MainCards details={data} />
        </div>
    </div>
    </>
  )
}

export default MainPage