import React from "react";
import photoServicesList from "../../data/photoServicesList";

const CategoryInfo = ({ officeId, categoryName }) => {

    const officeData = photoServicesList.find((item) => item.id === officeId);

    if (!officeData) {
        return <p>Данные для магазина {officeId} не найдены.</p>;
    }

    const categoryData = officeData.services.find((service) => service.name === categoryName);

    if (!categoryData) {
        return <p>Данные для категории {categoryName} не найдены.</p>;
    }

    if (!categoryData.products) {
        return <p>Данные для продуктов категории {categoryName} не найдены.</p>;
    }

    return (
        <div className="col-md-8">
            <h4>{categoryName}</h4>
            {categoryData.products.map((product) => (
                <div key={product.size}>
                    <p>{product.size}</p>
                    {product.options &&
                        Object.keys(product.options).map((optionName) => (
                            <p key={optionName}>{optionName} {product.options[optionName]}</p>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default CategoryInfo;