import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {useSelectedValue} from "../../context/SelectedValueContext";
import officeList from "../../data/officeList";
import photoSouvenirsList from "../../data/photoSouvenirsList";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";

function PhotoSouvenirs() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue).id;
        setSelectedOffice(selectedOffice);
        const officeData = photoSouvenirsList.find((office) => office.id === selectedValue);
        setSelectedOfficeData(officeData);
    }, [selectedValue]);
    return (
        <Layout>
            <div className="col-md-12">
                <h3>Фотосувениры</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={photoSouvenirsList} />
                ))
            }
        </Layout>
    );
}

export default PhotoSouvenirs;