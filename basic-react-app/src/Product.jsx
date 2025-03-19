 import "./Product.css"

function Product({title,price}){
  let styles = {backgroundColor: price>30000?"yellow" : ""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>${price}</h5>
          <p>{price >30000 && "discount of 5%" }</p>  
        </div>
    );
}
export default Product;
