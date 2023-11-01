import React, {useEffect, useState} from "react";
import {useSelectedValue} from "../../context/SelectedValueContext";
import officeList from "../../data/officeList";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import officeServices from "../../data/officeServicesList";

function OfficeServices() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue).id;
        setSelectedOffice(selectedOffice);
        const officeData = officeServices.find((office) => office.id === selectedValue);
        setSelectedOfficeData(officeData);
    }, [selectedValue]);
    return (
        <>
            <div className="col-md-12">
                <h3>Офисные услуги</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={officeServices} />
                ))
            }
        </>
    );
}

export default OfficeServices;