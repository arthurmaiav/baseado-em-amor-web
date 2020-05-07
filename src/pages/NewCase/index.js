import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import loguinhoImg from '../../assets/loguinho.png';

import api from '../../services/api';

import './styles.css';

export default function NewCase() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [donationUrl, setDonationUrl] = useState('');

    const history = useHistory();

    async function handleNewCase(e) {
        e.preventDefault();
        if(value.isEmpty()){
            const data = {
                title,
                description,
                donationUrl
            }
        }
        const data = {
            title,
            description,
            value,
            donationUrl
        }

        try {
            await api.post('cases', data)

            history.push('/home');
        } catch (err) {
            alert('Erro ao criar cadastro, tento novamente.');
        }
    }

    return (
        <div className="new-case-container">
            <div className="content">
                <section>
                    <img src={loguinhoImg} alt="Baseado em Amor" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente.</p>

                    <Link className="back-link" to="/admin">
                        <FiArrowLeft size={16} color="#324c22" />
                         Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewCase}>
                    <input
                        required
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        required
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Link para doação"
                        value={donationUrl}
                        onChange={e => setDonationUrl(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}