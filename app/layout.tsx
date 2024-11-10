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
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
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
