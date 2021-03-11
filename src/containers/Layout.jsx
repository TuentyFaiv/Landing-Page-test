import React from 'react';

import '@styles/containers/layout.scss';

import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
