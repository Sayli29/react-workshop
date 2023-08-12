import React from 'react';
import Child from './Child';
import State from './State';
import Effect from './Effect';
import './style.css';

export default function App() {
  const name = 'Prop';
  const obj = { name: 'jerry', age: 10 };
  const obj2 = { name: 'tom', age: 20 };
  return (
    <div>
      <h1>React Workshop!</h1>
      <h2>React Props</h2>
      <Child name={name} dataobj={obj} />
      <ChildApp dataobj2={obj2} /> 
      <State />
      <Effect />
    </div>
  );
}

function ChildApp({ dataobj2 }) {
  return (
    <>
      <p>childApp from App name here is {dataobj2.name}</p>
      <p>childApp from App age here is {dataobj2.age}</p>
    </>
  );
}
