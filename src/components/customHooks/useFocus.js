import { useCallback, useRef } from 'react';

export const useFocus = () => {
    const ref = useRef(null);

    const focusElement = useCallback(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return [ref, focusElement];
};

const App = () => {
    const [inputRef, focusInput] = useFocus();

    return (
        <div className='App'>
            <h1>Hello App</h1>
            <div>
                <input ref={inputRef} type='text' />
                <button onClick={focusInput}>Focus Input</button>
            </div>
        </div>
    )
};

export default App;