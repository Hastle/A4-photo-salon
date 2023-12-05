import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Logotype from "../Logotype/Logotype";
import officeList from "../../data/officeList";
import { useSelectedValue } from "../../context/SelectedValueContext";
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import "./burger.sass";
import styles from "./styles.module.sass";

function Header() {
    const defaultValue = 1;
    const { selectedValue, setSelectedValue } = useSelectedValue();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedValue = localStorage.getItem("selectedOfficeId");
        if (savedValue) {
            setSelectedValue(parseInt(JSON.parse(savedValue), 10));
        } else {
            console.log("Здесь происходит вызов modal");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedOfficeId", JSON.stringify(selectedValue));
    }, [selectedValue]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(parseInt(newValue, 10));
        closeMenu();
    };
    return (
        <header className={styles.header}>
            <div className={styles.main_menu}>
                <div className={styles.navigation_layer}>
                    <Logotype onClick={closeMenu}/>
                    <Burger onClick={toggleMenu} isOpen={isMenuOpen} Component="button" type="button" />
                </div>
                <nav className={isMenuOpen ? styles.top_navigation_active : styles.top_navigation}>
                    <NavLink className={styles.menu_item} to="/photo-services" onClick={closeMenu}>
                        Фотоуслуги
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/photo-souvenirs" onClick={closeMenu}>
                        Фотосувениры
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/office-services" onClick={closeMenu}>
                        Офисные услуги
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/other" onClick={closeMenu}>
                        Другое
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/order" onClick={closeMenu}>
                        Заказ
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/contacts" onClick={closeMenu}>
                        Контакты
                    </NavLink>
                    <div className={styles.menu_item}>
                        <MdLocationOn className={styles.icon} />
                        <select
                            name="address-current"
                            value={selectedValue ? selectedValue.toString() : defaultValue.toString()}
                            onChange={handleSelectChange}
                        >
                            {officeList.map((office) => (
                                <option key={office.id} value={office.id}>
                                    {`${office.city}, ${office.department}`}
                                </option>
                            ))}
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
