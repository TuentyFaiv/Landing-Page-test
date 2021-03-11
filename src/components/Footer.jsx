import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/footer.scss';

import logo from '@images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Logo Company Name" className="footer__logo" />
      </Link>
      <div className="footer__section">
        <div className="footer__section-accounts">
          <h4>Cuentas</h4>
          <p>Tipo de cuentas</p>
        </div>
        <div className="footer__section-legals">
          <h4>Legales</h4>
          <p>Términos y Condiciones</p>
          <p>Póliticas de privacidad</p>
          <p>Póliticas de interes</p>
          <p>Póliticas de ejecución de pedidos</p>
          <p>Póliticas de divulgación de riesgo</p>
          <p>AML</p>
          <p>KYC</p>
        </div>
        <div className="footer__section-about">
          <h4>Acerca de</h4>
          <p>Contáctanos</p>
        </div>
        <div className="footer__section-platform">
          <h4>Plataforma</h4>
          <p>Metatrade 4</p>
          <p>Webtrader</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;