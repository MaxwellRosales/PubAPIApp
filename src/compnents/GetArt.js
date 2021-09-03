import React, {useEffect, useState} from "react"





function GetArt(props){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let base_url = "https://api.artic.edu/api/v1/artworks"

  //render page and then make the api calls
  useEffect(()=>{
    fetch(base_url)
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
  else
    console.log(items.data[0])
    return(
      <h1>{items.data[0].id}</h1>
    );
}

export default GetArt;

