import React from 'react';
class TaskIcon extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            address: 'taskicon' + this.props.objectid + this.props.cardid,
            stylize: {
                fontSize: '19px',
                color: 'white',
                overflow: 'hidden',
                backgroundColor: 'blue',
                borderRadius: '50%',
                width: '33px',
                height: '33px',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                cursor: 'pointer',
            },
            change: true,
            icons: ['fas fa-home', 'fas fa-utensils', 'fas fa-user-md', 'fas fa-user', 'fas fa-car', 'fas fa-shopping-cart', 'fas fa-apple-alt', 'fas fa-cog', 'fas fa-wrench', 'fas fa-suitcase'],
            icostyle: {
                width: '12px',
                height: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'gray',
                cursor: 'pointer'
            }
        }
        this.seticon = this.seticon.bind(this);
        this.changethis = this.changethis.bind(this);
        this.setstatechange = this.setstatechange.bind(this);
    }
    setstatechange(){
        this.setState({
            change: false
        })
    }
    changethis = (e) => {
        let arr = this.state.icons;
        let id = arr.indexOf(e.target.getAttribute('class'));
        this.setState({
            change: true,
        });
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]['cards'][this.props.cardid]['sets'][2] = id;
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    seticon = () => {
        const array = this.state.icons;
        return array[this.props.sets[2]];
    }
    render(){
            let allicons=[];
            let alliconsset = (arr, its) => {
                arr.forEach(function(item, id){
                    allicons.push(<i style={its.state.icostyle} key={id} className={item} onClick={its.changethis}></i>);
                })
            }
            alliconsset(this.state.icons, this);
            if(this.state.change){
                return (<div id ={this.state.address} style={taskiconbeltstyle}>
                    <i onClick={this.setstatechange} style={this.state.stylize} className={this.seticon()}></i>
                </div>)
            } else {
                return (
                    <div id={this.state.address} style={taskiconbeltstyle}>
                        <div style={setnewiconstyle}>{allicons}</div>
                    </div>
                )
            }
    }
}
export default TaskIcon;

var taskiconbeltstyle= {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px'
}

var setnewiconstyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}
