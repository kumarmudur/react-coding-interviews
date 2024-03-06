import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleMediaQueryChange = (event) => {
            setMatches(event.matches);
        }

        mediaQuery.addEventListener(handleMediaQueryChange);
        setMatches(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener(handleMediaQueryChange);
        }
    }, [query]);

    return matches;
}

export const App = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div>
            { isMobile ? <p>Mobile View</p> : <p>Desktop View</p> }
        </div>
    )
};