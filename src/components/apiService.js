const baseURL = "https://my-shhhop.herokuapp.com/api/";
const axios = require('axios');
const adminLogin = async (creds)=>{
    
    return await axios.post(`${baseURL}checkAuth`,creds);
    
}

const getAllCategories = async ()=>{
    
}

const getAllProducts = async ()=>{
    await axios.get(`${baseURL}getAllProducts`).then(res=>{
        if(res?.data?.products !== null){
            console.log(res.data.products)
            return res?.data?.products;
        }        
      }).catch(err=>console.error("Error : "+err));
}

const addProduct = async (product)=>{

}

module.exports =   {adminLogin : adminLogin,
     addProduct: addProduct,
     getAllCategories:getAllCategories,
    getAllProducts: getAllProducts}