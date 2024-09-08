import React from 'react'

const Cards = ({data}) => {

const readMore=(url)=>{
   window.open(url)
}


  console.log(data)
  return (
    <div className='cardContainer'>
      {data.map((curItem,index)=>{

        if(!curItem.urlToImage){
          return null;
        }
        else{
          return(
            <div key={index} className='card'>
              <div className='Content'>
                <img src={curItem.urlToImage} alt="" />
                <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                <p>{curItem.description}</p>
                <p>{curItem.publishedAt}</p>
                <button className='cardbtn' onClick={()=>window.open(curItem.url)}>Read More</button>
              </div>
            </div>
          )

        }



      })}
    
      
    </div>
  )
}

export default Cards
