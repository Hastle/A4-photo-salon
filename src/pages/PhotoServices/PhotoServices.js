import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";

function PhotoServices(props) {

    console.log(props.selectedOfficeId);

    return (
        <div>
            <div className="col-md-12">
                <h3>Фотоуслуги</h3>
            </div>
            <CategoryInfo officeId={1} categoryName={'Фотопечать на глянцевой фотобумаге'} />
        </div>
    );
}

export default PhotoServices;