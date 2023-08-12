import * as React from 'react';
import Child from './Child'
import './style.css';

export default function App() {
  const name = 'Prop'
  return (
    <div>
      <h1>React Workshop!</h1>
      <h2>React Props</h2>
      <Child  name={name}/>
    </div>
  );
}

