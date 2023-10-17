import React from "react";
import Layout from "../../components/Layout/Layout";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";

function PhotoServices() {

    return (
        <Layout>
            <div className="col-md-12">
                <h3>Фотоуслуги</h3>
            </div>
            <CategoryInfo officeId={1} categoryName={'Фотопечать на глянцевой фотобумаге'} />
        </Layout>
    );
}

export default PhotoServices;