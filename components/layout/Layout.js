import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>FarnamCar</h2>
                    <p>Choose an Buy your car </p>
                </Link>

            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Developed by Fatemeh Bazgir | FarnamCar Project &copy;
            </footer>
        </>
    )
}

export default Layout