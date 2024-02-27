import { useEffect, useRef } from "react";

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export const App = () => {
    const ref = useRef(null);

    const onClose = () => {
        alert('clicked outside');
    }

    useOnClickOutside(ref, onClose);

    return (
        <div ref={ref}>Click outside this element to close</div>
    );
};