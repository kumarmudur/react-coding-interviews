import { useState } from "react";

export const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = value => {
        setValue((currentValue) => {
            typeof value === 'boolean' ? value : !currentValue;
        });
    }

    return [value, toggleValue];
}

export const App = () => {
    const [value, toggleValue] = useToggle(false);

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    )
};