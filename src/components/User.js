import styles from './css/user.module.css';
import UserInfo from './UserInfo';

function User(props) {
    const infos = props.user.infos;

    return(
        <div className={styles.user}>
            {infos.map(
                info => <UserInfo 
                    key = {info.label}
                    label = {info.label}
                    value = {info.value}
                />
            )}
        </div>
    );
}

export default User;
