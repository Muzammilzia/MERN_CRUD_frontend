import styled from "styled-components";

export const StyledFormContainer = styled.div`
    min-width: 100%;
    height: 400px;
    color: white;
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;
    transition: 1s;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 30px;
`

export const StyledLabel = styled.label`
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 4px;
    margin-top: 12px;
`

export const StyledSpan = styled.span`
    padding-left: 80px;
    font-size: 17px;
    font-weight: 900;
    position: relative;
    top: -5px;
`

export const StyledInput = styled.input`
    display: block;
    width: 70%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ecf0f3;
    margin-left: 70px;
    padding: 10px;
    padding-left: 20px;
    height: 40px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
`

export const StyledSubmit = styled.input`
    display: block;
    width: 60%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    color: white;
    margin-top: 20px;
    background: #1DA1F2;
    margin-left: 95px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    transition: 0.5s;
    &:hover{
        transform: scale(1.1);
    }
`

export const StyledContainer = styled.div`
    display: flex;
    min-width: 500px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    border-radius: 25px;
    overflow: hidden;
    background-color: rgb(34, 34, 42);
    //background-color: "ecf0f3";
`
export const StyledButton = styled.button`
    flex: 1;
    border-radius: 15px;
    font-weight: 900;
    font-size: 15px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 500px;
    height: 50px;
    box-sizing: border-box;
`

export const StyledMessage = styled.h5`
    text-align: center;
    padding: 0 40px;
`