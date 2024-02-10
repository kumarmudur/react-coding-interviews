import { createContext, useContext, useState } from 'react';

// Create a context for the display mode
const DisplayModeContext = createContext();

// Create a custom hook to use the display mode context
export const useDisplayMode = () => {
    return useContext(DisplayModeContext);
}

// Create a provider component for the display mode context
const DisplayModeProvider = ({ children }) => {
    const [displayMode, setDisplayMode] = useState('light');

    const toggleDisplayMode = () => {
        setDisplayMode(prevMode => (prevMode === 'light') ? 'dark' : 'light');
    }

    return (
        <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
            { children }
        </DisplayModeContext.Provider>
    );
};

export default DisplayModeProvider;