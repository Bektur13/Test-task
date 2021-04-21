import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <div>
                        <h1 className="header__title">ARMAGGEDON V</h1>
                        <p className="header__p">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                    </div>
                    <div className="header__links">
                        <NavLink exact to='/' activeClassName="active">Астероиды</NavLink>
                        <NavLink exact to='/destruction' activeClassName="active">Уничтожение</NavLink>
                    </div>
                </div>
                <div className="dark__line"></div>
            </div>
        </header>
    );
};

export default Header;