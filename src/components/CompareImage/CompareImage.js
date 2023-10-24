import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Before from "../../assets/images/photo-services/compare-1.jpeg";
import After from "../../assets/images/photo-services/compare-2.jpeg";

const firstImage = {
    imageUrl: After
};
const secondImage = {
    imageUrl: Before
};

function CompareImage() {
    return (
        <ReactBeforeSliderComponent
            firstImage={firstImage}
            secondImage={secondImage}
        />
    );
}

export default CompareImage;