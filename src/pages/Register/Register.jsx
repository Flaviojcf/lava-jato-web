import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit"
import styles from ".//Register.module.scss"
import { Link } from "react-router-dom"
import Input from "../../components/Input/Input"


export default function Register() {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.logo}>
                    <h1>Cadastre sua conta</h1>
                </div>
                <p>Informe seus dados para criar sua conta</p>
            </div>
            
            <form>
            <Input
             type='text'
             text='Digite seu nome'
             name='nome'
             placeholder='Digite seu nome completo'
            />
            <Input
             type='text'
             text='Digite seu CPF'
             name='CPF'
             placeholder='Digite seu CPF'
            />

           <Input
             type='email'
             text='E-mail'
             name='email'
             placeholder='Digite seu email'
            />
            <Input 
                type='password'
                text='Senha'
                name='password'
                placeholder='Digite sua senha'
            />
             <Input 
                type='password'
                text='Confirme sua senha'
                name='confirmPassowrd'
                placeholder='Digite sua senha'
            />
            <div className={styles.btn}>
                <ButtonSubmit text='Cadastrar' />
                <Link to='/'>
                    <ButtonSubmit text='Voltar' />
                </Link>
            </div>


            </form>
        </div>
    )
}