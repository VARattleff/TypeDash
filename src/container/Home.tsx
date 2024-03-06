import { FaGithub } from "react-icons/fa";
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <h1>Welcome.... </h1>
            <h2>Here u have all the games u would like to play in class as a student</h2>
            <a href="https://github.com/VARattleff/TypeDash" target="_blank">
                <FaGithub className='icon-home-page' />
            </a>


        </>
    );
}

export default Home;