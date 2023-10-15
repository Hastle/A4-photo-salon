import React from "react";
import Logotype from "../Logotype/Logotype";
import officeList from "../../data/officeList";
import styles from "./styles.module.sass";
function Footer(props) {

    return (
        <footer>
            <div className={`container ${styles.footer_container}`}>
                <Logotype />
                <div className={styles.footer_info}>
                    <div className={styles.contacts}>
                        <p>{officeList.find(office => office.id === props.selectedOfficeId).address}</p>
                        <p>Телефон: <a href={`tel:${officeList.find(office => office.id === props.selectedOfficeId).phone}`}>{officeList.find(office => office.id === props.selectedOfficeId).phone}</a></p>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2016-2023 "Фотосалон А4" - фотоуслуги в г. {officeList.find(office => office.id === props.selectedOfficeId).city}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;