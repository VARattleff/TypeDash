import  { useState, useRef } from 'react';
import '../styles/TicTacToe.css';
import { FaCircle, FaTimes } from 'react-icons/fa';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(Array(9).fill(null));
    const titleRef = useRef(null);
    const [winner, setWinner] = useState(null);

    const CrossIcon = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaTimes size={80} color="black" />
        </div>
    );

    const CircleIcon = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaCircle size={80} color="black" />
        </div>
    );

    const toggle = (num:any) => {
        if (data[num] !== null || winner) {
            return;
        }

        const updatedData = [...data];
        updatedData[num] = count % 2 === 0 ? "cross" : "circle";
        setData(updatedData);
        setCount(count + 1);
        if (checkWin(updatedData)) {
            setWinner(updatedData[num]);
        } else if (count === 8) {
            // @ts-ignore
            setWinner("draw");
        }
    };

    const checkWin = (currentData: any) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
                return true;
            }
        }

        return false;
    };

    const reset = () => {
        setData(Array(9).fill(null));
        // @ts-ignore
        titleRef.current.innerHTML = 'Tic Tac Toe';
        setCount(0);
        // @ts-ignore
        setWinner(null);
    };

    const renderWinnerMessage = () => {
        if (winner === "cross" || winner === "circle") {
            return (
                <h1 className="winner-message">
                    Winner: {winner === "cross" ? <CrossIcon /> : <CircleIcon />}
                </h1>
            );
        } else if (winner === "draw") {
            return <h1 className="winner-message">It's a draw!</h1>;
        }
        return null;
    };

    return (
        <div className='container'>
            <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
            {winner || count === 9 ? renderWinnerMessage() : (
                <div className="board">
                    <div className="row1">
                        {renderBox(0)}
                        {renderBox(1)}
                        {renderBox(2)}
                    </div>
                    <div className="row2">
                        {renderBox(3)}
                        {renderBox(4)}
                        {renderBox(5)}
                    </div>
                    <div className="row3">
                        {renderBox(6)}
                        {renderBox(7)}
                        {renderBox(8)}
                    </div>
                </div>
            )}
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );

    function renderBox(index: any) {
        return (
            <div className="boxes" onClick={() => toggle(index)}>
                {data[index] === "cross" ? <CrossIcon /> : data[index] === "circle" ? <CircleIcon /> : null}
            </div>
        );
    }
};

export default TicTacToe;
