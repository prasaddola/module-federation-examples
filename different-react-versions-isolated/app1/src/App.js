import React from 'react';
import ReactDOM from 'react-dom';
// import { inject, cleanup } from 'app2/appInjector';

// const parentElementId = 'parent';

// const App = () => {
//   useEffect(() => {
//     inject(parentElementId);
//     return () => cleanup(parentElementId);
//   }, []);

//   // App2 will be injected in the div with parentElementId
//   return (
//     <div>
//       <h1>Host Application - React Version {React.version}</h1>
//       <h2>App 1</h2>
//       <div id={parentElementId}></div>
//       {/* <App2 /> */}
//     </div>
//   );
// };
// import LocalButton from './Button';
import SubRoute from  "./SubRoute";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Home = () => {
  console.log("App2 Home component called");
  return(<div
    style={{ border: '1px red solid' }}
    data-e2e="SHARED__REACT_BLOCK"
  >
    <h1>Remote Application - React Version {React.version}</h1>
    <h2>App 2</h2>
    <Link to="subroute">navigate to subroute</Link>
    {/* <LocalButton /> */}
  </div>)
}
const App = () => {
  console.log("React.version in app1", React.version)
  console.log("ReactDOM.version in app1", ReactDOM.version)
  // return <div>App1</div>
  return (
   <BrowserRouter basename='/app1'>
    <Routes>
      <Route path='/' component={Home} />
      <Route path="/subroute" component={SubRoute} />
    </Routes>
  </BrowserRouter>
)};

export default App;
