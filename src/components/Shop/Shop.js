import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/usecart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts()
    const [carts,setCarts] = useCart(products)


    const handleAddToCart = product =>{
        const exits = carts.find(pd => pd.key===product.key)
        let newCart =[]
        if(exits){
            const rest = carts.filter(item => item.key!==product.key)
            exits.quantity = exits.quantity + 1
            newCart=[...rest,product]
        }
        else{
            product.quantity = 1
            newCart = [...carts,product]
        }
        setCarts(newCart)
        addToDb(product.key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key = {product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={carts}>
                   <Link to="/review">
                   <button className="review-cart">Review Your Order</button> 
                   </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;