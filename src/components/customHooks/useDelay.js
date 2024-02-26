import { useEffect, useState } from "react";

export const useDelay = (delayTime) => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setDone(true);
        }, delayTime);

        return () => clearTimeout(delay);
    }, [delayTime]);

    return done;
}

export const App = () => {
    const isDone = useDelay(2000);

    return (
        <div>
            {
                isDone ? (
                    <p>Welcome to Javascript</p>
                ): (
                    <p>Page is loading...</p>
                )
            }
        </div>
    );
}