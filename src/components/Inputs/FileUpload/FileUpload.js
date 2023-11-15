import React from "react";
import { useDropzone } from "react-dropzone";
import { ImPlus } from "react-icons/im";
import styles from "./styles.module.sass";

function FileUpload({ label, onFileUpload }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        },
        onDrop: handleDrop
    })

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    function handleDrop(acceptedFiles) {
        onFileUpload(acceptedFiles);
    }

    return (
        <>
            <label>{label}</label>
            <div {...getRootProps({ className: `${styles.upload_container}` })}>
                <input {...getInputProps()} />
                <ImPlus className={styles.icon} />
            </div>
            <div className={styles.upload_files}>
                <ul>{files}</ul>
            </div>
        </>
    );
}

export default FileUpload;