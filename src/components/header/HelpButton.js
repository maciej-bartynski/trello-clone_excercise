import React from 'react';
import styled from 'styled-components';
import {LastDivElement} from './s-c-header';
import HelpContainer from './HelpContainer';

class HelpButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            display: styled.div `
                        position: absolute;
                        top: 100%;
                        left: 0;
                        display: none;
                    `,
            counter: true
        };
        this.setDisplayOrNot = this.setDisplayOrNot.bind(this);
    }
    setDisplayOrNot(){
        if (this.state.counter){
                this.setState({
                    display: styled.div `
                        position: absolute;
                        top: 0;
                        width: 100%;
                        left: 0;
                        display: flex;
                    `,
                    counter: false
                })
        } else {
            this.setState({
                    display: styled.div `
                        position: absolute;
                        top: 0;
                        width: 100%;
                        left: 0;
                        display: none;
                    `,
                    counter: true
                })
        }
    }
    render(){
        return(
            <LastDivElement onClick={this.setDisplayOrNot}>
                <p className="firstparag">When you know nothing...</p>
                <i className='fas fa-question firsticon'></i>
                <HelpContainer displayOrNot={this.state.display}/>
            </LastDivElement> 
        );
    }
}

export default HelpButton;