import React, { Component } from 'react';
import styled from 'styled-components';

//WARNING: this file contains inline styles
//Style objects are at the bottom of this document;
var paragraphstyle;
var addbtnstyle;
var addinputstyle;

const ManagingPanel = styled.div`
    width: 100%;    
    background: rgba(0,0,255,0.3);
    display: grid;
    margin-bottom: -10px;
    padding: 5%;
    grid-template-rows: 50px 30px;
    grid-template-columns: 100%;
    border-radius: 3px;
    overflow: hidden;
    box-sizing: border-box;
`;

class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ' ' + this.props.objectid + this.props.cardid
        }
        this.describeTheCard = this.describeTheCard.bind(this);
    }
    describeTheCard(its) {

        let inputvalue = document.getElementById(its.state.address + 'inp').value.trim();
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[its.props.objectid]['cards'][its.props.cardid]['description'] = inputvalue;
        localStorage.setItem('initialData', JSON.stringify(currentData));
        its.props.newstorage();
    }
    componentDidMount() {
        if (document.getElementById(this.state.address + 'btn')!==null){
        let btn = document.getElementById(this.state.address+'btn');
        let its = this;
        btn.addEventListener('click', function(){
            if(document.getElementById(its.state.address + 'inp').value.trim().length>0){
                its.describeTheCard(its);
            }
        })
    }
    }
    render () {
        return(
            this.props.description.trim().length>0?
                <p style = {paragraphstyle}>
                    {this.props.description}
                </p>
            :
                <ManagingPanel>
                    <textarea id={this.state.address+'inp'} style={addinputstyle} type="text"></textarea>
                    <button id={this.state.address+'btn'} style={addbtnstyle}>Add description</button>
                </ManagingPanel>
        );
    }
}

export default Paragraph;

paragraphstyle = {
    width: '90%',
    marginLeft: '4%',
    lineHeight: '200%'
}
addbtnstyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,255,0.4)',
    color: 'white',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
}
addinputstyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'blue',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
}