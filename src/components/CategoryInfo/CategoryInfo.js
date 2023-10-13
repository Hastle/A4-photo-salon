import React from "react";
import photoServicesList from "../../data/photoServicesList";

const CategoryInfo = ({ officeId, categoryName }) => {

    const officeData = photoServicesList.find((item) => item.id === officeId);

    if (!officeData) {
        return <p>Данные для officeId {officeId} не найдены.</p>;
    }

    const categoryData = officeData.services[categoryName];

    if (!categoryData) {
        return <p>Данные для категории {categoryName} не найдены.</p>;
    }

    return (
        <div className="col-md-8">
            <h4>{categoryName}</h4>
            {Object.keys(categoryData).map((key) => (
                <div key={key}>
                    <p>{key}</p>
                    {typeof categoryData[key] === 'object' ? (
                        Object.keys(categoryData[key]).map((innerKey) => (
                            <p key={innerKey}>
                                {innerKey} {categoryData[key][innerKey]}
                            </p>
                        ))
                    ) : (
                        <p>{categoryData[key]}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryInfo;
