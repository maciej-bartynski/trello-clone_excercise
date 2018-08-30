import React, {
    Component
} from 'react';

const dateinputstyle = {
    borderRadius: '3px',
    border: 'solid 1px blue',
    outline: 'none',
    marginRight: '10px',
}
class SetDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ' ' + this.props.objectid + this.props.cardid + 'date',
            stylethis: {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: 'blue',
                padding: '1px 0 1px 5px',
                flexWrap: 'wrap',
                backgroundColor: this.props.markup
            }
        }
        this.deadline = this.deadline.bind(this);
    }
    deadline() {
        let date = document.getElementById(this.state.address);
        document.getElementById(this.state.address + 'outp').innerText = date.value;
        document.getElementById(this.state.address + 'info').innerText = ' Deadline: ';
        let currentData = JSON.parse(localStorage.getItem('initialData'));
        currentData[this.props.objectid]['cards'][this.props.cardid]['date'] = date.value;
        //color part
        var setColor;
        let year = parseFloat(date.value.charAt(0) + date.value.charAt(1) + date.value.charAt(2) + date.value.charAt(3));
        let month = parseFloat(date.value.charAt(5) + date.value.charAt(6));
        let day = parseFloat(date.value.charAt(8) + date.value.charAt(9));
        let currentDate = new Date();
        let currDay = parseFloat(currentDate.getDate());
        let currMonth = parseFloat(currentDate.getMonth()+1);
        let currYear = parseFloat(currentDate.getFullYear());
        
        let currTotal = ((currYear-2000)*12)+currMonth;
        let setTotal = ((year - 2000) * 12) + month;
        if (currTotal>setTotal){
            setColor = 'rgba(255,0,0,0.4';
        } else if (currTotal === setTotal) {
            if (currDay > day) {
                setColor = 'rgba(255,0,0,0.4)';
            } else if ((currDay > (day - 3)) && (currDay <= day)) {
                setColor = 'rgba(255,255,0,0.7)';
            } else {
                setColor = 'rgba(0,255,0,0.4)';
            }
        } else {
            setColor = 'rgba(0,255,0,0.4)';
        }
        //
        currentData[this.props.objectid]['cards'][this.props.cardid]['color'] = setColor;
        localStorage.setItem('initialData', JSON.stringify(currentData));
        this.props.newstorage();
    }
    componentDidMount() {
        let date = document.getElementById(this.state.address);
        let its = this;
        date.addEventListener('change', function(){
            its.deadline();
        })
    }
    render() {
        return (
            this.props.date?
                <div style={this.state.stylethis}>
                    <input style={dateinputstyle} id={this.state.address} type='date'/>
                    <div id={this.state.address+'info'}>Deadline:</div>
                    <div id={this.state.address+'outp'}>{this.props.date}</div>
                </div>
            :
                <div style={this.state.stylethis}>
                    <input style={dateinputstyle} id={this.state.address} type='date'/>
                    <div id={this.state.address+'info'}></div>
                    <div id={this.state.address+'outp'}></div>
                </div>
           );
    }
}

export default SetDate;