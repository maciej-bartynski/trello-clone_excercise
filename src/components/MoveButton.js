import React from 'react';

//WARNING: this file contains inline styles
//Style object is at the bottom of this document;
var movebtnstyle;

class MoveButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            address: ' ' + this.props.objectid + this.props.cardid +this.props.btnid
        }
        this.moveTheCard=this.moveTheCard.bind(this);
    }
    moveTheCard(){
        //ok, that's the reason to use redux, give me 1 week and i will manage...
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        let cardToMove = currentData[this.props.objectid]['cards'][this.props.cardid];
        currentData[this.props.btnid]['cards'].push(cardToMove);
        currentData[this.props.objectid]['cards'][this.props.cardid]=null;
        currentData[this.props.objectid]['cards'] = (currentData[this.props.objectid]['cards']).filter(function(item){
            if (item!==null){
                return item;
            }
        });
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount(){
        let btn = document.getElementById(this.state.address);
        btn.addEventListener('click', this.moveTheCard)
    }
    render(){
        return(
            <button style={movebtnstyle} id={this.state.address}>
                {this.props.directory}
            </button>
        )
    }
}
export default MoveButton;

movebtnstyle = {
    border: 'solid 1px rgba(0,0,255,0.5)',
    borderRadius: '5px',
    padding: '5px',
    background: 'rgba(0,0,255,0.7)',
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'sans-serif',
    marginRight: '1px'
}