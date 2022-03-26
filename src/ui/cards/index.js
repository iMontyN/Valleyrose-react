import styled from 'styled-components';

const CardContainer = styled.div `

    margin: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
    min-height: 35rem;

`

const CardImg = styled.div`
    width: 100%;
    height: 200px;
    object-fit: cover;

`

const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    color: #515151;
`

const CardTitle = styled.div `

    font-size: 1.5rem;
    font-weight: 600;
    color: #515151;
    font-variant: small-caps;

`


//     .card-header img {
//       width: 100%;
//       height: 200px;
//       object-fit: cover;
//     }
//     .card-body {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: flex-start;
    //   padding: 20px;
    //   color: #515151;
//     }
//     .title {
    //   font-size: 1.5rem;
    //   font-weight: 600;
    //   color: #515151;
    //   font-variant: small-caps;
//       // padding-bottom: 0;
//     }
//     .category {
//       font-weight: 100;
//       display: block;
//       font-size: 1rem;
//       font-variant: normal;
//       text-transform: uppercase;
//       margin-bottom: 1.3rem;
//       padding: 0;
//     }
//     .card-price {
//       font-family: 'Marcellus SC', serif;
//       font-size: 2rem;
//       color: #515151;
//       font-variant: small-caps;
//     }
//     .card-description {
//       margin: 1.5rem 0;
//       font-size: .7rem;
//       color: #7b7979;
      
//     }
//     .card-sku {
//       font-size: 10px;
//       margin-bottom: .5rem;
//     }
//     .card-btns{
//       display: flex;
//       justify-content: center;
//       button {
//         margin-bottom: auto;
//       }
//     }
//   }