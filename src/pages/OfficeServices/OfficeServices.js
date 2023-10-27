import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
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
        <Layout>
            <div className="col-md-12">
                <h3>Офисные услуги</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service) => (
                    <CategoryInfo key={service.name} officeId={selectedOffice} categoryName={service.name} responseData={officeServices} />
                ))
            }
        </Layout>
    );
}

export default OfficeServices;