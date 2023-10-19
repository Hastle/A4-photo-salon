import React, { Component } from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./styles.module.sass";
import Slider from "../../assets/images/slider/slider-1.png";
function Main() {
    return (
        <Layout>
            <div className={`col-md-5 ${styles.main_features}`}>
                <h1>Ваш любимый фотосалон рядом с домом</h1>
                <p>Широкий спектр услуг</p>
                <p>Быстрое изготовление</p>
                <p>Качественная работа</p>
            </div>
            <div className="col">
                <div className={styles.img_box}>
                    <img src={Slider} alt=""/>
                </div>
            </div>
        </Layout>
    );
}

export default Main;