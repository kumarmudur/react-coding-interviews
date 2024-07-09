import { useState } from "react";

const Tooltip = ({ content, data, delay }) => {
    let timeOut;
    const [isVisible, setIsVisible] = useState(false);

    const handleShowTooltip = () => {
        timeOut = setTimeout(() => {
            setIsVisible(true);
        }, delay || 500);
    }

    const handleHideTooltip = () => {
        clearTimeout(timeOut);
        setIsVisible(false);
    }

    return (
        <div 
            className="tooltip-container"
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleHideTooltip}
        >
            { data }
            {
                isVisible ? <div className="tooltip">
                    { content }
                </div> : null
            }
        </div>
    )
};

export default Tooltip;