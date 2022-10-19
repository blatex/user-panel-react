import styles from './css/user_info.module.css';

function UserInfo(props) {
    return (
        <div className={styles['user-info']}>
            <span>{props.label + ':'}</span>
            <p>{props.value}</p>
        </div>
    );
}

export default UserInfo;
