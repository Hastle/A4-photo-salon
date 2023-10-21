import React from "react";
import styles from "./styles.module.sass";

const CategoryInfo = ({ officeId, categoryName, responseData }) => {

    const officeData = responseData.find((item) => item.id === officeId);

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
        <>
            <div className="col-md-8">
                <h4>{categoryName}</h4>
                {categoryData.products.map((product) => (
                    <div key={`${categoryName}-${product.title}`}>
                        <p className={styles.headline}>{product.title}</p>
                        {product.description && <p>{product.description}</p>}
                        {product.options &&
                            Object.keys(product.options).map((optionName) => (
                                <p key={optionName}>
                                    {optionName} {typeof product.options[optionName] === 'object'
                                    ? Object.keys(product.options[optionName]).map((subOption) => (
                                        <p key={subOption}>{subOption} {product.options[optionName][subOption]}</p>
                                    ))
                                    : product.options[optionName]}
                                </p>
                            ))
                        }
                    </div>
                ))}
            </div>
            <div className={`col-md-4 ${styles.justify_content}`}>
                {categoryData.images && categoryData.images.map((image, index) => (
                    <img key={index} className={styles.img_box} src={image} alt={categoryName} />
                ))}
            </div>
        </>
    );

};

export default CategoryInfo;