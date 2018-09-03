import React, { Component } from 'react';
import './database/initialdata.js';
import {MainContainer} from './styl-comp-app.js';
import ListsContainer from './components/ListsContainer.js';
import Header from './components/Header.js';
import Background from './components/Background.js';

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
      <MainContainer>
        <Background/>
        <Header newstorage={this.newStorage}/>
        <ListsContainer 
          data={this.state.data}
          newstorage={this.newStorage}
        />
      </MainContainer>
    );
  }
}

export default App;
