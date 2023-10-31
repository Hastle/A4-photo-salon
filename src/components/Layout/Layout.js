import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./style.module.sass";

function Layout(props) {

    return (
        <>
            <Header/>
            <div className={`container ${styles.wrapper}`}>
                <div className="row">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
