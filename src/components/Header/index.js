import styles from './styles.module.css';
import Button from '../Button';

export default function Header({children}){
    return(
        <>
            <div className={styles.container}>
                <Button url="/" form="circle">
                    <i className="material-icons">arrow_back</i>
                </Button>
            </div>
            <h1 className={styles.titulopagina}>Nuconnect</h1>
            {children}
            <div className={styles.linha}></div>
        </>
    )
}