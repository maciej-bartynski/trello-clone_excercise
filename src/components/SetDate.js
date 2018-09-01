import React, {
    Component
} from 'react';

const dateoutputstyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    fontWeight: 'bolder',
    letterSpacing: '0.1rem',
    padding: '5px 1%'
}
const managingpanel = {
    width: '100%',
    backgroundColor: 'rgba(0,0,255,0.2)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bolder',
    letterSpacing: '0.1rem',
    padding: '10px 5%'
}
const dateinput = {
    backgroundColor: 'rgba(0,0,255,0.4)',
    border: 'solid 2px white',
    outline: '0',
    height: '35px',
    outline: '0',
    boxSizing: 'border-box',
    borderRadius: '5px 0 0 5px',
    borderLeft: 'none'
}
const btninput = {
    backgroundColor: 'rgba(0,0,255,0.7)',
    color: 'white',
    border: 'solid 2px white',
    borderLeft: 'none',
    borderRadius: '0 5px 5px 0',
    outline: '0',
    height: '35px',
    width: '50px',
    padding: '5px',
    boxSizing: 'border-box',
}
class SetDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: 'setdate' + this.props.objectid + this.props.cardid + 'date',
            stylethis: {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: 'blue',
                padding: '1px 0 1px 5px',
                flexWrap: 'wrap',
            },
            colorthis: {
                backgroundColor: this.props.markup
            }
        }
        this.deadline = this.deadline.bind(this);
        this.setthecolor = this.setthecolor.bind(this)
    }
    setthecolor(date){ 
       let year = parseFloat(date.innerText.charAt(0) + date.innerText.charAt(1) + date.innerText.charAt(2) + date.innerText.charAt(3));
       let month = parseFloat(date.innerText.charAt(5) + date.innerText.charAt(6));
       let day = parseFloat(date.innerText.charAt(8) + date.innerText.charAt(9));
       let currentDate = new Date();
       let currDay = parseFloat(currentDate.getDate());
       let currMonth = parseFloat(currentDate.getMonth() + 1);
       let currYear = parseFloat(currentDate.getFullYear());
       let currTotal = ((currYear - 2000) * 12) + currMonth;
       let setTotal = ((year - 2000) * 12) + month;
       if (currTotal>setTotal){
           return 'rgba(255,0,0,0.4)'
       } else if (currTotal<setTotal) {
            return 'rgba(0,255,0,0.4)'
       } else {
           if (currDay<day-3){
              return 'rgba(0,255,0,0.4)'
           } else if (currDay>day-3 && currDay<=day) {
                return 'rgba(255,255,0,0.4)'
           } else {
               return 'rgba(255,0,0,0.4)'
           }
       }
    }
    deadline() {
        let date = document.getElementById(this.state.address+'dateinp');
        if (date.value){
            let currentData = JSON.parse(localStorage.getItem('initialData'));
            currentData[this.props.objectid]['cards'][this.props.cardid]['date'] = date.value;   
            localStorage.setItem('initialData', JSON.stringify(currentData));
            this.props.newstorage();
        }
    }
    componentDidMount() {
        if(this.props.date){
            let dateDispaly = document.querySelector('#' + this.state.address + 'outp');
            dateDispaly.style.backgroundColor = this.setthecolor(dateDispaly)
        }
    }
    componentDidUpdate() {
        if (this.props.date) {
            let dateDispaly = document.querySelector('#' + this.state.address + 'outp');
            dateDispaly.style.backgroundColor = this.setthecolor(dateDispaly)
        }
    }
    render() {
        return (
            this.props.date?
                <div style= {dateoutputstyle} id={this.state.address+'outp'}>{this.props.date}</div>
            :
                <div style= {managingpanel}>
                    <input style={dateinput} id={this.state.address+'dateinp'} type='date'/>
                    <button onClick={this.deadline} style={btninput} id={this.state.address+'datebtn'}>Ok</button>
                </div>
           );
    }
}

export default SetDate;