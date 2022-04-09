import React from 'react';

import {ProductDataEntryFormStyles,FormGroup ,ProductCategory, ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU } from './styles'
import {ProductImageDropBox} from '../ProductImageDropBox'
import {Label, Input, Select, TextArea, } from 'ui/forms'
import { SubmitButton, ControlButton} from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, handleSubmit, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
          <ProductImage>
            <Label>Upload an Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
          </ProductImage>
          <ProductName>
                <Label>Product Name</Label>
                <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} />
          </ProductName>
          <FormGroup>
            <ProductCategory>
              <Label> Select A Category</Label>
              <Select id="category" name="category">
                <option value=""></option>
                <option value="bridal">Bridal Bouquet</option>
                <option value="fresh-flower">Fresh Flower</option>
                <option value="long-life">Long Life Flowers</option>
                <option value="ballloons">Ballloons</option>
              </Select> 
            </ProductCategory>
            <ProductPrice>
                <Label>Product Price</Label>
                <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
            </ProductPrice>
          </FormGroup>
          <ProductDescription>
            <Label>Product Description</Label>
            <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6}/>
          </ProductDescription>

          <div>
            <SubmitButton type="submit">Add Product</SubmitButton>
          </div>
          

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm