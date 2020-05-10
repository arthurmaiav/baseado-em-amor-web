import { FiInstagram, FiMail, FiFacebook, FiPhone } from 'react-icons/fi'
import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import loguinhoImg from '../../assets/loguinho.png';

export default function About() {

    return (

        <div className="somos-container">

            <header>
                <Link style={{width: 150}} className="button" to="/">Voltar</Link>
            </header>

            <div className="sections">
                <section className="redes">
                    <div>
                        <img className="loguinho" src={loguinhoImg} alt="Baseado em Amor" />
                    </div>

                    <div className="contact-section">
                        <h1>Contato</h1>

                        <div className="item-contato">
                            <FiMail size={20} color="#324C22" />
                            <p>contato@email.com</p>
                        </div>

                        <div className="item-contato">
                            <FiInstagram size={20} color="#324C22" />
                            <a href="https://www.instagram.com/baseadoemamor/" target="blank">
                                @baseadoemamor
                        </a>
                        </div>

                        <div className="item-contato">
                            <FiFacebook size={20} color="#324C22" />
                            <a href="https://www.facebook.com/baseadoemamor" target="blank">
                                /baseadoemamor
                        </a>
                        </div>

                        <div className="item-contato">
                            <FiPhone size={20} color="#324C22" />
                            <p>(51) 99948-9494</p>
                        </div>
                    </div>


                    <div className="dev-section">
                        <h1 className="dev-titulo">Desenvolvido por</h1>

                        <div className="item-contato">
                            <FiInstagram size={20} color="#324C22" />
                            <a href="https://www.instagram.com/artmaia/" target="blank">
                                Arthur Maia - @artmaia
                        </a>
                        </div>

                        <div className="item-contato">
                            <FiInstagram size={20} color="#324C22" />
                            <a href="https://www.instagram.com/andrebpires/" target="blank">
                                André Pires - @andrebpires
                        </a>
                        </div>
                    </div>

                </section>

                <section className="informacoes">
                    <h1 className="somos-title">Quem somos</h1>
                    <p>O baseado em amor é um projeto independente, que atua desde junho de 2019 na luta contra a fome com foco na cidade de Esteio. Não são ações com intenções caridosas e sim de cobrança em frente a desigualdade e invisibilidade social. 
Buscamos que esse projeto não precise mais existir, que pessoas não dependam mais de nossas marmitas e cestas básicas, e que tenham ao menos a possibilidade de acesso à oportunidades. 
Auxiliamos diversas famílias em vulnerabilidade social assim como pessoas em situação de rua.
                </p>
                </section>
            </div>

        </div>
    );
}