import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./style.module.sass";

function Layout() {
    return (
        <>
            <Header />
            <div className={`container ${styles.wrapper}`}>
                <div className="row">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;