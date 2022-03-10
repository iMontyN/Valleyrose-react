import styled from "styled-components"

const LoginPageStyles = styled.section`
    display: flex;
    margin-top: 4rem;
    justify-content: center;
    align-items: center;
    
    text-transform: lowercase ;

    img {
        border: 1px solid black;
        border-right: 0;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        max-width: 30rem;
        height: 100%;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
        font-family: 'Julius Sans One', sans-serif;
        

        span {
            font-size: 1.5rem;
            /* text-transform: lowercase; */
        }
    }

    a {
        padding-top: 1rem;
        font-family: 'Julius Sans One', sans-serif;
    }

    input {
        padding: 0.5rem;
        
    }

    label {
        font-family: 'Julius Sans One', sans-serif;
    }

    .Toastify__toast {
        background-color: #fff;
        color:black;
    }
    .Toastify__progress-bar--error {
        background-color: #fad9d9;
    }
    .Toastify__close-button {
        color:white;
        opacity:1;
    }
    .Toastify__toast-icon {
        fill: white;
    }
`

const SignInSection = styled.form `
    display: flex;
    flex-flow: column;
    justify-content: center;
    
    height: 40rem;
    width: auto;
    /* */
    /* width: 50rem; */
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    padding: 3rem;
    border: 1px solid black;

    button {
        border: 1px solid #c2c2c2;
        margin-top: 1rem;
        text-transform: uppercase;
        padding: .5rem;
        color: white;
        font-weight: 600;
        border: 2px solid rgb(121, 117, 117);
        background-color: rgb(165, 163, 163);
        color: white;
        padding: .3rem;

    }

`

const FormItem = styled.div `
    display: flex;
    flex-flow: column;
    margin: 0.5rem 0;
    text-transform: lowercase ;

`

export{LoginPageStyles, SignInSection, FormItem}