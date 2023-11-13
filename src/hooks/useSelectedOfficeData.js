import { useState, useEffect } from "react";
import { useSelectedValue } from "../context/SelectedValueContext";
import officeList from "../data/officeList";

const useSelectedOfficeData = (dataList) => {
    const { selectedValue } = useSelectedValue();
    const [selectedOffice, setSelectedOffice] = useState(1);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOfficeId = (dataList || officeList).find((office) => office.id === selectedValue)?.id;
        setSelectedOffice(selectedOfficeId);
        const officeData = (dataList || officeList).find((office) => office.id === selectedValue);
        setSelectedOfficeData(officeData);
    }, [selectedValue, dataList]);

    return { selectedOffice, selectedOfficeData };
};

export default useSelectedOfficeData;
