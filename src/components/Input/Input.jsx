import styles from './/Input.module.scss'

export default function Input({type, text, name, placeholder}) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}</label>
            <input 
                    required           
                    type={type} 
                    name={name} 
                    id={name} 
                    placeholder={placeholder} 
                        />
        </div>
    )
}

