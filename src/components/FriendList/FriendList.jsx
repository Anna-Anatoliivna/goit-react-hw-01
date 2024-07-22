import styles from "./FriendList.module.css"

export const FriendList = ({ avatar, name, isOnline }) => {
    return (<div className={styles.card}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline}</p>
    </div >)
}