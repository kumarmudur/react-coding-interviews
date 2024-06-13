import useWindowResize from ".";

const UseWindowResizeTest = () => {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <div>
            <h1>Use Window Resize Hook</h1>
            <p>Width is: {width}</p>
            <p>Width is: {height}</p>
        </div>
    )
};

export default UseWindowResizeTest;