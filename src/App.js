import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';
import Items from './components/items';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    items:[
      {
        id:1
      },
      {
        id:2
      }
    ]
  }
}
  render() {
  return (
   <div className="wrapper">
    <Header/>
    <Items items={this.state.items}/>
    <Footer/>
   </div>
  );
}
}


export default App;
