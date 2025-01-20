import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />  
    </div>
  );
};

export default Layout;
