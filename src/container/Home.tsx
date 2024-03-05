import {  FaRegKeyboard,  } from "react-icons/fa";
import { GiTicTacToe, GiSandSnake } from "react-icons/gi";
import "../styles/Home.css";
const Home = () => {
    return (
        <>
            <h1>Welcome.... </h1>
            <h2>Here u have all the games u would like to play in class as a student</h2>
            <p>Improve your typing speed and accuracy with <FaRegKeyboard className="icon-home"/> </p>
            <p>Improve your Tic-tac-toe skills with <GiTicTacToe className="icon-home"/></p>
            <p>Improve your Snake skills with <GiSandSnake className="icon-home"/></p>
        </>
    );
}

export default Home;