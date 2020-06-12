import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import loguinhoImg from '../../assets/loguinho.png';
import logoImg from '../../assets/logo.png';


export default function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { user, password });

            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
            localStorage.setItem('name', response.data.name);

            history.push('/admin');
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    const variants = {
        initial: {
            opacity: 1,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }

    const transitions = {
        duration: 0.6,
    }

    return (
        <motion.div className="logon-container"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transitions}>

            <section className="form">
                <img src={loguinhoImg} alt="Baseado em Amor" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input required placeholder="Usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input required type="password" placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/">
                        <FiArrowRight size={16} color="#324c22" />
                         Voltar para home
                    </Link>
                </form>
            </section>

            <img className="big-image" src={logoImg} alt="Baseado em Amor" />
        </motion.div>
    );
}