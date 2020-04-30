import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'


import api from '../../services/api';

import './styles.css';

import loguinhoImg from '../../assets/loguinho.png';
import logoImg from '../../assets/logo.png';


export default function Logon() {

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

            history.push('/home');
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={loguinhoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input required placeholder="Usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input required type="password" placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>


                </form>
            </section>

            <img src={logoImg} alt="Heroes" />
        </div>
    );
}