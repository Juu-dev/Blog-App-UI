import { Link } from "react-router-dom";

import styles from "./Post.module.scss";

export default function Post({ img }) {
    return (
        <div className={styles.post}>
            <img className={styles.postImg} src={img} alt="" />
            <div className={styles.postInfo}>
                <div className={styles.postCats}>
                    <span className={styles.postCat}>
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className={styles.postCat}>
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </span>
                </div>
                <span className={styles.postTitle}>
                    <Link to="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>
                <hr />
                <span className={styles.postDate}>1 hour ago</span>
            </div>
            <p className={styles.postDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda officia architecto deserunt deleniti? Labore ipsum
                aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam,
                reiciendis odio laboriosam?
            </p>
        </div>
    );
}
