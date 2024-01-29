
import './product.css';

// eslint-disable-next-line react/prop-types
const Product = ({handleAddtoCart,product}) => {
    // eslint-disable-next-line react/prop-types
    const{name, img, seller, price, ratings} =product;
    // eslint-disable-next-line react/prop-types
   
   
    return (
        <div className='product-card'>
            
            <img className="product-img" src={img} alt={name} />
            <p className='product-title'>{name}</p>
            <p>{seller}</p>
            <p>{ratings}</p>
            <p>{`$`+price}</p>
            <button onClick={()=>handleAddtoCart(product)}>Add to cart</button>
        </div>
    );
};

export default Product;