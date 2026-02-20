
import styles from "./Header.module.css";
import Navigate from"../../Navigation/Navigate";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1>GDC Cafe</h1>
                <Navigate />
            </header>
        </>
    );
}
