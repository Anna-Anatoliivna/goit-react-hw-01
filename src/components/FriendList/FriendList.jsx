import styles from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <div className={styles.card}>
            <ul className={styles.list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={styles.item} key={id}>
                        <img src={avatar} alt="Avatar" width="48" />
                        <p>{name}</p>
                        <p>{isOnline}</p>
                    </li>
                )
                )}
            </ul>
            </div>
        );
    };