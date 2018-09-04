import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    background: rgba(50,50,105,0.99);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    div {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
        border-top: 1px solid rgba(0,0,255,0.5)
    }
    i {
       width: 30px;
       margin: 0;
    }
    p {
        padding: 0 15px
    }
    @media only screen and (max-width: 800px){
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
    }
`;
class HelpContainer extends React.Component {
    render() {
        var Positioner = this.props.displayOrNot;
        return(
            <Positioner>
                <Container>
                    <p>New here? Let's learn together:<br/>
                    (or tap to return)</p>
                    <div>
                        <i className="fas fa-list"></i>
                        <p>Head bar (top of the screen): type name and tap list icon to add new, empty List</p>
                    </div>
                    <div>
                        <i className="fas fa-trash"></i>
                        <p>List (column): tap red icon at the top right corner to delete this List, along with all cards included</p>
                    </div>
                    <div>
                        <i className="fas fa-thumbtack"></i>
                        <p>List (column): type name of task and add an empty, named Card</p>
                    </div>
                    <div>
                        <i className="fas fa-home"></i>
                       <p>Card (tilt): tap default home icon to set Task Icon - just for fun</p>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-plus"></i>
                        <p>Card (tilt): set the difficulty level and priority</p>
                    </div>
                    <div>
                        <i className="fas fa-calendar-alt"></i>
                        <p>If deadline is set,
                            green bar means: chill, there is still a plenty of time.
                            Yellow: be stressed, deadline is coming!
                            Red: chill again, it's to late</p>
                    </div>
                </Container>
            </Positioner> 
        );
    }
}

export default HelpContainer;
