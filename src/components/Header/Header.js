import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md"
import Logotype from "../Logotype/Logotype";
import officeList from "../../data/officeList";
import styles from "./styles.module.sass";

function Header(props) {

    const handleOfficeChange = (e) => {
        const officeId = parseInt(e.target.value);
        props.onOfficeChange(officeId);
    }

    return (
        <header className={styles.header}>
            <div className={styles.main_menu}>
                <Logotype />
                <nav className={styles.top_navigation}>
                    <NavLink className={styles.menu_item} to='/photo-services'>Фотоуслуги</NavLink>
                    <NavLink className={styles.menu_item} to='/photo-souvenirs'>Фотосувениры</NavLink>
                    <NavLink className={styles.menu_item} to='/office-sevices'>Офисные услуги</NavLink>
                    <NavLink className={styles.menu_item} to='/other'>Другое</NavLink>
                    <NavLink className={styles.menu_item} to='/order'>Заказ</NavLink>
                    <NavLink className={styles.menu_item} to='/contacts'>Контакты</NavLink>
                    <div className={styles.menu_item}>
                        <MdLocationOn className={styles.icon}/>
                        <select name="adress-current" value={props.selectedOfficeId} onChange={handleOfficeChange}>
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