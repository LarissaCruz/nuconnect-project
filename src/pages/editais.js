import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Editais.module.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import LoginIcon from '@/icons/LoginIcon'
import CardEdital from '@/components/CardEdital'


const inter = Inter({ subsets: ['latin'] })

export default function Editais() {
  return (
    <>
      <Head>
        <title>NuConnect - Editais</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://nubank.com.br/images/open-graph-logo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar>
          <Link href="/login" className={styles.linkButton}>Conectar</Link>
          <LoginIcon/>
        </Navbar>
        <div className={styles.container}>
            <h2 className={styles.title} >Editais </h2>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td >
                           <p className={styles.smallTitle}>Inovar para Pessoas Negras</p> 
                           <p className={styles.subtitle}>Inscrições até 18/06/2023</p>
                           <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam neque, malesuada a volutpat eu, malesuada sit amet purus. Aenean.</p> 
                        </td>
                        <td>
                            <button className={styles.btnTable}>Visualizar</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                           <p className={styles.smallTitle}>Inovar para Pessoas Negras</p> 
                           <p className={styles.subtitle}>Inscrições até 18/06/2023</p>
                           <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam neque, malesuada a volutpat eu, malesuada sit amet purus. Aenean.</p> 
                        </td>
                        <td>
                            <button className={styles.btnTable}>Visualizar</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                           <p className={styles.smallTitle}>Inovar para Pessoas Negras</p> 
                           <p className={styles.subtitle}>Inscrições até 18/06/2023</p>
                           <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam neque, malesuada a volutpat eu, malesuada sit amet purus. Aenean.</p> 
                        </td>
                        <td>
                            <button className={styles.btnTable}>Visualizar</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                           <p className={styles.smallTitle}>Inovar para Pessoas Negras</p> 
                           <p className={styles.subtitle}>Inscrições até 18/06/2023</p>
                           <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam neque, malesuada a volutpat eu, malesuada sit amet purus. Aenean.</p> 
                        </td>
                        <td>
                            <button className={styles.btnTable}>Visualizar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

      </main>
    </>
  )
}
