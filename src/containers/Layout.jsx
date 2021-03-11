import React from 'react';

import '@styles/containers/layout.scss';

import Header from '@components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
