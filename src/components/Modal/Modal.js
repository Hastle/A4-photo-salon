import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.sass";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles["modal-overlay"]}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles["close-button"]}>
                    Закрыть
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;