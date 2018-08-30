import React from 'react';
import Card from './Card.js';
import DeleteListButton from './DeleteListButton.js';
import AddCardButton from './AddCardButton.js';

const listtitlestyle = {
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: 'blue'
}

var liststyle = {
    width: '30%',
    minWidth: '300px',
    marginRight: '1%',
    marginBottom: '10px',
    border: 'solid 1px blue',
    borderRadius: '10px',
    backgroundColor: 'white',
    padding: '20px 1%'
}

var managingpanelstyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '70% 20%',
    gridColumnGap: '8%',
    gridTemplateRows: 'auto',
}

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
            <div className='list' style={liststyle}>
                <div style={managingpanelstyle}>
                    <AddCardButton
                        newstorage={this.props.newstorage}
                        objectid={this.props.objectid}
                    />
                    <DeleteListButton
                        newstorage={this.props.newstorage}
                        objectid={this.props.objectid}
                    />
                </div>
                <h2 style={listtitlestyle}>{this.props.listdata.column}</h2>
                {array}
            </div>
        ) 
    }
}
export default List;