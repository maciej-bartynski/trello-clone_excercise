import React from 'react';
const deletebtnstyle = {
    border: 'solid 1px red',
    borderRadius: '5px',
    padding: '5px',
    background: 'red',
    cursor: 'pointer',
    color: 'white',
    marginRight: '1px'
}
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
            <button style={deletebtnstyle} id={this.state.address}>delete</button>
        );
    }
}
export default DeleteButton;