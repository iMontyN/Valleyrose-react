import React from 'react';
import {AllProductsPanel, AddProductPanel, EditProductPanel} from 'components/panels';
import {Routes, Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound} from "./pages";



function App() {


  

  return (
    <>
          <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="dashboard"  element={<DashBoardPage/>}>
                <Route  index  element={<AllProductsPanel title="Product Listing"/>}/>
                <Route  path="add"  element={<AddProductPanel title="Add New Product"/>}/>
                <Route  path="edit"  element={<EditProductPanel title="Edit Product"/>}/>
            </Route>
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        
  </>
  );
}

export default App;