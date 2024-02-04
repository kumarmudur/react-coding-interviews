import { useState } from 'react';

import data from './data';

const ShoppingCart = () => {
    const [items] = useState(data.items);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (itemId) => {
        const selectedItem = items.find(item => item.id === itemId);
        const itemInCart = cart.find(item => item.id === itemId);

        if (itemInCart) {
            const updatedCart = cart.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity: (item.quantity || 1) + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...selectedItem, quantity: 1 }]);
        }
    }

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    }

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity > 5) return;
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity }
            }
            return item;
        });
        setCart(updatedCart);
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    } 

    return (
        <div>
            <h1>Shopping Cart</h1>
            <h2>Available Items</h2>
            <ul>
                {
                    items?.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
                        </li>
                    ))
                }
            </ul>
            <h2>Cart Total</h2>
            <ul>
                {
                    cart.map(item => (
                        <li key={item.id}>
                            { item.name} - ${item.price} -
                            <select
                                value={item.quantity || 1}
                                onChange={(event) => updateQuantity(item.id, parseInt(event.target.value))}
                            >
                            {
                                [...Array(5).keys()].map(number => (
                                    <option key={number + 1} value={number + 1}>
                                        { number + 1}
                                    </option>
                                ))
                            }
                            </select>
                            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <h2>Total: ${calculateTotal()}</h2>
        </div>
    );
};

export default ShoppingCart;