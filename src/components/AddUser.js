import styles from './css/add_user.module.css';
import { useState } from 'react';
import AddUserHeader from './AddUserHeader';
import AddUserForm from './AddUserForm';

function AddUser(props) {

    const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

    const setCollapseHandler = () => {
        setIsCollapsed(!isCollapsed);
    }

    if(isCollapsed === true) {
        return (
            <div className={styles['add-user']}>
                <AddUserHeader icon='+' onSetCollapseHandler={setCollapseHandler} />
            </div>
        );
    }else{
        return (
            <div className={styles['add-user']}>
                <AddUserHeader icon='x' onSetCollapseHandler={setCollapseHandler} />
                <AddUserForm />
            </div>
        );
    }
}

export default AddUser;
