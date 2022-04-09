import styled from 'styled-components';

const IconButton = styled.button`
    border:none;
    background-color: transparent;
    
`;

const SubmitButton = styled.button `
    border: ${props => props.border || "1px solid #c2c2c2"};
    margin: ${props => props.margin || "1rem 0 0 0"};
    padding: ${props => props.padding || "2rem" };
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid rgb(121, 117, 117);
    background-color: rgb(165, 163, 163);
    color: white;
    padding: .3rem;
    font-family: 'Julius Sans One', sans-serif;
`;

const SideBarButton = styled.button`
    
    background-color: #c0d2f0 ;
    border: none ;
    margin-top: .5rem ;
    padding: 8px 8px 8px 15px;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold ;
    color: #818181;
    text-align:left ;
    width: 100%;
    cursor:pointer ;


    &:hover, &:focus{
        background-color: lightblue;
        color:white;
    }
`


const ProductButton = styled.button`
    width: 100%;
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #c2c2c2;
    padding: 8px 0px;
    color: #515151;
    text-transform: uppercase;
    font-family: 'Marcellus SC', serif;
    font-weight: 500;
    background-color: ${props => props.bg || "none"};
`

const ControlButton = styled.button`

    position:absolute;
    width: 15rem;
    top: 11.5rem;
    display: flex;
    margin: 1rem;
    right: 20px;
    justify-content: space-between;

    border: 2px solid rgb(121, 117, 117);
    background-color: rgb(165, 163, 163);
    color: white;
    padding: 0;

`

export{SubmitButton, ControlButton, IconButton, SideBarButton, ProductButton} ;