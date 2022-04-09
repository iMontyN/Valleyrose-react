import React from 'react';

import {ProductPreviewStyles,ProductButtonGroup ,ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU} from './styles'
import { ProductButton } from 'ui/buttons';

function ProductPreview ({children, productName, productPrice, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage.previewImage} alt="product image"/>
          </ProductImage>
          <ProductName>{productName}
            <span>Bridal Bouquet</span>
          </ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>{productDescription}</ProductDescription>
          <ProductButtonGroup>
            <ProductButton>Add to Cart</ProductButton>
            <ProductButton>Wishlist</ProductButton>
          </ProductButtonGroup>

        </ProductPreviewStyles>
  )
}

export default ProductPreview