import styles from '../styles/Navbar.module.css'

export default function NavBar() {
    return (
    <div className={styles.nav}>
        <ul>
            <li>
                <img src="/favicon.ico" alt = 'logo' />
                <p className = {styles.title}>NEXT Store</p>
            </li>
            <li className = {styles.products}>
                <p>Home</p>
                <p>Products</p>
                <p>About Us</p>
            </li>
            <li>
                <input placeholder="Search..." className = {styles.searchBar}></input>
            </li>
            <li className = {styles.hamburger}>
                <i class="fa-solid fa-bars"></i>
            </li>
        </ul>
    </div>
    )
}
