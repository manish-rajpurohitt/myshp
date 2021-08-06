import { Typography } from "@material-ui/core";
import { TextField,Button } from "@material-ui/core";
import React from "react";
import addProduct from "./apiService.js";

export default function LoginPage(props){
    const productTemplate={
        productName:"",
        category:"",
        image:null,
        price:"",
        discount:""
    };
    const [product, updateProduct] = React.useState(productTemplate);
    const onFileChange = event => {
        console.log(event.target.files[0]);
        updateProduct({...product,image: event.target.files[0] });
    };

    const handleInputChange = (e)=>{
        let pro = {...product};
        console.log(e.target.name, e.target.value)
        pro[e.target.name] = e.target.value;
        updateProduct(pro)
    }

    const handleAddProduct = ()=>{
        addProduct(product)
    }
    if(props.auth)
    return(
        <div class="admin-login">
            <div class="add-product">
                <h1>Add Product</h1>
                <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography style={{padding:"10px",margin:"10px"}}>Product Name:</Typography>
                    <TextField  name="productName" label="Product name" value={product.productName} onChange={(e)=>handleInputChange(e)}  variant="outlined" />
                </div>
                <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography style={{padding:"10px",margin:"10px"}}>Category:</Typography>
                    <TextField value={product.category} name="category" onChange={(e)=>handleInputChange(e)} label="Category"  variant="outlined" />
                </div>
                <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography style={{padding:"10px",margin:"10px"}}>Discount:</Typography>
                    <TextField value={product.discount} name = "discount" onChange={(e)=>handleInputChange(e)} label="Discount"  variant="outlined" />
                </div>
                <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography type="number" style={{padding:"10px",margin:"10px"}}>Price:</Typography>
                    <TextField value={product.price} name="price" onChange={(e)=>handleInputChange(e)} label="Price"  variant="outlined" />
                </div>
                <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}} >
                    <Typography style={{ pading:"10px", margin:"10px"}}>Product Image:</Typography>
                    <Button variant="contained" component="label">Upload File <input type="file" hidden accept=".png, .jpg, .jpeg" onChange={onFileChange}/></Button>
                    <p>{product.image?.name?product.image.name:""}</p>
                </div>
                <div style={{display:"flex",width:"100%", pading:"30px", margin:"10px"}} >
                    <Button onClick={()=>handleAddProduct()} style={{pading:"10px", margin:"10px"}} variant="contained" color="primary">Add Product</Button>
                    <Button style={{pading:"10px", margin:"10px"}} variant="contained" color="primary" href="/">Log Out</Button>
                </div>
            </div>
        </div>
    );
    else
        return <a href="/">Go Home</a>
}