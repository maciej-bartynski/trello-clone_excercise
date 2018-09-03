import styled from 'styled-components';
export const HeaderElement = styled.header`
    -webkit-box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);

    font-size: 14px;

    margin-left: 0;
    margin-top: -10px;
    box-sizing: border-box;
    border-radius: 0;
    padding: 5px;
    background-color: rgba(0, 0, 255, 0.2);
    transition: background-color 600ms;
    transition: -webkit-box-shadow 600ms;
    transition: -moz-box-shadow 600ms;
    transition: box-shadow 600ms;

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 14fr;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    grid-template-rows: auto auto;

    @media only screen and (min-width: 992px){
        margin-left: 5%;
        margin-top: 0;
        border-radius: 5px;
        width: 90%;
        display: grid;
        grid-template-columns: 4fr 4fr 10fr 8fr;
        grid-column-gap: 2px;
        grid-template-rows: auto;
    }

    @media only screen and (min-width: 1260px){
        margin-left: 5%;
        margin-top: 0;
        border-radius: 5px;
        width: 90%;
        display: grid;
        grid-template-columns: 3fr 5fr 16fr 8fr;
        grid-column-gap: 2px;
        grid-template-rows: auto;
    }

        &:hover {
            background-color: rgba(0, 0, 255, 0.82);
            -webkit-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
            -moz-box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
            box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.41);
        }

`;