import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import { useSelectedValue } from "../../context/SelectedValueContext";
import officeList from "../../data/officeList";
import styles from "./styles.module.sass";

function Contacts() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue).id;
        setSelectedOffice(selectedOffice);
    }, [selectedValue]);

    const selectedOfficeData = officeList.find(office => office.id === selectedOffice);
    return (
        <Layout>
            <div className="col-md-12">
                <h3>Контакты</h3>
            </div>
            <div className={`col-md-auto ${styles.main_features}`}>
                <p>Адрес: {selectedOfficeData.address}</p>
                <p>Режим работы: {selectedOfficeData.schedule}</p>
                <p><a href={`tel:${selectedOfficeData.phone}`}>Телефон: {selectedOfficeData.phone}</a></p>
                <p><a href={`mailto:${selectedOfficeData.email}`}>Почта: {selectedOfficeData.email}</a></p>
                {selectedOfficeData.vk && selectedOfficeData.vk.map((vkInfo, index) => (
                    <p key={index}>
                        <a href={vkInfo.link} target="_blank" rel="noopener noreferrer">
                            VK: {vkInfo.name}
                        </a>
                    </p>
                ))}
                <p>{selectedOfficeData.organizationName}</p>
                <p>ИНН: {selectedOfficeData.inn}</p>
                <p>ОГРНИП: {selectedOfficeData.ogrnip}</p>
            </div>
        </Layout>
    );
}

export default Contacts;