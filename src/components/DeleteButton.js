import React from 'react';

//WARNING: this file contains inline styles
//Style object is at the bottom of this document;
var deletebtnstyle;

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ' ' + this.props.objectid + this.props.cardid + this.props.btnid
        }
        this.removeTheCard = this.removeTheCard.bind(this);
    }
    removeTheCard() {
        //ok, that's the reason to use redux, give me 1 week and i will manage...
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]['cards'][this.props.cardid] = null;
        currentData[this.props.objectid]['cards'] = (currentData[this.props.objectid]['cards']).filter(function (item) {
            let toreturn;
            if (item !== null) {
                toreturn = item;
            }
            return toreturn;
        });
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount() {
        let btn = document.getElementById(this.state.address);
        btn.addEventListener('click', this.removeTheCard)
    }
    render () {
        return (
            <button style={deletebtnstyle} id={this.state.address}>
                <i className="fas fa-trash"></i> Trash
            </button>
        );
    }
}
export default DeleteButton;

deletebtnstyle = {
    border: 'solid 1px rgba(205,0,50,0.7)',
    outline: 'none',
    borderRadius: '5px',
    padding: '5px',
    background: 'rgba(205,0,50,0.7)',
    cursor: 'pointer',
    color: 'rgba(55,0,255,0.7)',
    marginRight: '1px'
}