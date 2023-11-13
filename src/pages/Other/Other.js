import React from "react";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import otherList from "../../data/otherList";
import useSelectedOfficeData from "../../hooks/useSelectedOfficeData";

function Other() {
    const { selectedOffice, selectedOfficeData } = useSelectedOfficeData(otherList);

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