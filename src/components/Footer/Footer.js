import React, { useEffect, useState } from 'react';
import Logotype from '../Logotype/Logotype';
import { useSelectedValue } from '../../context/SelectedValueContext';
import officeList from '../../data/officeList';
import styles from './styles.module.sass';

function Footer() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue);
        setSelectedOffice(selectedOffice);
    }, [selectedValue]);

    return (
        <footer>
            <div className={`container ${styles.footer_container}`}>
                <Logotype />
                <div className={styles.footer_info}>
                    <div className={styles.contacts}>
                        <p><a href={`tel:${selectedOffice ? selectedOffice.phone : officeList[0].phone}`}>Телефон: {selectedOffice ? selectedOffice.phone : officeList[0].phone}</a></p>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2016-2023 "Фотосалон А4" - фотоуслуги в г. {selectedOffice ? selectedOffice.city : officeList[0].city}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;