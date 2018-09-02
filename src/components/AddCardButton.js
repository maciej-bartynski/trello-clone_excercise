import React from 'react';
import styled from 'styled-components';

const ManagingPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
`;

//WARNING: this file contains inline styles
//Style objects are at the bottom of the document
var inputstyle;
var btnstyle;

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
        currentData[this.props.objectid]['cards'].push({title: name, description: '', sets: [0,0,0,false]});
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount(){
        let btn = document.getElementById(this.state.address);
        btn.addEventListener('click', this.addNewCard);
    }
    render() {
        return (
            <ManagingPanel>
                <input style={inputstyle} id={this.state.address+'name'} type="text"
                    placeholder='Add task to this list'
                />
                <button style={btnstyle} id={this.state.address}>
                    <i className='fas fa-thumbtack'></i>
                </button>
            </ManagingPanel>
        );
    }
}
export default AddCardButton;

inputstyle = {
    width: '80%',
    height: '100%',
    border: 'none',
    outline: 'none',
    color: 'blue',
    paddingLeft: '2%',
    backgroundColor: 'rgba(255,255,255,0.5)',
}
btnstyle = {
    width: '20%',
    height: '40px',
    fontSize: '25px',
    border: 'none',
    outline: 'none',
    color: 'rgba(0,0,255,0.4)',
    backgroundColor: 'rgba(0,0,200,0.1)',
    cursor: 'pointer'
}