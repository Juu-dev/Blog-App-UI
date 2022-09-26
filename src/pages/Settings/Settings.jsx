import styles from "./Settings.module.scss";

import SideBar from "../../components/SideBar/SideBar";

export default function Settings() {
    return (
        <div className={styles.settings}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsTitle}>
                    <span className={styles.settingsTitleUpdate}>
                        Update Your Account
                    </span>
                    <span className={styles.settingsTitleDelete}>
                        Delete Account
                    </span>
                </div>
                <form className={styles.settingsForm}>
                    <label>Profile Picture</label>
                    <div className={styles.settingsPP}>
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i
                                className={`${styles.settingsPPIcon} far fa-user-circle`}
                            ></i>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className={styles.settingsPPInput}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak" name="name" />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="safak@gmail.com"
                        name="email"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button
                        className={styles.settingsSubmitButton}
                        type="submit"
                    >
                        Update
                    </button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}
