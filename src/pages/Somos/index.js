import React, { useState } from 'react';
import { FiInstagram, FiMail, FiFacebook, FiPhone } from 'react-icons/fi'


import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';

import './styles.css';

import loguinhoImg from '../../assets/loguinho.png';
import insta from '../../assets/instalogo.png'
import mail from '../../assets/maillogo.png'


export default function Somos() {


    return (

        <div className="somos-container">

            <header>
                <Link className="button" to="/">Voltar</Link>
            </header>

            <div className="sections">
                <section className="redes">
                    <div>
                        <img className="loguinho" src={loguinhoImg} alt="Be The Hero" />
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                </section>
            </div>

        </div>
    );
}