import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "../Main/styles.module.sass";

function Order() {
    return (
        <Layout>
            <div className={`col-md-5 ${styles.main_features}`}>
                <h1>Оформите заказ на фотопечать прямо сейчас</h1>
                <p>Внимательно проверяйте информацию</p>
                <p>Когда заказ будет готов, сотрудники фотосалона свяжутся с вами </p>
            </div>
            <div className="col">
                <div>

                </div>
            </div>
        </Layout>
    );
}

export default Order;