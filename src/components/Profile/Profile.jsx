import styles from "./Profile.module.css"


export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.img}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.title}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.tag}>{location}</p>
            </div>

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <span className={styles.text}>Followers</span>
                    <span className={styles.stat}>{stats.followers}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.text}>Views</span>
                    <span className={styles.stat}>{stats.views}</span>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.text}>Likes</span>
                    <span className={styles.stat}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}