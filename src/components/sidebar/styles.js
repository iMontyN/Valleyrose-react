import styled from 'styled-components';

const SideBarLayout = styled.div`

    height: 100%;
    width: 12rem; 
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    
    border: 2px solid black;
    background-color: rgb(41, 40, 40);
    transition: 0.5s;
    overflow-x: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    white-space: nowrap;
    

    span {
        margin-left: 2.5rem ;
    }

    a:hover{
        text-decoration: none;
        background-color: red;
        cursor: pointer;
        color: #fff;
        background-color: lightblue;
    }

`
const SideBarToggle = styled.div`
    padding: 1.14rem;
    border-bottom: 1px solid white;
    /* background-color: white; */
`

const SideBarLogo = styled.img`

    padding-top: 2rem;
    width: 7rem;
    display: block;
    margin: auto;
`

const SideBarListContainer= styled.div`
    padding-top: 1rem;
    display: flex;
    height: auto;
    flex-flow: column;
    gap: 2rem;
`
const SideBarStyles= styled.div`
    padding-bottom: 2rem;
    border-bottom: 1px solid #818181;

    &:last-child{
        border: none;
    }
`
const SideBarList= styled.div`
    a {
        padding: 8px 8px 8px 15px;
        text-decoration: none;
        font-size: 15px;
        color: #818181;
        display: block;
    }
    
`

const SideBarListTitle= styled.div`
    padding: 1rem 1rem;
    font-size: 13px;
    color: rgb(235, 235, 235);
    text-transform: uppercase;
    padding-left: 4rem ;
`










export {SideBarLayout, SideBarToggle,SideBarLogo, SideBarListContainer, SideBarListTitle ,SideBarStyles, SideBarList}
