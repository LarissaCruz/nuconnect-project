import styles from './styles.module.css'

export default function Input({onChange, label, type, value, estilo}){
    return(
        <div className={styles.container}>
            <label className={styles.label}> {label} </label>
            <input className={styles.input} style={estilo} type={type} value={value} onChange={onChange} />
        </div>        
    )
}