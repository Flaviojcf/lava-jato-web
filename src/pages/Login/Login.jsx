import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit"
import styles from ".//Login.module.scss"
import img from "../../assets/log-in.svg"
import Input from "../../components/Input/Input"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.logo}>
                    <img src={img} alt="logo"/>
                    <h1>Faça seu Login</h1>
                </div>
                <p>Entre com suas informações de cadastro</p>
            </div>
            
            <form>

           <Input
             type='email'
             text='E-mail'
             name='email'
             placeholder='Digite seu email'
            />
            <Input 
                type='password'
                text='Senha'
                name='name'
                placeholder='Digite sua senha'
            />

            <div className={styles.checkBox}>
                <div className={styles.checkInput}>
                    <input type="checkbox" id="checkBox"/>
                    <label htmlFor="checkBox">Lembre-me</label>
                </div>

                <Link to='/password'>
                    <p>Esqueci minha senha</p>
                </Link>
            </div>
            <ButtonSubmit text='Entrar'/>

            <div className={styles.register}>
              <Link to='/register'>
                  <p>Cadastre sua conta aqui</p>
             </Link>

            </div>

            </form>
        </div>
    )
}