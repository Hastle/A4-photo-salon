import React, { useEffect, useState } from "react";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import { useSelectedValue } from "../../context/SelectedValueContext";
import officeList from "../../data/officeList";
import photoServicesList from "../../data/photoServicesList";

function PhotoServices() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue).id;
        setSelectedOffice(selectedOffice);
        const officeData = photoServicesList.find((office) => office.id === selectedValue);
        setSelectedOfficeData(officeData);
    }, [selectedValue]);

    return (
        <>
            <div className="col-md-12">
                <h3>Фотоуслуги</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={photoServicesList} />
                ))
            }
        </>
    );
}

export default PhotoServices;