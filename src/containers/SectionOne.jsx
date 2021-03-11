import React from 'react';

import '@styles/containers/sectionOne.scss';

import Button from '@components/Button';

const SectionOne = () => {
  return (
    <section className="sectionOne">
      <h1 className="sectionOne__title">Centro educativo</h1>
      <p className="sectionOne__description">
        Alcanza el más alto nivel de inversiones en línea gracias a nuestros tutoriales de aprendizaje; apto para todos los niveles de experiencia.
      </p>
      <Button text="Ver más"/>
    </section>
  );
}

export default SectionOne;
