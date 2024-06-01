import { useEffect, useState } from "react";

import './style.css';

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                  count === 0 ? 0 : count * 20
                }`
              );
              const result = await response.json();
              if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
              }
              console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisabledBtn(true);
    }, [products]);

    if (loading) {
        return <div>Loading data! Please wait.</div>
    }

    console.log('products...', products);

    return (
        <div className="load-more-container">
           <div className="product-container">
               {
                    products && products.length ? 
                    products.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.thumbnail} alt={product.title}/>
                            <p>{product.title}</p>
                        </div>
                    ))
                    : null
                }
           </div>
           <div className="button-container">
                <button disabled={disabledBtn} onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disabledBtn && <p>You have reached 100 products!</p>
                }
           </div>
        </div>
    );
};

export default LoadMoreData;