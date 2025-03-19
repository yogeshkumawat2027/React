import Product from "./Product.jsx";

function ProductTab(){
    let options = [<li>hi-tech</li>,<li>Durable</li>];
    return(
        <>
    <Product title="laptop" price={30000} features = {options} />
    <Product title="phone" price={40000} />
    <Product title="pen" price={30}/>
       </>
    );
}
export default ProductTab;