import React, {useEffect, useState} from "react"

import '../css/GetArt.css'

function GetArt(props){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //render page and then make the api calls
  useEffect(()=>{
    fetch(props.url)
    .then(response => response.json())
    .then(
      (result) => {setItems(result); setIsLoaded(true);},
      (error) => {setError(error);setIsLoaded(true);})
  }, [])

  
  if (error){
    return (<div>Error something happened! {error.message}</div>);
  }
  else if (!isLoaded){
    return(<h1>Loading..</h1>)
  }
  else //Actual return if data has been loaded
    console.log(items.data[0])
    items.data.map((item) => {<li>{item.id}</li>})


    let i = 0;
    let artworks = [];
    for(artpiece in items.data){
      artworks.push(
        
      )
    }

    return(
      <div>
        <h1>{Object.keys(items.data).length }</h1>
        <ul>{idList}</ul>
      </div>
    );
}

export default GetArt;

