import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;


`

const Title = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    text-align: center;

`
const ErrorMessege = styled.p `
    text-align: center;
    font-family: 'Amatic SC', cursive;
    font-size: 2rem;
    font-weight: 700;
    a {
        color: red;
        padding-left: 12px;
        text-decoration: underline;
    }
`

export {Container, Title, ErrorMessege}