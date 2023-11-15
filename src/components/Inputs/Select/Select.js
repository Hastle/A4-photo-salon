import React, { useEffect, useState } from "react";
import useSelectedOfficeData from "../../../hooks/useSelectedOfficeData";
import officeList from "../../../data/officeList";

function Select({ label, onChange }) {
    const { selectedOffice } = useSelectedOfficeData();
    const [formSelectedValue, setFormSelectedValue] = useState(selectedOffice || "");

    useEffect(() => {
        onChange(formSelectedValue);
    }, [onChange, formSelectedValue]);

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setFormSelectedValue(newValue);
        onChange(newValue);
    };

    return (
        <>
            <label>{label}</label>
            <select
                name="address-current"
                value={formSelectedValue}
                onChange={handleSelectChange}
            >
                {officeList.map((office) => (
                    <option key={office.id} value={office.id}>
                        {`${office.city}, ${office.department}`}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;