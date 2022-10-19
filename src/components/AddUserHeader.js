import styles from './css/add_user_header.module.css';

function AddUserHeader(props) {

    const collapseHandler = () => {
        props.onSetCollapseHandler();
    }

    return (
        <div className={styles['add-user-header']}>
            <h2>Add New User</h2>
            <button type='button' onClick={collapseHandler} >{props.icon}</button>
        </div>
    );
}

export default AddUserHeader;
