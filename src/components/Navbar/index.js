import styles from './styles.module.css'
import Image from 'next/image';

export default function Navbar({children, type}) {
    return (
        <nav className={[styles.header, styles[type]].join(' ')}>
            {type === "primary"?(
                <Image 
                    src="/logo-lilas.png"
                    width={124}
                    height={31}
                    alt="NuConnect"
                />
            ):(
                <Image 
                    src="/logo.png"
                    width={154}
                    height={27}
                    alt="NuConnect"
                />
            )}
            
            <div className={styles.buttonLink}>
                {children}
            </div>
            
        </nav>
    )
}