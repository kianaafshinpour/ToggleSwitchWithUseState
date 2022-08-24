import React from "react";
import{ useState } from "react";
import toUpperCase from './components/toUpperCase'
function App (){
  const [myString,setMyString] = useState('hello my name is kiana');
  const toUpperCase = ()  => {
    setMyString()
  }
  return(
    <>
    <p>the string is : hello my name is kiana</p>
    <button onClick={toUpperCase}>click here to see the upper cased string</button>
    <p className={""}></p>
    </>
  );
}
export default App;
