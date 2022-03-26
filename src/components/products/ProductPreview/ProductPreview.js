import React from 'react';

import {ProductPreviewStyles,ProductButtonGroup ,ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU} from './styles'
import { ProductButton } from 'ui/buttons';

function ProductPreview ({children, productName, productPrice, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage} alt="product image"></img>
          </ProductImage>
          <ProductName>{productName}
            <span>Bridal Bouquet</span>
          </ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>An elegant choice, round bouquets often feature soft, romantic flowers like peonies, ranunculus, and different varieties of roses.</ProductDescription>
          <ProductButtonGroup>
            <ProductButton>Add to Cart</ProductButton>
            <ProductButton>Wishlist</ProductButton>
          </ProductButtonGroup>


        </ProductPreviewStyles>
  )
}

export default ProductPreview