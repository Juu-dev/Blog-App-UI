import { Link } from "react-router-dom";

import styles from "./TopBar.module.scss";

export default function TopBar() {
    const user = false;

    return (
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <i
                    className={`${styles.topIcon} + ${styles.topIconFace} sytles fab fa-facebook-square`}
                ></i>
                <i
                    className={`${styles.topIcon} + ${styles.topIconInsta} sytles fab fa-instagram-square`}
                ></i>
                <i
                    className={`${styles.topIcon} + ${styles.topIconPin} sytles fab fa-pinterest-square`}
                ></i>
                <i
                    className={`${styles.topIcon} + ${styles.topIconTwit} sytles fab fa-twitter-square`}
                ></i>
            </div>
            <div className={styles.topCenter}>
                <ul className={styles.topList}>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && (
                        <li className={styles.topListItem}>
                            <Link className="link" to="/">
                                LOGOUT
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.topRight}>
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className={styles.topImg}
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className={styles.topList}>
                        <li className={styles.topListItem}>
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className={styles.topListItem}>
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className={`${styles.topSearchIcon} fas fa-search`}></i>
            </div>
        </div>
    );
}
