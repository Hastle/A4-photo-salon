import React from "react";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import useSelectedOfficeData from "../../hooks/useSelectedOfficeData";
import photoServicesList from "../../data/photoServicesList";

function PhotoServices() {
    const { selectedOffice, selectedOfficeData } = useSelectedOfficeData(photoServicesList);

    return (
        <>
            <div className="col-md-12">
                <h3>Фотоуслуги</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={photoServicesList} />
                ))}
        </>
    );
}

export default PhotoServices;
