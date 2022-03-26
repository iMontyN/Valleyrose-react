import React from 'react';

import {ProductEditorStyles} from './styles'
import {ProductDataEntryForm} from '../ProductDataEntryForm'
import { ProductImageDropBox } from '../ProductImageDropBox';
import {ProductPreview} from '../ProductPreview'

function ProductEditor ({children, productName, productPrice, productImage, handleProductName, handleProductPrice, setProductImage, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}

          />
          <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
          />
        </ProductEditorStyles>
  )
}

export default ProductEditor