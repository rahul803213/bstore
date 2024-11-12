// app/layout.tsx
"use client"
import './globals.css';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apolloClient';
import Header from '@/Components/Header/Header';
import NavBar from '@/Components/NavBar/NavBar';
import Footer from '@/Components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <head>
          <title>Health Sciences Bookstore</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"   />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
        </head>
        
        <body className="bg-gray-50 min-h-dvh no-scrollbar ">
          <Header />
          <NavBar />
          <main className='flex justify-center'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ApolloProvider>
  );
};

export default Layout;
