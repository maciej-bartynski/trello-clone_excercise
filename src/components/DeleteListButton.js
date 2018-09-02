import React from 'react';
//WARNING: this file containt inline styles
//Style object is at the bottom of this document
var deleteliststyle;

class DeleteListButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            address: 'delete'+this.props.objectid 
        }
        this.DeleteList = this.DeleteList.bind(this);
    }
    DeleteList() {
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]=null;
        currentData = currentData.filter(function(item){
            if(item!==null){
                return item;
            }
        })
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount() {
        let btn = document.getElementById(this.state.address);
        btn.addEventListener('click', this.DeleteList);
    }
    render() {
        return (
            <button style={deleteliststyle} id={this.state.address}>
                <i className="fas fa-trash"></i>
            </button>
        );
    }
}
export default DeleteListButton;

deleteliststyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'rgba(205,0,50,0.7)',
    cursor: 'pointer',
    color: 'rgba(0,0,255,0.4)',
    fontSize: '25px',
    border: 'none',
    borderRadius: '3px',
    width: "100%",
    height: "100%",
    padding: '0',
    margin: '0'
}