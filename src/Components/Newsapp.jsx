import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Newsapp = () => {

  const [search,setSearch]=useState("pakistan")
  const [newsData,setNewsData]=useState(null) //api call
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;




const getData=async()=>{
  const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

  const data =await response.json();
  console.log(data.articles);
  setNewsData(data.articles)

}
const handleInput=(e)=>{
  console.log(e.target.value);
  setSearch(e.target.value)

}
useEffect(()=>{
  getData()
},[])

const userInput=(e)=>{
  setSearch(e.target.value)
}

  return (
    <div>
      <nav>
        <div><h1>Trendy News</h1></div>
        <ul className='ul'>
            <a>All News</a>
            <a>Trending</a>
        </ul>

        <div className='searchBar'>

            <input type="text" name="" placeholder='Search News' value={search}  onChange={handleInput} />
            <button onClick={getData}>Search</button>
        </div>

      </nav>

      <div className='head' >Stay Update with TrendyNews</div>
      <div className='categoryBtn bg-[#2DE1FC]'>
       <button  onClick={userInput} value="sports">sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
        
      </div>

      <div>
        {newsData?  <Cards data={newsData}/>:null}
      
      </div>


    </div>
  )
}

export default Newsapp
