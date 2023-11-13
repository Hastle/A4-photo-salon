import React from "react";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import officeServices from "../../data/officeServicesList";
import useSelectedOfficeData from "../../hooks/useSelectedOfficeData";

function OfficeServices() {
    const { selectedOffice, selectedOfficeData } = useSelectedOfficeData(officeServices);

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