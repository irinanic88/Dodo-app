import {useEffect} from "react";

const useEscapeToExit = (exitFunction) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                exitFunction();
            }
            return;
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    });
}

export default useEscapeToExit;