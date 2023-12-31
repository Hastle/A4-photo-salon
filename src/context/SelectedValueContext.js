import React, { createContext, useContext, useState } from "react";

const SelectedValueContext = createContext();

export function SelectedValueProvider({ children }) {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <SelectedValueContext.Provider value={{ selectedValue, setSelectedValue }}>
            {children}
        </SelectedValueContext.Provider>
    );
}

export function useSelectedValue() {
    return useContext(SelectedValueContext);
}