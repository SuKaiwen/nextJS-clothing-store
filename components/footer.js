import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
    <div className={styles.footer}>
        <h1>NEXT Store</h1>
        <div className = {styles.grid}>
            <div className = {styles.col}>
                <p>FIND A STORE</p>
                <p>FEEDBACK</p>
                <p>PROMO CODE</p>
                <p>BECOME A MEMBER</p>
            </div>
            <div className = {styles.colVar2}>
                <p>Order Status</p>
                <p>Shipping</p>
                <p>Delivery</p>
                <p>Returns</p>
                <p>Payment</p>
                <p>Contact Us</p>
            </div>
            <div className = {styles.colVar2}>
                <p>News</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Sustainability</p>
            </div>
            <div className = {styles.colVar2}>
                <p>NEXT app</p>
                <p>NEXT Store Club</p>
                <p>Membership</p>
            </div>
            <div className = {styles.colVar2}>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
    )
}
