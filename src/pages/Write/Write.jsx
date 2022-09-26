import styles from "./Write.module.scss";

export default function Write() {
    return (
        <div className={styles.write}>
            <img
                className={styles.writeImg}
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className={styles.writeForm}>
                <div className={styles.writeFormGroup}>
                    <label htmlFor="fileInput">
                        <i className={`${styles.writeIcon} fas fa-plus`}></i>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                    />
                    <input
                        className={styles.writeInput}
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className={styles.writeFormGroup}>
                    <textarea
                        className={styles.writeInput + styles.writeText}
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className={styles.writeSubmit} type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}
