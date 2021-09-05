
//https://www.youtube.com/watch?v=VywxIQ2ZXw4&t=342s

import React, {useState, useEffect} from 'react'

import GetArt from './GetArt';
import '../css/Mainpage.css'

function Mainpage(props){

    //If you use ()'s without props, it will be a single function call. 
    //If done with props: {() => {clickHandler(props)}}
    function clickHandler(){

        console.log("You clicked the button!")
    }

    const [clicks, setClicks] = useState(0);

    let base_url = "https://api.artic.edu/api/v1/artworks"
    let data = <GetArt url={base_url}/>

    return(
        <div className='App'>
            <div className="titlebutton">
                <h1>Welcome!</h1>        
            </div>
            <div>   
                <button onClick={()=>{setClicks(clicks+1)}}>Current clicks: {clicks} State resets after refresh</button>
            </div>
            <div>
                <button onClick={clickHandler}>Click and then check the console</button>
            </div>
            <h1>{data}</h1>
        </div>
    );
}

export default Mainpage;