import { number } from 'prop-types';
import React,{useState, useCallback ,  } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListDetails from './listdetails';
 

function UseCallbackHook({ match }) {
    const { path } = match;
    
    const [counter,setCounter] = useState(0);
    const [dark,setDark] = useState(false);

    // const getItems   = useCallback( () =>{
    //     return [counter , counter + 1 , counter + 2 ]
    // },[counter])

    const getItems = () => {
        return [counter , counter + 1 , counter + 2 ]
    } 
   
    const themeStyles = { 
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black' 
    }

    return (
        <div style={themeStyles}>
            <h1>React - useCallback Hook </h1> 
            <input type="counter" value={counter} onChange={ e => setCounter(parseInt(e.target.value))} /> <br/><br/>
            <button  onClick={() => setDark( prevDark => ! prevDark)}> Change the Theme</button> <br/><br/>
            
            <ListDetails   getItems={getItems}/>
           
        </div>
    );
 
}

export { UseCallbackHook };