
// /components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='text'>
        © {new Date().getFullYear()} moviescave.com | All rights reserved. |{' '}
        <Link href="/about">
          <span className='link'>About Us</span>
        </Link>
      </p>
    </footer>
  );
};


export default Footer;
