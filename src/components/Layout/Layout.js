import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.sass";

function Layout(props) {
    return (
        <div>
            <Header />
            <div className="container wrapper">
                <div className="row">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;