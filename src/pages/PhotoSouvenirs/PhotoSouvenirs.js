import React from "react";
import useSelectedOfficeData from "../../hooks/useSelectedOfficeData";
import photoSouvenirsList from "../../data/photoSouvenirsList";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";

function PhotoSouvenirs() {
    const { selectedOffice, selectedOfficeData } = useSelectedOfficeData(photoSouvenirsList);

    return (
        <>
            <div className="col-md-12">
                <h3>Фотосувениры</h3>
            </div>
            {selectedOfficeData &&
                selectedOfficeData.services.map((service, index) => (
                    <CategoryInfo key={index} officeId={selectedOffice} categoryName={service.name} responseData={photoSouvenirsList} />
                ))}
        </>
    );
}

export default PhotoSouvenirs;