import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit"
import styles from ".//Register.module.scss"
import { Link } from "react-router-dom"
import Input from "../../components/Input/Input"
import {useState,useEffect} from "react";


export default function Register() {

    function validate() {
        return (
            //validar tipos
        )
    }


    function createAccount() {
        const isValid = validate()
            if (isValid == false){
                return
            }


        fetch('http://localhost:4000/employees',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
                body: JSON.stringify(),
            
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
            
        }).catch((err) => console.log(err))
    }


  
   
  



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
             text='Nome'
             name='nome'
             placeholder='Digite seu nome completo'
            />
            <Input
             type='text'
             text='CPF'
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