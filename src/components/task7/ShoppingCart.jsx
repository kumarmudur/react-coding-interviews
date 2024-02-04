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
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    }

    const updateQuantity = (itemId, newQuantity) => {
        console.log('newQuantity...', newQuantity);
        console.log('itemId...', itemId);
        if (newQuantity > 5) return;
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                console.log('if condition');
                return { ...item, quantity: newQuantity }
            }
            return item;
        });
        setCart(updatedCart);
    }

    console.log('Shopping Cart', data);
    console.log('cart...', cart);
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
        </div>
    );
};

export default ShoppingCart;