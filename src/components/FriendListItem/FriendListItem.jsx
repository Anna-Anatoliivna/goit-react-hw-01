import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
    <>
         <img className={styles.img} src={avatar} alt="Avatar" width="48" />
        <p className={styles.title}>{name}</p>
        <p className={clsx(styles.status, isOnline === true && styles.online, isOnline === false && styles.offline)}>
            {isOnline === true ? "Online" : "Offline"}</p>
                 
    </> 
    );
};