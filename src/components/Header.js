import React from 'react';
import {HeaderElement} from './styl-comp-main.js';
import UserButton from './header/UserButton.js';
import AddListButton from './header/AddListButton.js';
import HelpButton from './header/HelpButton.js';
import ContributorsButton from './header/ContributorsButton.js';

class Header extends React.Component {
    render(){
        return(
            <HeaderElement>
                <UserButton/>
                <ContributorsButton/>
                <HelpButton/>
                <AddListButton newstorage={this.props.newstorage}/>
            </HeaderElement>
        );
    }
}
export default Header;