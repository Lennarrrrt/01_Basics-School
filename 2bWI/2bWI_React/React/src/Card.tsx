import styles from './Card.module.css'

type Props = {
    title: string;
    image: string;
}
export default function Card({ title, image }: Props) {
    let random = Math.random();
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img
                src={image} alt="Random Picture"
            />
            <p> {random} </p>
        </div>
    )
}
