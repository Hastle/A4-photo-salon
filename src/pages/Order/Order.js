import React from "react";
import styles from "../Main/styles.module.sass";
import Form from "../../components/Form/Form";


function Order() {
    return (
        <>
            <div className={`col-md-6 ${styles.main_features}`}>
                <h1>Оформите заказ на фотопечать прямо сейчас</h1>
                <p>Внимательно проверяйте информацию</p>
                <p>Когда заказ будет готов, сотрудники фотосалона свяжутся с вами </p>
            </div>
            <div className="col-md-auto">
                <Form />
            </div>
        </>
    );
}

export default Order;