
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './style.css';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (currentIndex) => {
        console.log('handleClick', currentIndex);
        setRating(currentIndex);
    }

    const handleMouseEnter = (currentIndex) => {
        console.log('handleMouseEnter', currentIndex);
        setHover(currentIndex);
    }

    const handleMouseLeave = () => {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar 
                        className={index <= (hover || rating) ? 'active' : 'inactive' }
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
    );
};

export default StarRating;