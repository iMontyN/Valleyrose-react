import React from "react";

import {PanelStyles, PanelBody, PanelHeader} from './styles'
import {ProductPreview} from './../products/ProductPreview'
import sampleImage from 'assets/img/welcome_logo.png';

function AllProductsPanel({ title, productName, productPrice, productImage, ...props }) {
  return (
        <PanelStyles>
          <PanelHeader>
            <h2>{title  || "Display Panel"}</h2>
          </PanelHeader>
            
          <PanelBody>
          <ProductPreview 
            productImage={sampleImage}
            productName={'productName'}
            productPrice={'123'}
          />

          <ProductPreview 
            productImage={sampleImage}
            productName={'productName'}
            productPrice={'221'}
          />
          <ProductPreview 
            productImage={sampleImage}
            productName={'productName'}
            productPrice={'421'}
          />
          <ProductPreview
            productImage={sampleImage} 
            productName={'productName'}
            productPrice={'455'}
          />
          <ProductPreview
            productImage={sampleImage} 
            productName={'productName'}
            productPrice={'123'}
          />
          <ProductPreview 
            productImage={sampleImage}
            productName={'productName'}
            productPrice={'134'}
          />
          </PanelBody>
        </PanelStyles>
  );
}

export default AllProductsPanel;
