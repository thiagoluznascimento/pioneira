import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles.css';

import { companies } from '../../data/companies';
import { Container } from "react-bootstrap";

function Companies() {

    return (
    <>
        <Container className="p-3">
            <h2 className="titulo-h2">Nossos Parceiros</h2>
            <h3 className="sub-titulo-h3">
                Estamos comprometidos em proporcionar soluções práticas e seguras para aqueles que atuam na agricultura, pecuária e no universo rural. <br /> Descubra as empresas que acreditam na qualidade do nosso trabalho.
            </h3>
        </Container>
        
        <div className="companies-container">
            <Marquee speed={30} gradient={false}>
            {companies.map((companie, index) => (
                <div key={index} className="company-item">
                <img src={companie.logo} alt={`Companie ${index}`} className="company-logo" />
                </div>
            ))}
            </Marquee>

            <Marquee speed={35} gradient={false} direction="rigth">
            {companies.map((companie, index) => (
                <div key={index} className="company-item">
                <img src={companie.logo} alt={`Companie ${index}`} className="company-logo" />
                </div>
            ))}
            </Marquee>
        </div>
    </>
    );
}

export default Companies;