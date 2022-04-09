import styled from "styled-components";

const ProductCardStyles = styled.aside`
  max-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  min-height: 40rem;

`;

const ProductImage = styled.div `
    width: 100%;
    height: 300px;
    object-fit: cover;
`

const ProductName = styled.h2`
    display: flex;
    flex-flow: column;
    font-size: 1.5rem;
    font-weight: 600;
    color: #515151;
    font-variant: small-caps;
    padding: 1rem;

    span{
        font-size: 1.2rem;
        font-weight: 100;
    }
`
const ProductPrice = styled.p`
    font-family: 'Marcellus SC', serif;
    font-size: 2rem;
    color: #515151;
    font-variant: small-caps;
    padding: 0 1rem;
`

const ProductDescription = styled.p`
    font-size: .7rem;
    color: #7b7979;
    padding:1rem;
`
const ProductSKU = styled.p`
    font-size: 10px;
    margin-bottom: .5rem;
`

const ProductButtonGroup = styled.div`
    padding: 1rem ;
    display:flex;
    flex-flow: row nowrap;
    gap: 1rem;
`

export {ProductCardStyles, ProductButtonGroup, ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU };