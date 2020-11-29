import {useEffect, useState} from "react";

export function useTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const delay = 1000;

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((curr_sec) => curr_sec + 1)
            }, delay);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const resume = () => {
        setIsActive(true)
    };

    const stop = () => {
        setIsActive(false)
    };

    const reset = () => {
        setIsActive(false);
        setSeconds(0);
        setIsActive(true);
    };

    return {seconds, resume, stop, reset};
}