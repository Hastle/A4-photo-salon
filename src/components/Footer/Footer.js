import React, { useEffect, useState } from 'react';
import Logotype from '../Logotype/Logotype';
import officeList from '../../data/officeList';
import { useSelectedValue } from '../../context/SelectedValueContext';
import styles from './styles.module.sass';

function Footer() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue);
        console.log('selectedValue:', selectedValue);
        console.log('office:', selectedOffice);
        setSelectedOffice(selectedOffice);
    }, [selectedValue]);

    return (
        <footer>
            <div className={`container ${styles.footer_container}`}>
                <Logotype />
                <div className={styles.footer_info}>
                    <div className={styles.contacts}>
                        {selectedOffice && (
                            <p>Телефон: <a href={`tel:${selectedOffice.phone}`}>{selectedOffice.phone}</a></p>
                        )}
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2016-2023 "Фотосалон А4" - фотоуслуги в г. {selectedOffice.city}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;