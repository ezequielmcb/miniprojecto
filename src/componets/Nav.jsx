import logo from '../img/logo.png';
import Citys from './Citys';

const Nav = ({ filtered, handleChange }) => {
    return (
        <nav>
            <div className="nav">
                <div className="icnos">
                    <img src={logo} alt="" />
                </div>
                <div className="seach">
                    <div className="citys">
                    {filtered.slice(0, 1).map((el, i) => <Citys key={i} el={el} />)}
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder='Add guests'
                    />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default Nav;