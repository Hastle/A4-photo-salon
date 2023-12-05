import { useState, useEffect } from "react";
import { useSelectedValue } from "../context/SelectedValueContext";
import officeList from "../data/officeList";

const useSelectedOfficeData = (dataList) => {
    const { selectedValue } = useSelectedValue();
    const defaultValue = 1;
    const resolvedSelectedValue = selectedValue || defaultValue;

    const [selectedOffice, setSelectedOffice] = useState(defaultValue);
    const [selectedOfficeData, setSelectedOfficeData] = useState(null);

    useEffect(() => {
        const selectedOfficeItem = (dataList || officeList)?.find?.((office) => office.id === resolvedSelectedValue);

        if (selectedOfficeItem) {
            setSelectedOffice(selectedOfficeItem.id);
            setSelectedOfficeData(selectedOfficeItem);
        }
    }, [resolvedSelectedValue, dataList]);

    return { selectedOffice, selectedOfficeData };
};

export default useSelectedOfficeData;
