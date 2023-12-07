import React from "react";
import ReactDOM from "react-dom";
import { CgClose } from "react-icons/cg";
import styles from "./styles.module.sass";

const Modal = ({ open, onClose, title, children }) => {
    const modalActiveStyles = `${styles.modal_overlay} ${styles.modal_overlay_active}`;

    if (!open)
        return null;
    return ReactDOM.createPortal(
        <div className={open ? modalActiveStyles : styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_header}>
                    <h5>{title}</h5>
                    <button className={styles.btn_close} onClick={onClose}>
                        <CgClose style={{ strokeWidth: 1 }} />
                    </button>
                </div>
                <div className={styles.modal_body}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;