import styled from 'styled-components';

const AppBarStyles = styled.nav`
    padding: .5rem;
    padding-left: 12.5rem;
    list-style: none ;
    border-bottom:2px solid lightgray ;
`
const AppBarItems = styled.ul`
    display:flex;
    
    justify-content: space-between;
    align-items:center;
`;

const AppBarTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
`

const AppBarItemGroup = styled.li`
    display:flex;
    gap:0.5rem;
`;

const AppBarItem = styled.li`
    display: flex;
    align-items: center;
`




export {AppBarStyles, AppBarItemGroup,AppBarTitle, AppBarItems, AppBarItem}
