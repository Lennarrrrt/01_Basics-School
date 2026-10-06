import styles from './card.module.css'

export default function Card({ title }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img
                src="https://picsum.photos/200/300"
                alt="Random Picture"
            />
        </div>
    )
}
