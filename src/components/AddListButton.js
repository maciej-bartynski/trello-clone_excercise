import React from 'react';
const positioner={
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
}
const addpanelstyle = {
    width: '100%',
    height: '30px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: 'blue 1px solid',
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    gridTemplateRows: 'auto'
}

const addinputstyle = {
    width: '100%',
    height: '100%',
    background: 'white',
    color: 'blue',
    border: 'none',
    outline: 'none',
    paddingLeft: '2%'
}

const addbuttonstyle = {
    width: '101%',
    height: '101%',
    background: 'blue',
    color: 'white',
    border: 'none',
    outline: '0',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem'
}

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
            <div className='gridcontainer' style={positioner}>
                <div style={addpanelstyle} >
                    <input style={addinputstyle} id="newlistname" type="text"/>
                    <button style={addbuttonstyle} id="addnewlist">New list</button>
                </div>
            </div>
        );
    }
}
export default AddListButton;