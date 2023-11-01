import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import { useSelectedValue } from "../../context/SelectedValueContext";
import officeList from "../../data/officeList";
import otherList from "../../data/otherList";

function Other() {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOffice = officeList.find(office => office.id === selectedValue).id;
        setSelectedOffice(selectedOffice);
        const officeData = otherList.find((office) => office.id === selectedValue);
        setSelectedOfficeData(officeData);
    }, [selectedValue]);
    return (
        <>
            <div className="col-md-12">
                <h3>Другое</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={otherList} />
                ))
            }
        </>
    );
}

export default Other;