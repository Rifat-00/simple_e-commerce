import { useState , useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    
    const[products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))

    },[])

    const handleAddtoCart = (product) =>{
        //console.log(product);
        setCart([...cart,product]);
        
    }
    
    
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    <h3>Products Portfolio</h3>
                    <div className="item-container">
                        {
                            products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}/>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <h3>Order Summery</h3>
                    <div className="cart-info">
                        <p>Selected Item: {cart.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;