
import { useRef } from 'react';
import useFetch from '../16-use-fetch';

const ScrollToTopAndBottom = () => {

    const { data, error, pending} = useFetch('https://dummyjson.com/products?limit=100', {});
    const bottomRef = useRef();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        });
    }

    const handleScrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (error) return <h1>Error occurred! Please try again.</h1>

    if (pending) return <h1>Loading! Please wait</h1>

    return (
        <div>
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
            <ul style={{ listStyle: 'none'}}>
                {
                    data && data.products && data.products.length ?
                    data.products.map(product => <li key={product.id}>{product.title}</li>) : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This Bottom of the Page</h3>
        </div>
    )
}

export default ScrollToTopAndBottom;