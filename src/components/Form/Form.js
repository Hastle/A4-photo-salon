import React, { useState } from "react";
import Input from "../../components/Inputs/Input/Input";
import Select from "../../components/Inputs/Select/Select";
import FileUpload from "../../components/Inputs/FileUpload/FileUpload";
import styles from "./styles.module.sass";

function Form() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedSalon, setSelectedSalon] = useState("");
    const [photoSize, setPhotoSize] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const handleSalonChange = (value) => {
        setSelectedSalon(value);
    };

    const handlePhotoSizeChange = (value) => {
        setPhotoSize(value);
    };

    const handleFileUpload = (files) => {
        setUploadedFiles(files);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("Номер телефона:", phoneNumber);
        console.log("Выбранный салон:", selectedSalon);
        console.log("Размер фотографий:", photoSize);
        console.log("Загруженные файлы:", uploadedFiles);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={styles.form_group}>
                <Input
                    label={"Ваш номер телефона"}
                    type={"phone"}
                    placeholder={"Номер телефона"}
                    onChange={handlePhoneNumberChange}
                />
            </div>
            <div className={styles.form_group}>
                <Select label={"Выберите фотосалон"} onChange={handleSalonChange} />
            </div>
            <div className={styles.form_group}>
                <Input
                    label={"Выберите размер фотографий"}
                    type={"text"}
                    placeholder={"Размер"}
                    onChange={handlePhotoSizeChange}
                />
            </div>
            <div className={styles.form_group}>
                <FileUpload label={"Загрузите фотографии"} onFileUpload={handleFileUpload} />
            </div>
            <div className={styles.form_group}>
                <button type="submit">Отправить</button>
            </div>
        </form>
    );
}

export default Form;
