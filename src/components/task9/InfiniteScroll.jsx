import { useEffect, useState } from 'react';

const InfiniteScroll = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos=${page}`
            );
            if (!response.ok) {
               throw new Error("Failed to fetch");
            }
            const data = await response.json();
            if (Array.isArray(data)) {
                setImages((prevImages) => [...prevImages, ...data]);
                setPage((prevPage) => prevPage + 1);        
            } else {
                console.error("Invalid data format:", data);
            }
        } catch (error) { 
            console.error("Error fetching images:", error); 
        } finally { setLoading(false) }
    }

    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
          loading
        )
        return;
        fetchImages();
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);
    
    return (
        <div>
            <h1>Image Gallery</h1>
            <div>
                {
                    images.map(image => (
                        <img
                         key={image.id}
                         src={image.urls.small}
                         alt={image.alt_description} 
                        />
                    ))
                }
                { loading && <p>Loading...</p>}
            </div>
        </div>
    );
};

export default InfiniteScroll;