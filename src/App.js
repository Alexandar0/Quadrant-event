import React, { Component } from 'react';
import './App.css';

import Container1 from './containers/container1';
import Container2 from './containers/container2';
import Container3 from './containers/container3';
import Container4 from './containers/container4';

class App extends Component {


  render() {

    return (
  <div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark"><a className="navbar-brand" href="null">Quadrant Event</a></nav>  <br />
      <div>
       <div className="row">
           <div className="col-md-6">
               <div className="container">
               <Container1/>
               </div>
           </div>
           <div className="col-md-6">
               <div className="container">
               <Container2/>
               </div>
           </div>
           </div>
           <div className="row">
           <div className="col-md-6">
               <div className="container">
               <Container3/>
               </div>
           </div>
           <div className="col-md-6">
               <div className="container">
               <Container4/>
               </div>
           </div>
       </div>
   </div>
       

  </div>
  );
}
}
export default App;
