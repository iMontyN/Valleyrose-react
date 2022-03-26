import React from 'react';

import {ProductDataEntryFormStyles,FormGroup ,ProductCategory, ProductImage, ProductName, ProductPrice, ProductDescription, ProductSKU } from './styles'
import {ProductImageDropBox} from '../ProductImageDropBox'
import {Label, Input, Select, TextArea} from 'ui/forms'

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
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
            <TextArea rows={6}/>
          </ProductDescription>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm