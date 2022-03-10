import React from 'react';
import { AddProductPanel, AllProductsPanel } from 'components/panels';import {Routes, Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound} from "./pages";



function App() {


  

  return (
    <>
          <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="dashboard"  element={<DashBoardPage/>}>
                <Route  index  element={<AllProductsPanel title="All Products"/>}/>
                <Route  path="add"  element={<AddProductPanel title="Add New Product"/>}/>
            </Route>
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        
  </>
  );
}

export default App;