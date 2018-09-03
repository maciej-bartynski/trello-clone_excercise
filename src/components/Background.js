import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
    background-image: url('./../images/office.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Background = () => {
    return <Bg/>
}

export default Background;