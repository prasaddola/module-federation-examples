import React from 'react';
import ReactDOM from "react-dom";
import SubRoute from  "./SubRoute";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Home = () => {
  return(<Link to="subroute">navigate to subroute in MFE</Link>)
}
const App = (props) => {
  console.log("props from shell", props);
  // return <Home/>
  return (
    <div>
      <h1>{props.userName}</h1>
   <BrowserRouter basename='/inject'>
    <div
      style={{ border: '5px red solid', margin: "10px" ,padding: "10px" }}
      data-e2e="SHARED__REACT_BLOCK"
    >
        <h1>Remote Mfe </h1>
        <p>React - {React.version}</p>
        <p>ReactDOM - {ReactDOM.version}</p>
        <p>react-router-dom - 6.3.0</p>

        <h3>This uses a different react version and mounted into dom with it's own ReactDOM.render</h3>
        <h3>Not a child in shell's react component tree</h3>
 
        <Routes element>
          <Route path='/' element={<Home/>} />
          <Route path="/subroute" element={<SubRoute/>} />
        </Routes>
   </div>
      
  </BrowserRouter>
  </div>
)};

export default App;
