import React, { Component } from 'react';
import './App.css';
import './database/initialdata.js';
import ListsContainer from './components/ListsContainer.js';
import Header from './components/Header.js';

const appstyle = {
  minHeight: '100vh',
  paddingTop: '10px',
  paddingLeft: '5%',
  backgroundColor: 'rgba(0,0,255,0.5)',
  dispaly: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: JSON.parse(localStorage.getItem('initialData'))
    }
    this.newStorage = this.newStorage.bind(this);
  }
  newStorage(){
    this.setState({
      data: JSON.parse(localStorage.getItem('initialData'))
    })
    console.log('i am trigerred')
  }
  render() {
    return (
      <div style={appstyle}>
        <Header newstorage={this.newStorage}/>
        <ListsContainer 
          data={this.state.data}
          newstorage={this.newStorage}
        />
      </div>
    );
  }
}

export default App;
