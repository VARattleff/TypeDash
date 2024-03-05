import {Link} from 'react-router-dom';

const NavHeader = () => {
    return (
        <header className="nav-header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/TypeDashWords" className="link">Random Words</Link>
                    </li><li className="nav-item">
                        <Link to="/TypeDashSentence" className="link">Sentence</Link>
                    </li><li className="nav-item">
                        <Link to="/TypeDashCode" className="link">Code</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Statistics" className="link">Statistics</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavHeader;
