import React, { useEffect } from 'react';

interface TimerProps {
    correctWords: number;
    startCounting: boolean;
    setTimeElapsed: React.Dispatch<React.SetStateAction<number>>;
    timeElapsed: number;
}

function Timer(props: TimerProps) {
    const { correctWords, startCounting, setTimeElapsed, timeElapsed } = props;

    useEffect(() => {
        // @ts-ignore
        let id: NodeJS.Timeout;
        if (startCounting) {
            id = setInterval(() => {
                setTimeElapsed(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(id);
        };
    }, [startCounting, setTimeElapsed]);

    const minutes = timeElapsed / 60;
    const wpm = minutes > 0 ? ((correctWords / minutes) || 0).toFixed(1) : 0;
    // @ts-ignore
    const cpm = (wpm * 5).toFixed(1);

    return (
        <div>
            <p className="timer-text">Time: {timeElapsed}</p>
            <p className="timer-text">Speed: {wpm} WPM</p>
            <p className="timer-text">Speed: {cpm} CPM</p>
        </div>
    );
}

export default Timer;
