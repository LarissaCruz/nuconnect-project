import Head from 'next/head';
import React, { useState } from "react";
import Link from 'next/link';
import { loginUsuario } from '../services/userService';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import LoginIcon from '@/icons/LoginIcon';
import styles from '@/styles/Login.module.css'
import Image from 'next/image';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLogin = async () => {
        setLoading(true);
        try {
        {/*    
            const data = {
              "email": 'smaurai@email.com',
              "senha": 'lindodemais'
            };
        */}
        
            const data = {
                email: email,
                senha: password
            };

            const success = await loginUsuario(data);
            if (success === true) {
                setLoading(false);
                setError(null);
                console.log("Cadastro Realizado!")
                window.location.href = "/arealogada";
            } else {
                setLoading(false);
                setError(success.message);
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    
    return (
    <>
        <Head>
            <title>NU Connect - Login</title>
            <link rel="icon" href="https://nubank.com.br/images/open-graph-logo.png" />
        </Head>

        <main className={styles.mainContainer}>
            <Navbar>
            </Navbar>
            <div className={styles.grid}>
               <div className={styles.backgroundSection}></div>
                <div>
                <div className={styles.containerForm }>
                    
                    <form className={styles.formulario}>
                        <h1 className={styles.title}>Acesse sua conta</h1>
                        <Input label={"Email"} value={email} type={"email"} onChange={(e) => setEmail(e.target.value)}></Input>
                        <Input label={"Password"} value={password} type={"password"} onChange={(e) => setPassword(e.target.value)}></Input> 
                     
                        <Button onClick={handleLogin} type="button" stylesInline={{marginTop:'20px'}}>Continuar</Button>
                    </form>
                   
                    {loading && <div>Carregando...</div>}
                    {error && <div>{error}</div>}
                </div>
                <div className={styles.containerFoolter}>
                <Link href="/" className={styles.label}>Esqueci a senha?</Link> 
                <Link href="/cadastroProponente" className={styles.label}> Não tem conta?</Link> 
                </div>
                </div>
               
                    

               
            </div>

          
        </main>
       
    </>
    );
}
