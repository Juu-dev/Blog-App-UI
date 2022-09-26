import { useLocation } from "react-router";

import styles from "./HomePage.module.scss";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

export default function Homepage() {
    const location = useLocation();

    console.log(location);

    return (
        <>
            <Header />
            <div className={styles.home}>
                <Posts />
                <SideBar />
            </div>
        </>
    );
}
