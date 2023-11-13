import styles from './styles.module.css'
import { useRouter } from 'next/router'

export default function Button({onClick, label, url, type, stylesInline, children,form}){
    const router = useRouter();
    const handleClick = () => {router.push(url)};

    return(
        <button
            type={type}
            onClick={onClick?onClick:handleClick}
            className={form === "circle" ? styles.buttonCircle : styles.button}
            style={stylesInline}
        >
    
            {label} 
            {children}
                
        </button>
    )
}