import React from "react";
import Dropzone, {useDropzone} from "react-dropzone";
import styles from "./styles.module.sass";
function FileUpload({ label }) {
    const {
        // getRootProps,
        // getInputProps,
        // isFocused,
        // isDragAccept,
        // isDragReject
    } = useDropzone({accept: {'image/*': []}});
    return (
        <>
            <label>{label}</label>
            <Dropzone onDrop={files => console.log(files)}>
                {({getRootProps, getInputProps}) => (
                    <div
                        {...getRootProps({
                            className: 'dropzone',
                            onDrop: event => event.stopPropagation()
                        })}
                        className={styles.upload_container}
                    >
                        <input {...getInputProps()} />
                        <p>Перетащите файлы сюда или нажмите, чтобы выбрать файлы</p>
                    </div>
                )}
            </Dropzone>
        </>
    );
}

export default FileUpload;