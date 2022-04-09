import React from 'react';

import {ProductEditorStyles} from './styles'
import {ProductDataEntryForm} from '../ProductDataEntryForm'
import { ProductImageDropBox } from '../ProductImageDropBox';
import {ProductPreview} from '../ProductPreview'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleProductName, handleProductPrice, handleSubmit, handleProductDescription,setProductImage, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleProductDescription={ handleProductDescription}
            handleSubmit={handleSubmit}
          />
          <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
          />
        </ProductEditorStyles>
  )
}

export default ProductEditor