import React from 'react';

//importing useState hook
import { useState } from 'react';


function State(){
    //Initialize useState
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({
        name: 'jerry',
        age: 10
    })

    

    const updateName = () => {
        setObj(previousState => {
            return { ...previousState, name: "tom" };
        });
    };

    return(
        <>
        //first set value of count 
        <h3>Initial count is {count}</h3>
        <button onClick={() => setCount(count+1)}>increament</button>
        <h3>object name is {obj.name}</h3>
        <h3>object name is {obj.age}</h3>
        <button onClick={updateName}>change name</button>
        </>
    );
}

export default State;