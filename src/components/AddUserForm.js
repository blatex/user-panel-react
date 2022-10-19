import styles from './css/add_user_form.module.css';
import AddUserFormInput from './AddUserFormInput';

function AddUserForm() {

    return(
        <form id='add_user_form' className={styles.form}>
            <AddUserFormInput name='name' type='text' label='Name' />
            <AddUserFormInput name='birth-date' type='date' label='Birth Date' />
            <AddUserFormInput name='role' type='text' label='Role' />
            <AddUserFormInput name='admission-date' type='date' label='Admission Date' />
            <AddUserFormInput name='salary' type='number' label='Salary' />
            <div className={styles['button-item']}>
                <button type='submit' form='add_user_form'>Add</button>
            </div>
        </form>
    );
}

export default AddUserForm;
