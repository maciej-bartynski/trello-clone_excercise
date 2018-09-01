import React from 'react';
import  MoveButton from './MoveButton.js';
import DeleteButton from './DeleteButton.js';
import Paragraph from './Paragraph.js';
import SetDate from './SetDate.js';
import CardSettings from './CardSettings.js';
var cardstyle = {
    width: '98%',
    marginRight: '1%',
    //border: '1px blue solid',
    borderRadius: '6px',
    marginBottom: '10px',
    paddingBottom: '10px',
    overflow: 'hidden'
}
const managingpanelstyle = {
    width: '100%',
    padding: '6px',
    marginBottom: '3px',
    color: 'blue',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,255,0.4)'
}
const titlestyle ={
    width: '100%',
    textAlign: 'center'
}

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
            <div className='list' style={cardstyle}>
                <div style={managingpanelstyle}>
                    Move to {tab} <DeleteButton
                        cardid={this.props.cardid}
                        objectid={this.props.objectid}
                        btnid={tab.length}
                        newstorage={this.props.newstorage}
                    />
                </div>
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
            </div>
        )
    }
}
export default Card;
