import logo from '../img/logo.png';

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <div className="icnos">
                    <img src={logo} alt="" />
                </div>
                <div className="seach">
                    <p>Helsinki,Filand</p>
                    <input type="text" placeholder='Add guests' />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default Nav;