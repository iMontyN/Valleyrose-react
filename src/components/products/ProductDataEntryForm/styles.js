import styled from 'styled-components';


const ProductDataEntryFormStyles  = styled.form`
    max-width: 30rem;
`;


const FormGroup = styled.div `
    display: flex;
    flex-flow: row;
    gap: 1rem;
    align-items: center;

`

const ProductName = styled.h2`
    color: #515151;
    font-size: .5rem;
    margin-bottom: 1rem;
`

const ProductCategory = styled.div`

`

const ProductImage = styled.div `
    width: 100%;
    object-fit: cover;
`

const ProductPrice = styled.p`
    color: #515151;
`

const ProductDescription = styled.p`
    margin: 1.5rem 0;
    font-size: .7rem;
    color: #7b7979;
`
const ProductSKU = styled.p`
    font-size: 10px;
    margin-bottom: .5rem;
`

export {ProductDataEntryFormStyles, FormGroup, ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU, ProductCategory }