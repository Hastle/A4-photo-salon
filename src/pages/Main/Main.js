import React from 'react';
import styles from "./styles.module.sass";
import Carousel from "../../components/Carousel/Carousel";

function Main() {
    return (
        <>
            <div className={`col-md-5 ${styles.main_features}`}>
                <h1>Ваш любимый фотосалон рядом с домом</h1>
                <p>Широкий спектр услуг</p>
                <p>Быстрое изготовление</p>
                <p>Качественная работа</p>
            </div>
            <div className="col-md-7">
                <Carousel />
            </div>
        </>
    );
}

export default Main;