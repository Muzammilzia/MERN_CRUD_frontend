import styled from "styled-components";

export const StyledRightPanel = styled.div`
    min-width: 500px;
    padding-bottom: 30px;
    margin-top: 50px;
    background-color: rgb(34, 34, 42);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledGetButton = styled.button`
    display: inline;
    width: 25%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    color: white;
    background: #1DA1F2;
    margin-left: 80px;
    height: 40px;
    border-radius: 20px;
    position: relative;
    top: -5px;
    cursor: pointer;
    font-weight: 900;
    transition: 0.5s;
    &:hover{
        transform: scale(1.1);
    }
`
export const StyledHeading = styled.h1`
    //background-color: rgb(34, 34, 42);
    //color: white;
    background-color: #efefef;
    width: 100%;
    margin: 0;
    border: 2px solid black;
    margin-bottom: 5px;
    border-radius: 15px;
    padding-left: 25px;
`
export const StyledUl = styled.ul`
    margin: 0;
    padding: 20px;
    background: #ecf0f3;
    margin-bottom: 5px;
    border-radius: 15px;
`

export const StyledLi = styled.li`
    list-style: none;
`
