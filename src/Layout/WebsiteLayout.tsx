import React from 'react';
import Header from './components/Header/index';
import Footer from './components/footer';
import '../App.css'
import HomePage from '@/pages/HomePage';
import { Outlet } from 'react-router-dom';
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <main className=''>
        <section className='header-section'>
            <Header />
        </section>
        <section>
          <Outlet/>
        </section>
        <section className='footer-section' id='footer'>
            <Footer />
        </section>
    </main>
  );
};

export default WebsiteLayout;
