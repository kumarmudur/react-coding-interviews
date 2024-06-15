import { useRef } from "react";

const data = [
    {
        label: 'First Card',
        style: {
            width: '100%',
            height: '600px',
            background: 'red',
        }
    },
    {
        label: 'Second Card',
        style: {
            width: '100%',
            height: '600px',
            background: 'grey',
        }
    },
    {
        label: 'Third Card',
        style: {
            width: '100%',
            height: '600px',
            background: 'blue',
        }
    },
    {
        label: 'Fourth Card',
        style: {
            width: '100%',
            height: '600px',
            background: 'green',
        }
    },
    {
        label: 'Fifth Card',
        style: {
            width: '100%',
            height: '600px',
            background: 'orange',
        }
    }
];

const ScrollToSection = () => {
    const ref = useRef();

    const handleScrollToSection = () => {
        let position = ref.current.getBoundingClientRect().top;
        console.log('position: ', position)
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click to Scroll</button>
            {
                data.map((dataItem, index) => (
                    <div ref={index === 3 ? ref : null } key={dataItem.label} style={dataItem.style}>
                        <h3>{dataItem.label}</h3>
                    </div>
                ))
            }
        </div>
    )
};

export default ScrollToSection;