import React from "react";
import { FiChevronRight } from "react-icons/fi"
import styles from "./styles.module.sass";
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className={`${styles.carousel_arrows} ${styles.carousel_arrow_next}`} onClick={onClick}>
            <FiChevronRight />
        </button>
    );
}
export default SampleNextArrow;