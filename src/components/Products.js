import React from "react";
import Product from "./Product";

export default function Products (props){
    
    return <div className="products">
        {props.products.map(product=>{
            if(product.category === props.category)
                return <Product product={product}/>
            return;
        })}
    </div>
}