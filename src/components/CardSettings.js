import React from 'react';

class CardSettings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            address: this.props.cardid+this.props.objectid+'tasksettings' 
        };
        this.priorclick = this.priorclick.bind(this);
        this.diffclick = this.diffclick.bind(this);
    }
    priorclick() {
        this.iconclick(0);
    }
    diffclick(){
        this.iconclick(1);
    }
    iconclick(value){
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]['cards'][this.props.cardid]['sets'][value] < 2 ?
        currentData[this.props.objectid]['cards'][this.props.cardid]['sets'][value] += 1
        :
        currentData[this.props.objectid]['cards'][this.props.cardid]['sets'][value] = 0;
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    render(){
        const setIcons = (value, string) => {
            let result = [];
            let colorthis = function(){
                    if (value===0){
                        return {color: 'green'};
                    } else if (value === 1){
                        return {color: 'orange'};
                    } else {
                        return {color: 'red'};
                    }
            }
            for (let i=0; i<=value; i++){
                result.push(<i key={this.state.address+i+string} style={colorthis()} className={string}></i>)
            };
            return result;
        }
        
        return(
            <div style={setspanelstyle}>
                <div style={prioritystyle} id={this.state.address+'prior'} onClick={this.priorclick}>
                    Priority: {setIcons(this.props.sets[0], 'fas fa-star')}
                </div>
                <div style={diffstyle} id={this.state.address+'diff'} onClick={this.diffclick}>
                    Difficulty: {setIcons(this.props.sets[1], 'fas fa-plus')}
                </div>
            </div>
        );
    }
}
export default CardSettings;

var prioritystyle={
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    letterSpacing: '0.1rem',
    color: 'blue',
    fontWeight: 'bolder',
    cursor: 'pointer',
    width: '65%',
    minWidth: '100px',
    marginBottom: '10px',
}

var diffstyle = {
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    letterSpacing: '0.1rem',
    color: 'blue',
    fontWeight: 'bolder',
    cursor: 'pointer',
    width: '65%',
    minWidth: '100px',
}

var setspanelstyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 5%'
}