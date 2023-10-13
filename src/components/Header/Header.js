import React from "react";
import { NavLink } from "react-router-dom";
import Logotype from "../Logotype/Logotype";
import "./styles.sass";

function Header() {
    return (
        <header>
            <div className="main-menu">
                <Logotype />
                <nav className="top-navigation">
                    <NavLink className="menu-item" to='/photo-services'>Фотоуслуги</NavLink>
                    <NavLink className="menu-item" to='/photo-souvenirs'>Фотосувениры</NavLink>
                    <NavLink className="menu-item" to='/office-sevices'>Офисные услуги</NavLink>
                    <NavLink className="menu-item" to='/other'>Другое</NavLink>
                    <NavLink className="menu-item" to='/order'>Заказ</NavLink>
                    <NavLink className="menu-item" to='/contacts'>Контакты</NavLink>
                    <div className="menu-item">
                        <select name="adress-current">
                            <option value="value1" selected>Ярославль, Лента</option>
                            <option value="value2">Ярославль, Глобус</option>
                            <option value="value3">Ярославль, Рио</option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;