import React from 'react';
import Card from './Card.js';
import DeleteListButton from './DeleteListButton.js';
import AddCardButton from './AddCardButton.js';
import styled from 'styled-components';

const SingleList = styled.div`
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.21);
    padding: 20px 1%;
    box-sizing: border-box;
    
    -webkit-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
    box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);

    width: 100%;

    @media only screen and (min-width: 600px) {
        width: 49%;
    }

    @media only screen and (min-width: 1000px) {
        width: 32%;
    }
`;

const listtitlestyle = {
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: 'blue'
}

const ManagingPanel = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70% 20%;
    grid-column-gap: 8%;
    grid-template-rows: auto;
    overflow: hidden;
    border-radius: 3px;
`;

class List extends React.Component{
    render() {
        let array = [];
        const createCards = (data) => {
            array = [];
            return (
                data.forEach((card, idx)=>{
                    array.push(
                        <Card 
                            key={idx}
                            carddata={card}
                            alltitles={this.props.alltitles}
                            objectid={this.props.objectid}
                            cardid={idx}
                            newstorage={this.props.newstorage}
                        />
                    )
                })
            )
        }
        createCards(this.props.listdata.cards);
        return(
            <SingleList>
                <ManagingPanel>
                    <AddCardButton
                        newstorage={this.props.newstorage}
                        objectid={this.props.objectid}
                    />
                    <DeleteListButton
                        newstorage={this.props.newstorage}
                        objectid={this.props.objectid}
                    />
                </ManagingPanel>
                <h2 style={listtitlestyle}>{this.props.listdata.column}</h2>
                {array}
            </SingleList>
        ) 
    }
}
export default List;