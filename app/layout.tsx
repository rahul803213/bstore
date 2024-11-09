// app/layout.tsx
import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import Header from '@/Components/Header/Header';
import NavBar from '@/Components/NavBar/NavBar';
import Footer from '@/Components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Health Sciences Bookstore</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      
      <body className="bg-gray-50 min-h-screen">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className=" flex  items-center">
          {children}
        </main>

        {/* Footer (optional) */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
