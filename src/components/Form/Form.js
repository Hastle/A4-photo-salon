import React from "react";
import Input from "../../components/Inputs/Input/Input";
import Select from "../../components/Inputs/Select/Select";
import FileUpload from "../../components/Inputs/FileUpload/FileUpload"
import styles from "./styles.module.sass";
function Form() {
    return (
        <form>
            <div className={styles.form_group}>
                <Input label={'Ваш номер телефона'} type={'phone'} placeholder={'Номер телефона'} />
            </div>
            <div className={styles.form_group}>
                <Select label={'Выберите фотосалон'} />
            </div>
            <div className={styles.form_group}>
                <Input label={'Выберите размер фотографий'} type={'text'} placeholder={'Размер'} />
            </div>
            <div className={styles.form_group}>
                <FileUpload label={'Загрузите фотографии'}/>
            </div>
        </form>
    )
}
export default Form;