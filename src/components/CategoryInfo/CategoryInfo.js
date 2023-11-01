import React from "react";
import styles from "./styles.module.sass";
import CompareImage from "../CompareImage/CompareImage";

function CategoryInfo({ officeId, categoryName, responseData }) {
    const officeData = responseData.find((item) => item.id === officeId);

    if (!officeData) {
        return <p>Данные для магазина {officeId} не найдены.</p>;
    }

    const categoryData = officeData.services.find((service) => service.name === categoryName);

    if (!categoryData) {
        return <p>Данные для категории {categoryName} не найдены.</p>;
    }

    function PriceInfo({ item, price, priceAddition }) {
        return (
            <div className={styles.row_item}>
                <p>{item}</p>
                <span className={styles.line}></span>
                <p>{price}</p>
                {priceAddition && (
                    <>
                        <span className={styles.line}></span>
                        <p>{priceAddition}</p>
                    </>
                )}
            </div>
        );
    }

    function CategoryTitle({ categoryName }) {
        return (
            <>
                {categoryData.price ? (
                    <div className={styles.row_item}>
                        <h4>{categoryName}</h4>
                        <span className={styles.line}></span>
                        <p>{categoryData.price}</p>
                    </div>
                ) : (
                    <h4>{categoryName}</h4>
                )}
            </>
        );
    }

    function Product({ product, index }) {
        return (
            <div key={index}>
                {product.price ? (
                    <PriceInfo item={product.title} price={product.price} />
                ) : product.title ? (
                    <p className={styles.headline}>{product.title}</p>
                ) : product.titleFirst ? (
                    <div className={styles.column_title}>
                        <p className={styles.headline}>{product.titleFirst}</p>
                        <p className={styles.headline}>{product.titleSecond}</p>
                        <p className={styles.headline}>{product.titleThird}</p>
                    </div>
                ) : null
                }
                {product.options && (
                    <div>
                        {product.options.map((option, index) => (
                            <div key={index}>
                                {Array.isArray(option.price) ? (
                                    <>
                                        <p>{option.subtitle}</p>
                                        {option.price.map((subOption, index) => (
                                            <PriceInfo key={index} item={subOption.quantity} price={subOption.price} />
                                        ))}
                                    </>
                                ) : (
                                    <PriceInfo item={option.subtitle} price={option.price} priceAddition={option.priceAddition} />
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {product.description && <p>{product.description}</p>}
            </div>
        );
    }

    return (
        <>
            <div className={`col-md-${categoryData.isFullWidth ? '12' : '8'} ${styles.category_info}`}>
                {categoryName && <CategoryTitle categoryName={categoryName} />}
                {categoryData.products && categoryData.products.map((product, index) => (
                    <Product key={index} product={product} index={index} />
                ))}
            </div>
            {categoryData.sideImages && (
                <div className={`col-md-4 ${styles.image_info}`}>
                    {categoryData.sideImages.map((image, index) => (
                        <img key={index} className={styles.img_box} src={image} alt={categoryName} />
                    ))}
                </div>
            )}
            {categoryData.lowerImages && categoryData.lowerImages.map((image, index) => (
                <div key={index} className="col-md-12">
                    <img className={styles.img_box} src={image} alt={categoryName} />
                </div>
            ))}
            {categoryData.isCompareImage && (
                <div className={`col-md-12 ${styles.image_compare}`}>
                    <CompareImage />
                </div>
            )}
        </>
    );
}

export default CategoryInfo;