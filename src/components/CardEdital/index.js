import Link from 'next/link'
import styles from './styles.module.css'


export default function CardEdital({children, type}) {
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>
                Inovar para Pessoas Negras
            </h1>
            <span className={styles.subtitle}>
                Inscrições até 18/06/2023
            </span>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Nulla quam neque, malesuada 
            a volutpat eu, malesuada sit 
            amet purus. Aenean.
            </p>
            <Link href="/" className={styles.link}>Saiba mais</Link>
        </div>
       
    )
}