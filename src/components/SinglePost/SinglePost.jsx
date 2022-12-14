import { Link } from "react-router-dom";

import styles from "./SinglePost.module.scss";

export default function SinglePost() {
    return (
        <div className={styles.singlePost}>
            <div className={styles.singlePostWrapper}>
                <img
                    className={styles.singlePostImg}
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <h1 className={styles.singlePostTitle}>
                    Lorem ipsum dolor
                    <div className={styles.singlePostEdit}>
                        <i
                            className={`${styles.singlePostIcon} far fa-edit`}
                        ></i>
                        <i
                            className={`${styles.singlePostIcon} far fa-trash-alt`}
                        ></i>
                    </div>
                </h1>
                <div className={styles.singlePostInfo}>
                    <span>
                        Author:
                        <b className={styles.singlePostAuthor}>
                            <Link className="link" to="/posts?username=Safak">
                                Safak
                            </Link>
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className={styles.singlePostDesc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error quibusdam ipsa quis quidem doloribus eos, dolore
                    ea iusto impedit! Voluptatum necessitatibus eum beatae,
                    adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum
                    necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos,
                    dolore ea iusto impedit! Voluptatum necessitatibus eum
                    beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci
                    voluptas a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error quibusdam ipsa quis quidem doloribus eos, dolore
                    ea iusto impedit! Voluptatum necessitatibus eum beatae,
                    adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum
                    necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
}
