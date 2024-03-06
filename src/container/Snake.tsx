import {useState, useEffect} from 'react';
import '../styles/Snake.css';
import { FaSadCry } from "react-icons/fa";

const numRows = 20;
const numCols = 20;

const directions = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};

const initialSnake = [
    [10, 10],
    [10, 9],
];

export default function SnakeGame() {
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState(generateFoodPosition());
    const [direction, setDirection] = useState(directions.RIGHT);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            moveSnake();
        }, 100);

        return () => clearInterval(interval);
    }, [snake]);

    useEffect(() => {
        function handleKeyPress(event: any) {
            switch (event.key) {
                case 'ArrowUp':
                    if (direction !== directions.DOWN)
                        setDirection(directions.UP);
                    break;
                case 'ArrowDown':
                    if (direction !== directions.UP)
                        setDirection(directions.DOWN);
                    break;
                case 'ArrowLeft':
                    if (direction !== directions.RIGHT)
                        setDirection(directions.LEFT);
                    break;
                case 'ArrowRight':
                    if (direction !== directions.LEFT)
                        setDirection(directions.RIGHT);
                    break;
                default:
                    break;
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [direction]);

    function moveSnake() {
        if (gameOver) return;

        const head = [...snake[0]];
        switch (direction) {
            case directions.UP:
                head[0]--;
                break;
            case directions.DOWN:
                head[0]++;
                break;
            case directions.LEFT:
                head[1]--;
                break;
            case directions.RIGHT:
                head[1]++;
                break;
            default:
                break;
        }

        if (
            head[0] < 0 ||
            head[0] >= numRows ||
            head[1] < 0 ||
            head[1] >= numCols ||
            snake.some((segment) => segment[0] === head[0] && segment[1] === head[1])
        ) {
            setGameOver(true);
            return;
        }

        const newSnake = [head, ...snake];
        if (head[0] === food[0] && head[1] === food[1]) {
            setFood(generateFoodPosition());
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }

    function generateFoodPosition() {
        const x = Math.floor(Math.random() * numRows);
        const y = Math.floor(Math.random() * numCols);
        return [x, y];
    }

    function  RestartGame() {
        setSnake(initialSnake);
        setFood(generateFoodPosition());
        setDirection(directions.RIGHT);
        setGameOver(false);
    }

    useEffect(() => {
        function handleKeyPress(event:any) {
            if (event.key === 'Enter') {
                RestartGame();
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    return (
        <div>
            <h1>Snake Game</h1>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)` }}>
                {Array.from({ length: numRows }).map((_, rowIndex) =>
                    Array.from({ length: numCols }).map((_, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: snake.some((segment) => segment[0] === rowIndex && segment[1] === colIndex)
                                    ? 'green'
                                    : food[0] === rowIndex && food[1] === colIndex
                                        ? 'red'
                                        : 'lightgray',
                                border: '1px solid black',
                            }}
                        ></div>
                    ))
                )}
            </div>
            {gameOver &&
            <>
                <span className='blur'>

                 <h2 className="restart-button" onClick={RestartGame} >Game Over!<FaSadCry /> </h2>
                <h2 className="press-enter">Press enter to restart </h2>
                </span>

            </>
            }
        </div>
    );
}
