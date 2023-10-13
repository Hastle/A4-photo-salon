import React from "react";
import photoServicesList from "../../data/photoServicesList";

const CategoryInfo = ({ officeId, categoryName }) => {
    // Найдем данные для указанного officeId
    const officeData = photoServicesList.find((item) => item.id === officeId);

    // Проверим, что данные для этого officeId были найдены
    if (!officeData) {
        return <p>Данные для officeId {officeId} не найдены.</p>;
    }

    // Далее, попробуем найти информацию о категории
    const categoryData = officeData.services[categoryName];

    // Проверим, что данные для этой категории были найдены
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
                        // Если значение - объект, обходим его и выводим ключи и значения
                        Object.keys(categoryData[key]).map((innerKey) => (
                            <p key={innerKey}>
                                {innerKey} {categoryData[key][innerKey]}
                            </p>
                        ))
                    ) : (
                        // Иначе выводим значение
                        <p>{categoryData[key]}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryInfo;
