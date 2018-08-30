import React, { Component } from 'react';
const paragraphstyle = {
    width: '90%',
    marginLeft: '4%',
    lineHeight: '200%'
}
const addparagraphstyle = {
    width: '90%',
    marginLeft: '4%',
    border: 'solid 1px blue'
}
const managingpanel = {
    width: '90%',
    marginLeft: '5%',
    display: 'grid',
    gridTemplateRows: '50px 30px',
    gridTempateColumns: '100%',
    border: 'solid 1px blue',
    borderRadius: '6px',
    overflow: 'hidden',

}
const addbtnstyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    outline: 'none'

}
const addinputstyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    color: 'blue',
    border: 'none',
    outline: 'none'
}
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
                <div style={managingpanel}>
                    <input id={this.state.address+'inp'} style={addinputstyle} type="text"/>
                    <button id={this.state.address+'btn'} style={addbtnstyle}>Add description</button>
                </div>
        );
    }
}

export default Paragraph;