import Head from 'next/head';

import { FiArrowRight, FiGithub } from 'react-icons/fi';

import style from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={style.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <img src="./background.png" alt="Logo"/>
      <section>
        <img src="./logo-white.svg" alt="Move-it" />
        <div>
          <h1>Bem-vindo</h1>
          <div className={style.textLogin}>
            <FiGithub size={40} color='#fff' />
            <p>Faça login com seu Github para começar</p>
          </div>
          <div className={style.inputContainer}>
            <input type="text" placeholder="Digite seu username" />
            <button>
              <FiArrowRight size={40} color='#fff' />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}