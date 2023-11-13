import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Sidebar({}){
   

    return(
        <div className={styles.sidebar}>
            <div className={styles.containerLogo}>
                <Image 
                    src="/logo.png"
                    width={154}
                    height={27}
                    alt="NuConnect"
                />
            </div>
            
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Editais</button>
            <button className={styles.button}>Proponentes</button>
            <button className={styles.button}>Meus projetos</button>
        </div>
    )
}