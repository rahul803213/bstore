// app/layout.tsx
import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import Header from '@/Components/Header/Header';
import NavBar from '@/Components/NavBar/NavBar';

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
      
      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className=" flex  items-center">
          {children}
        </main>

        {/* Footer (optional) */}
        <footer className="w-full bg-gray-200 text-center p-4">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} Health Sciences Bookstore. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
