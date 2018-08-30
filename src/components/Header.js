import React from 'react';
import AddListButton from './AddListButton.js';

const headerstyle = {
    width: '90%',
    height: '60px',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.2)'
}

class Header extends React.Component {
    render(){
        return(
            <header className='header' style = {headerstyle}>
                <AddListButton newstorage={this.props.newstorage}/>
            </header>
        );
    }
}
export default Header;