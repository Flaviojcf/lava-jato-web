import styles from ".//ButtonSubmit.module.scss"

export default function ButtonSubmit({text}) {
    return (
        <input type="button" className={styles.btn} value={text}/>
    )
}