import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegKeyboard, FaRandom } from "react-icons/fa";
import { GiTicTacToe, GiSandSnake } from "react-icons/gi";
import { IoIosText, IoMdCode } from "react-icons/io";


const NavHeader = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);

    return (
        <header className="nav-header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="link"><FaHome className="icon" /></Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setShowSubmenu(true)} onMouseLeave={() => setShowSubmenu(false)}>
                        <li className="link"><FaRegKeyboard className="icon"/></li>
                        {showSubmenu && (
                            <ul className="submenu">
                                <li className="submenu-item">
                                    <Link to="/TypeDashWords" className="link"><FaRandom className="icon"/></Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/TypeDashSentence" className="link"><IoIosText className="icon" /></Link>
                                </li>
                                <li className="submenu-item">
                                    <Link to="/TypeDashCode" className="link"><IoMdCode className="icon"/></Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <Link to="/TicTacToe" className="link"><GiTicTacToe className="icon"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Snake" className="link"><GiSandSnake className="icon"/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavHeader;
