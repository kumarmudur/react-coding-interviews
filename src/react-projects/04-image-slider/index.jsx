import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import './style.css';

const ImageSlider = ({url, page = 1, limit = 5}) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (url) => {
        try {
             const response = await fetch(`${url}?page=${page}&limit=${limit}`);
             const data = await response.json();
             if (data) { 
                setImages(data); 
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);  
    }, [url]);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred! { errorMsg }</div>
    } 

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ? 
                images.map((imageItem, index) => (
                    <img 
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                )) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                            onClick={() => setCurrentSlide(index)}
                        >
                        </button>
                    )) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider;