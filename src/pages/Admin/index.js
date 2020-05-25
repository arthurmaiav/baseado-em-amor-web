import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import ReadMoreAndLess from 'react-read-more-less';
import api from '../../services/api';

import './styles.css';

import loguinhoImg from '../../assets/loguinho.png';


export default function Admin() {
    const [cases, setCases] = useState([]);

    const history = useHistory();

    const name = localStorage.getItem('name');

    if (!name) {
        history.push('/login');
    }

    useEffect(() => {
        api.get('cases').then(response => {
            setCases(response.data);
        })
    });

    async function handleDeleteCases(id) {
        try {
            await api.delete(`cases/${id}`);

            setCases(cases.filter(cases => cases.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={loguinhoImg} alt="Baseado em Amor" />

                <span>Olá, <span>{name}</span></span>

                <Link style={{ width: 180 }} className="button" to="/novo-caso">Cadastrar Caso</Link>
                <button className="button-icon" onClick={handleLogout} type="button">
                    <FiPower size={18} color="#537C3A" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {cases.map(cases => (
                    <li key={cases.id}>
                        <strong>CASO:</strong>
                        <p>{cases.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <ReadMoreAndLess
                            className="read-more-content"
                            charLimit={50}
                            readMoreText=" Mostrar mais"
                            readLessText=" Mostrar menos"
                        >{cases.description}</ReadMoreAndLess>

                        {cases.value !== '' && <div>
                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                .format(cases.value)}
                            </p>
                        </div>
                        }

                        <button onClick={() => handleDeleteCases(cases.id)} type="button">
                            <FiTrash2 size={20} color="#55544C" />
                        </button>

                        {cases.donationUrl !== '' && <div>
                            <a className="button"
                                target="_blank"
                                href={cases.donationUrl}
                                style={{ marginTop: 16, bottom: 0 }}>
                                Link para Doação
                        </a>
                        </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}