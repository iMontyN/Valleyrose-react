import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: 1rem;
    font-family: 'Julius Sans One', sans-serif; 
    color: rgb(71 85 105);
`;

const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size:1.125rem;
    padding: 0.35rem 0.5rem;

    height: 2rem;

    ::placeholder{
        font-size: 14px;
        color: rgb(71 85 105);
    }
    :focus{
        background-color:  rgb(241 245 249);
    }
`;

const Select = styled.select`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size:1.125rem;
    /* margin-top: 1.3rem; */
    padding: 0.35rem 0.5rem;
    height: 2rem;
`;

const TextArea = styled.textarea `
    width: ${props => props.width || "100%"};
    resize: none;
`


export{Input, Label, Select, TextArea} ;