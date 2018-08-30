import React from 'react';
const movebtnstyle = {
    border: 'solid 1px blue',
    borderRadius: '5px',
    padding: '5px',
    background: 'blue',
    cursor: 'pointer',
    color: 'white',
    marginRight: '1px'
}
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