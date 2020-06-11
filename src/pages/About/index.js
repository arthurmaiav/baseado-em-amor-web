import { FiInstagram, FiMail, FiFacebook, FiPhone } from 'react-icons/fi'
import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import logoHeader from '../../assets/loguinho.png';
import badgePlayStore from '../../assets/badge_google_play.png';

export default function About() {

    return (

        <div className="somos-container">

            <header>
                <Link style={{ width: 150 }} className="button" to="/">Voltar</Link>
            </header>

            <div className="sections">
                <section className="redes">
                    <div>
                        <img className="loguinho" src={logoHeader} alt="Baseado em Amor" />
                    </div>

                    <div className="contact-section">
                        <h1>Contato</h1>

                        <div className="item-contato">
                            <FiMail size={20} color="#324C22" />
                            <p>baseadoemamoresteio@gmail.com</p>
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
                            <p>(51) 99749-2100</p>
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

                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.pinkyandbrain.baseadoemamor" target="blank">
                            <img className="badgeGooglePlay" src={badgePlayStore} alt="Disponivel na PlayStore" />
                        </a>
                    </div>

                </section>

                <section className="informacoes">
                    <h1 className="somos-title">Quem somos</h1>
                    <p>        O Baseado em Amor é um projeto independente composto por um grupo de quatro (4) pessoas (podendo este número variar conforme época). Nos mantemos por meio de doações e atuamos desde junho de 2019 lutando contra a fome. O nosso foco é na cidade de Esteio, Rio Grande do Sul. Funcionamos em um espaço cedido voluntariamente por um dos organizadores do projeto no bairro Novo Esteio. Realizamos a entrega de refeições, cestas básicas, roupas, absorventes e fraldas para famílias em vulnerabilidade social na comunidade Hípica, localizada no bairro Primavera além de, servirmos semanalmente, marmitas no período da noite para pessoas em situação de rua. Devido ao surto de COVID-19, as famílias integradas ao projeto, estão ainda mais necessitadas nesse momento delicado. Auxiliamos mensalmente as famílias em vulnerabilidade social da Hípica com cerca de cinquenta (50) cestas básicas, o que pode mudar de acordo com o recebimento de doação de alimentos não perecíveis. Também servimos refeições nessa mesma comunidade, alimentando duzentas (200) pessoas a cada semana. <br />        Relativo às pessoas em situação de rua, nossas ações são voltadas para distribuição de refeições pelo centro de Esteio e arredores, contabilizando cerca de cem (100) refeições por semana. <br />        Sendo assim, o projeto funciona financeiramente por meio de doações espontâneas. Recebemos doações de alimentos não perecíveis de apoiadores, organizações e da população. Para a realização das refeições, os legumes e verduras são doados pelo Sacolão Pilatti do bairro Novo Esteio. <br />      Quanto a voluntários, em um outro momento, estávamos abertos a recebê-los em nossa sede para o auxílio no preparo das refeições e apresentações sobre como funciona o projeto, porém, prezando pela saúde de todos, aglomerações no momento não convém. <br />       Por fim, cabe ressaltar que nossas ações não são com intenções caridosas, buscamos uma cobrança em frente a desigualdade e invisibilidade social. Lamentamos que esse projeto precise existir e que pessoas tenham que depender de nossas marmitas e cestas básicas, procuramos maneiras para que tenham ao menos a possibilidade de acesso às oportunidades.
                </p>
                </section>
            </div>

        </div>
    );
}