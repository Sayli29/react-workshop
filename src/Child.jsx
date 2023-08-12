import React from 'react';

function Child(props){
    return(
        <>
        <p>hello I am {props.name}!</p>
        <p>hello I am object name {props.dataobj.name}</p>
        <p>hello I am object name {props.dataobj.age}</p>

        </>
    );
}

export default Child;