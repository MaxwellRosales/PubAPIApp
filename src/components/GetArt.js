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
  else { //Actual return if data has been loaded
    console.log(items.data[0].title)
    items.data.map((item) => {<li>{item.id}</li>})

    //Create a list item for each painting in the array
    let artworks = items.data.map(item => 
      <li>{item.title} by {item.artist_title}</li>
    );

    return(
      <div>
        <h1>{Object.keys(items.data).length }</h1>
        <ul>{artworks}</ul>
      </div>
    );
  }
}

export default GetArt;

