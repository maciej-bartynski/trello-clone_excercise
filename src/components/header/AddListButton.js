import React from 'react';
import {Positioner, Container} from './s-c-header';
//WARNING: element contains inline styles!
//Styles declared below are defined at the bottom of document. 
var addbuttonstyle;
var addinputstyle;
var addiconstyle;

class AddListButton extends React.Component {
    constructor(props){
        super(props);
        this.addNewList = this.addNewList.bind(this);
        this.count=0;
    }
    addNewList(){
        let name = document.getElementById('newlistname').value;
        name = name.trim().length>0?name:'New list '+this.count;
        this.count = this.count+1;
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData.push({column: name, cards: []});
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount(){
        let btn = document.getElementById('addnewlist');
        btn.addEventListener('click', this.addNewList);
    }
    render() {
        return (
            <Positioner>
                <Container>
                    <input style={addinputstyle} id="newlistname" type="text" placeholder="Shall we start a new List?"/>
                    <button style={addbuttonstyle} id="addnewlist">
                        <i style={addiconstyle} className="fas fa-clipboard-list"></i>
                    </button>
                </Container>
            </Positioner>
        );
    }
}
export default AddListButton;

addinputstyle = {
    background: 'rgba(255,255,255,0.3)',
    color: 'blue',
    border: 'none',
    outline: 'none',
    padding: '0',
    paddingLeft: '5px',
    fontSize: '16px',
    height: '40px',
}

addbuttonstyle = {
    width: '100px',
    height: '40px',
    color: 'white',
    border: 'none',
    outline: '0',
    background: 'rgba(255,255,255,0.4)',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}

addiconstyle = {
    fontSize: '25px',
    width: '40px',
    height: '40px',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    color: 'rgba(0,0,255,0.5)',
}
