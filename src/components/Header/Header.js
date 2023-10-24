import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Logotype from "../Logotype/Logotype";
import officeList from "../../data/officeList";
import { useSelectedValue } from "../../context/SelectedValueContext";
import styles from "./styles.module.sass";

function Header() {
    const { selectedValue, setSelectedValue } = useSelectedValue();
    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(parseInt(newValue, 10));
    };

    useEffect(() => {
        const savedValue = localStorage.getItem("selectedOfficeId");
        if (savedValue) {
            setSelectedValue(parseInt(JSON.parse(savedValue), 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedOfficeId", JSON.stringify(selectedValue));
    }, [selectedValue]);

    return (
        <header className={styles.header}>
            <div className={styles.main_menu}>
                <Logotype />
                <nav className={styles.top_navigation}>
                    <NavLink className={styles.menu_item} to="/photo-services">
                        Фотоуслуги
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/photo-souvenirs">
                        Фотосувениры
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/office-services">
                        Офисные услуги
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/other">
                        Другое
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/order">
                        Заказ
                    </NavLink>
                    <NavLink className={styles.menu_item} to="/contacts">
                        Контакты
                    </NavLink>
                    <div className={styles.menu_item}>
                        <MdLocationOn className={styles.icon} />
                        <select
                            name="address-current"
                            value={selectedValue}
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
