import React from 'react';
const panelstyle = {
    width: '100%',
    height: '100%',
    border: 'blue solid 2px',
    display: 'flex',
    borderRadius: '6px',
    overflow: 'hidden'
}
const inputstyle = {
    width: '80%',
    height: '100%',
    border: 'none',
    outline: 'none',
    color: 'blue',
    paddingLeft: '2%'
}
const btnstyle = {
    width: '20%',
    height: '100%',
    border: 'none',
    outline: 'none',
    color: 'white',
    backgroundColor: 'blue',
}
class AddCardButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            address: 'addnewcard'+this.props.objectid
        }
        this.addNewCard = this.addNewCard.bind(this);
        this.count=0;
    }
    addNewCard(){
        let name = document.getElementById(this.state.address+'name').value;
        name = name.trim().length>0?name:'New task '+this.count;
        this.count = this.count+1;
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]['cards'].push({title: name, description: ''});
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount(){
        let btn = document.getElementById(this.state.address);
        btn.addEventListener('click', this.addNewCard);
    }
    render() {
        return (
            <div style={panelstyle}>
                <input style={inputstyle} id={this.state.address+'name'} type="text"/>
                <button style={btnstyle} id={this.state.address}>New card</button>
            </div>
        );
    }
}
export default AddCardButton;