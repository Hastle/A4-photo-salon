import React from "react";
import { FiChevronLeft } from "react-icons/fi"
import styles from "./styles.module.sass";
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className={`${styles.carousel_arrows} ${styles.carousel_arrow_prev}`} onClick={onClick}>
            <FiChevronLeft />
        </button>
    );
}
export default SamplePrevArrow;