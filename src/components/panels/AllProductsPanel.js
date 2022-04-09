import React from "react";
import { useGetProducts } from "hooks/useGetProducts";


import {PanelStyles, PanelBody, PanelHeader} from './styles'
import {ProductCard} from './../products/ProductCard'


function AllProductsPanel({ title, ...props }) {
  const productData = useGetProducts('products')
  return (
        <PanelStyles>
          <PanelHeader>
            <h2>{title  || "Display Panel"}</h2>
          </PanelHeader>
          <PanelBody>
             {/* add the products....firebase */}
              {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>)   
              :  <p>Products</p>}
          </PanelBody>
        </PanelStyles>
  );
}

export default AllProductsPanel;
