import styled from 'styled-components';

const IconButton = styled.button`
    border:none;
    background-color: transparent;
    
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

export{IconButton,SideBarButton} ;