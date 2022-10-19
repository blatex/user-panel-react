import styles from './css/add_user_form_input.module.css';

function AddUserFormInput(props) {
    return (
        <div className={styles['form-item']}>
            <label htmlFor={props.name} >{props.label}</label>
            <input id={props.name} name={props.name} type={props.type} />
        </div>
    );
}

export default AddUserFormInput;
