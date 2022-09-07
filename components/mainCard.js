import styles from '../styles/MainCard.module.css'

export default function MainCard(props) {
    return (
    <div className={styles.mainCard}>
        <img src={props.product.image} alt = "product image" />
        <div className = {styles.header}>
            <h1>{props.product.title}</h1>
            <p className = {styles.price}>${props.product.price}</p>
        </div>
        <div className = {styles.tag}>
            <p>{props.product.category.toUpperCase()}</p>
        </div>
    </div>
    )
}
