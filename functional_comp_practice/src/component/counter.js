import React, {useState, useEffect} from 'react';

const Count = () => {
    const [count, setCount] = useState(0) //initializing count to 0
    const [square, setSquare] = useState(0)

    useEffect(() =>{
        setSquare(count*count) //in useEffect I am squaring count
    },[count]); //dependency is count. i.e, whenever the value of count changes, the useEffect will be called. (and we are changing the value of count directly in the button onclick)

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <h1>Square: {square}</h1>
        </div>
    )
}

export default Count;