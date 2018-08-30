import React, { Component } from 'react';
import List from './List';
var listcontainerstyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '90%',
    marginTop: '1%'
}
class ListsContainer extends Component {
    render () {
        let array = [];
        const eachListCreating = (data)=>{data.forEach((object, index, arr) =>{
            const alltitles = arr.map((item)=>{return item.column})
            array.push(
                <List 
                key={index} 
                objectid={index} 
                listdata={object} 
                alltitles={alltitles}
                newstorage={this.props.newstorage}
                />)
        })}
        eachListCreating(this.props.data);
        return(
            <div style={listcontainerstyle}>
                {array}
            </div>
        );
    }
}

export default ListsContainer;