import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./style.module.sass";

function Layout(props) {

    const [selectedOfficeId, setSelectedOfficeId] = useState(1);
    const handleOfficeChange = (officeId) => {
        setSelectedOfficeId(officeId);
        props.onOfficeChange(officeId);
    }

    return (
        <div>
            <Header selectedOfficeId={selectedOfficeId} onOfficeChange={handleOfficeChange} />
            <div className={`container ${styles.wrapper}`}>
                <div className="row">
                    {props.children}
                </div>
            </div>
            <Footer selectedOfficeId={selectedOfficeId} />
        </div>
    );
}

export default Layout;