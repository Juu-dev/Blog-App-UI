import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore
                    mollit amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>CATEGORIES</span>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>FOLLOW US</span>
                <div className={styles.sidebarSocial}>
                    <i
                        className={` ${styles.sidebarIcon} + ${styles.topIconFace} fab fa-facebook-square`}
                    ></i>
                    <i
                        className={` ${styles.sidebarIcon} + ${styles.topIconInsta} fab fa-instagram-square`}
                    ></i>
                    <i
                        className={` ${styles.sidebarIcon} + ${styles.topIconPin} fab fa-pinterest-square`}
                    ></i>
                    <i
                        className={` ${styles.sidebarIcon} + ${styles.topIconTwit} fab fa-twitter-square`}
                    ></i>
                </div>
            </div>
        </div>
    );
}
