import { Link } from "react-router-dom";

import styles from "./TopBar.module.scss";

export default function TopBar() {
    const user = true;

    return (
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <i
                    className={`${styles.topIcon} sytles fab fa-facebook-square`}
                ></i>
                <i
                    className={`${styles.topIcon} sytles fab fa-instagram-square`}
                ></i>
                <i
                    className={`${styles.topIcon} sytles fab fa-pinterest-square`}
                ></i>
                <i
                    className={`${styles.topIcon} sytles fab fa-twitter-square`}
                ></i>
            </div>
            <div className={styles.topCenter}>
                <ul className={styles.topList}>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className={styles.topListItem}>ABOUT</li>
                    <li className={styles.topListItem}>CONTACT</li>
                    <li className={styles.topListItem}>
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className={styles.topListItem}>LOGOUT</li>}
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
