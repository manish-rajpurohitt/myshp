import Categories from "./Categories";
import React from "react";
import Products from "./Products";
import axios from "axios";
import { getAllCategories, getAllProducts } from "./apiService";
export default function Body() {

  const baseURL = "https://my-shhhop.herokuapp.com/api/";
  let [categoriesList, updateCategoriesList] = React.useState([]);

  const getAllCategoriesAndProducts = async()=>{
    
    await axios.get(`${baseURL}getAllCategories`).then(res=>{
      if(res?.data?.categories !== null){
          console.log(res.data.categories)
          updateCategoriesList(res?.data?.categories);
      }
    }).catch(err=>console.error("Error : "+err));
    
    await axios.get(`${baseURL}getAllProducts`).then(res=>{
      if(res?.data?.products !== null){
          console.log(res.data.products)
          updateProductsList(res?.data?.products);
      }        
    }).catch(err=>console.error("Error : "+err));

    
  }
  const [category,updateCategory] = React.useState("");
  const [productsList, updateProductsList] = React.useState([]);
  const changeCategory = (cat)=>{
    updateCategory(cat.innerText);
  }
  React.useState(()=>{
    getAllCategoriesAndProducts();
  },[])
  return (
    <div class="body">
      <Categories categories={categoriesList} changeCategory={changeCategory} />
      <Products category={category} products={productsList}/>
    </div>
  );
}
