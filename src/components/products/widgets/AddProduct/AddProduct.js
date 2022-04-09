import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor  } from "components/products/ProductEditor";
import { EditorFeedBack } from 'components/products/EditorFeedBack';
import ProductPreview from 'assets/img/welcome_logo.jpg';

const defaults={
  description:`Bitters fingerstache swag iPhone succulents schlitz bicycle rights mlkshk narwhal ramps cold-pressed brooklyn. Copper mug mumblecore taxidermy shaman snackwave, marfa flannel succulents biodiesl non gemo.`,
  name: "Product Name",
  price:230.96
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  function handleSubmit(e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price) 
  }

  
  if(isWriting){
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  }else{
    return (
      <AddProductStyles  {...props}>
        <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productImage={productImage}
          productDescription={productDescription}
          handleProductName={handleProductName} 
          handleProductPrice={handleProductPrice} 
          setProductImage={setProductImage} 
          handleProductDescription={setProductDescription}
          handleSubmit={handleSubmit}
        />

      </AddProductStyles>
    )
  }
}

export default AddProduct