import React from 'react';
import AddListButton from './AddListButton.js';

const ico = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 5px',
    borderRadius: '50px',
        width: '20px',
        height: '20px',
        fontSize: '0.7rem',
        cursor: 'pointer'
}
const icoh = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 5px',
    border: 'solid 1px white',
    borderRadius: '50px',
    width: '20px',
    height: '20px',
    fontSize: '0.7rem'
}

const user = {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer'
}

const addusers = {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer'
}

const help = {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer'
}

class Header extends React.Component {
    render(){
        return(
            <header className='header'>
                <div className='user' style={user}>
                    <i style={ico} className='fas fa-user'></i>
                    <p>Jon Snow</p>
                </div>
                <div className='addusers' style={addusers}>
                    <i style={ico} className='fas fa-plus'></i>
                    <p>Add someone!</p>
                </div>
                <AddListButton newstorage={this.props.newstorage}/>
                <div className='help' style={help}>
                    <p>When you know nothing...</p>
                    <i style={icoh} className='fas fa-question'></i>
                </div>
            </header>
        );
    }
}
export default Header;