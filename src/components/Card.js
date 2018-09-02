import React from 'react';
import  MoveButton from './MoveButton.js';
import DeleteButton from './DeleteButton.js';
import Paragraph from './Paragraph.js';
import SetDate from './SetDate.js';
import CardSettings from './CardSettings.js';
import TaskIcon from './TaskIcon.js';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 99%;
    margin: 0 auto 10px auto;
    border-radius: 4px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.79);

    -webkit-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
    box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
`;

const ManagingPanel = styled.div `
    width: 100%;
    padding: 6px;
    margin-bottom: 3px;
    color: blue;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: rgba(0,0,255,0.4)
`;

//WARNING: this file contains inline styles
//Style object is at the bottom of this document
var titlestyle;

class Card extends React.Component {
    render(){
        let tab = [];
        const createMoveBtns = (directories) => {
            tab = [];
            directories.forEach((dir, idx)=>{
                tab.push(<MoveButton 
                    key={idx} 
                    directory={dir}
                    cardid={this.props.cardid}
                    objectid={this.props.objectid}
                    btnid={idx}
                    newstorage={this.props.newstorage}
                    />
                )
            })
        }
        createMoveBtns(this.props.alltitles);

        return(
            <CardWrapper>
                <ManagingPanel>
                    Move to {tab} <DeleteButton
                        cardid={this.props.cardid}
                        objectid={this.props.objectid}
                        btnid={tab.length}
                        newstorage={this.props.newstorage}
                    />
                </ManagingPanel>
                <TaskIcon
                    cardid={this.props.cardid}
                    objectid={this.props.objectid}
                    newstorage={this.props.newstorage}
                    sets={this.props.carddata.sets}
                />
                <h3 style={titlestyle}>{this.props.carddata.title}</h3>
                <SetDate
                    cardid={this.props.cardid}
                    objectid={this.props.objectid}
                    newstorage={this.props.newstorage}
                    date={this.props.carddata.date}
                    markup={this.props.carddata.color}
                />
                <CardSettings
                    cardid={this.props.cardid}
                    objectid={this.props.objectid}
                    newstorage={this.props.newstorage}
                    sets={this.props.carddata.sets}
                />
                <Paragraph
                    description={this.props.carddata.description}
                    cardid={this.props.cardid}
                    objectid={this.props.objectid}
                    newstorage={this.props.newstorage}
                />
            </CardWrapper>
        )
    }
}
export default Card;

titlestyle = {
    width: '100%',
    textAlign: 'center'
}