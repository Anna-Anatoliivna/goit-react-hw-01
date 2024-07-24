import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <div className={styles.card}>
            <ul className={styles.list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={styles.item} key={id}>
                        <FriendListItem 
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}  
                                                 />
                    </li>
                )
                )}
            </ul>
            </div>
        );
    };