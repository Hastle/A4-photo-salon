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
                {categoryData.products.map((product, index) => (
                    <div key={index}>
                        <p className={styles.headline}>{product.title}</p>
                        {product.description && <p>{product.description}</p>}
                        {product.options && (
                            <div>
                                {product.options.map((option, index) => (
                                    <div key={index}>
                                        {Array.isArray(option.price) ? (
                                            <>
                                                <p>{option.subtitle}</p>
                                                {option.price.map((subOption, index) => (
                                                    <div className={styles.row_item} key={index}>
                                                        <p>{subOption.quantity}</p>
                                                        <span className={styles.line}></span>
                                                        <p>{subOption.price}</p>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <div className={styles.row_item}>
                                                <p>{option.subtitle}</p>
                                                <span className={styles.line}></span>
                                                <p>{option.price}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
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
