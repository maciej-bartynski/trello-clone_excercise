import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';

const ListWrapper = styled.div`
    box-sizing: border-box;    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 1% auto 0 auto;
    width: 99%;
    @media only screen and (min-width: 992px){
        width: 90%;
    }  
`;

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
            <ListWrapper>
                {array}
            </ListWrapper>
        );
    }
}

export default ListsContainer;