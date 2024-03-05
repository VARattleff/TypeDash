import  { useRef, useState, useEffect } from 'react';
import '../styles/App.css';
import Word from '../components/Word';
import Timer from '../components/Timer';
import {getCloudCode,} from '../components/Cloud';

export default function TypeDashCode(): JSX.Element {
    const [userInput, setUserInput] = useState<string>('');
    const cloud = useRef<any>(getCloudCode());
    const inputRef = useRef<HTMLInputElement>(null);

    const [startCounting, setStartCounting] = useState<boolean>(false);
    const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
    const [correctWordArray, setCorrectWordArray] = useState<boolean[]>([]);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [startCounting]);

    function processInput(value: string): void {
        if (!startCounting) {
            setStartCounting(true);
        }

        if (value.endsWith(' ')) {
            if (activeWordIndex === cloud.current.length - 1) {
                setStartCounting(false);
                setUserInput('completed');
                return;
            }

            setActiveWordIndex(index => index + 1);
            setUserInput('');

            setCorrectWordArray(data => {
                const word = value.trim();
                const newResult = [...data];
                newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
                return newResult;
            });
        } else {
            setUserInput(value);
        }
    }

    function resetTest(): void {
        setUserInput('');
        setStartCounting(false);
        setActiveWordIndex(0);
        setCorrectWordArray([]);
        cloud.current = getCloudCode();
        setTimeElapsed(0);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <h1>Typing Test</h1>
            <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} />
            <p>
                {cloud.current.map((word: string, index: number) => (
                    <Word key={index} text={word} active={index === activeWordIndex} correct={correctWordArray[index]} />
                ))}
            </p>
            <input ref={inputRef} type='text' value={userInput} onChange={e => processInput(e.target.value)} />
            <br></br>
            <button className="reset-button" onClick={resetTest}>reset</button>
        </div>
    );
}
