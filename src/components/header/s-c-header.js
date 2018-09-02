import styled from 'styled-components';

export const DivElement = styled.div `
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    i {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        width: 40px;
        height: 40px;
        font-size: 15px;
        background: rgba(255, 255, 255, 0.5);
        color: rgba(0, 0, 255, 0.5);
        border: white;
        cursor: pointer;
    }
    p {
        display: none;
    }
    @media only screen and (min-width: 768px){
        p {
            display: block;
        }
        i {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            width: 40px;
            height: 40px;
            font-size: 15px;
            background: rgba(255, 255, 255, 0);
            color: rgba(255, 255, 255, 0.5);
            border: white;
        }
        &:hover i {
            background: rgba(255, 255, 255, 0.5);
            color: rgba(0, 0, 255, 0.5);
            border: white;
            cursor: pointer;
        }
    }
`;

export const LastDivElement = styled.div `
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    justify-content: flex-end;
    i {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border: white;
        cursor: pointer;
        width: 40px;
        height: 40px;
        font-size: 15px;
        background: rgba(255, 255, 255, 0.5);
        color: rgba(0, 0, 255, 0.5);
    }
    p {
        display: none;
    }
    @media only screen and (min-width: 768px){
        p {
            display: block;
        }
        i {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            width: 40px;
            height: 40px;
            font-size: 15px;
            background: rgba(255, 255, 255, 0);
            color: rgba(255, 255, 255, 0.5);
            border: white;
        }
        &:hover i {
            background: rgba(255, 255, 255, 0.5);
            color: rgba(0, 0, 255, 0.5);
            border: white;
            cursor: pointer;
        }
    }
    @media only screen and (min-width: 992px){ 
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 4;
        grid-column-end: 5; 
    }
`;

export const Positioner = styled.div `
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 16;
    @media only screen and (min-width: 992px){
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 3;
        grid-column-end: 4;
    }
`;

export const Container = styled.div `
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 100px;
    grid-template-rows: auto;
`;