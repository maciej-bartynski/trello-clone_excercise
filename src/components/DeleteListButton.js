import React from 'react';
const deleteliststyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    width: "100%",
    height: "100%",
    padding: '0', margin: '0'
}
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
            <button style={deleteliststyle} id={this.state.address}>Delete list</button>
        );
    }
}
export default DeleteListButton;