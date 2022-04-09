import React from 'react';
 
import {ProductCardStyles, ProductButtonGroup, ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU} from './styles'
import { ProductButton, ControlButton } from 'ui/buttons';
 
function ProductCard({children, product, ...props})  {
  const{productName, productPrice,imageUrl, productDescription} = {...product}
  return (
      <ProductCardStyles  {...props}>
        <ProductImage>
          <img src={imageUrl} alt="product image"/>
        </ProductImage>
        <ProductName>{productName}
          <span>Bridal Bouquet</span>
        </ProductName>
        <ProductPrice>${productPrice}</ProductPrice>
        <ProductDescription>{productDescription}</ProductDescription>
        <ProductButtonGroup>
          <ProductButton>Edit</ProductButton>
          <ProductButton>Delete</ProductButton>
        </ProductButtonGroup>

        
      </ProductCardStyles>
  )
}

export default ProductCard