import React from "react";
import { Card, CardMedia, CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
export default function Product(props){
    return(
        <Card className="card">
            <CardMedia
            className="productImage"
                image={props.product.image}
                title={props.product.productName}
            />
            <div  className="productVariant">
                <h2>{props.product.productName}</h2>
                <p>{props.product.category}</p>
            </div>
            <div className="actions">
                <p style={{margin:"8px"}}><span style={{color:"red", margin:"4px", padding:"4px"}}>${props.product.price - (props.product.price * (props.product.discount/100))}  </span><span style={{textDecoration: "line-through"}}>${props.product.price}</span></p>
                <Button style={{margin:"10px"}} variant="contained" color="primary">
                Add to cart
                </Button>
            </div>
      <CardActions disableSpacing></CardActions>
    </Card>
    );
}