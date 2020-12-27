import React from 'react';

import config from '../../config';

import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <header id="header">
      <img src={logo} id="logo" alt="Logo - Zephy"/>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </header>
  );
}
