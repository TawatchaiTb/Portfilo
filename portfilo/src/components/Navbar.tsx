import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { RiContactsLine } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { MdWork, MdSchool } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => router.pathname === path;

  const menuItems = [
    { path: '/', icon: <AiOutlineHome className="w-5 h-5" />, label: 'Home' },
    { path: '/about', icon: <BsPerson className="w-5 h-5" />, label: 'About' },
    { path: '/skills', icon: <GiSkills className="w-5 h-5" />, label: 'Skills' },
    { path: '/projects', icon: <GoProject className="w-5 h-5" />, label: 'Projects' },
    { path: '/contact', icon: <RiContactsLine className="w-5 h-5" />, label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block
        ${scrolled ? 'bg-white shadow-sm' : 'bg-white/95'}`}>
        <div className="max-w-[1200px] mx-auto px-8">
          <nav className="h-16 flex items-center justify-center">
            <ul className="flex items-center justify-center space-x-12">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`
                      text-[14px] leading-normal transition-colors duration-200
                      flex items-center gap-2 py-1 px-3 -mx-3
                      ${isActiveLink(item.path)
                        ? 'text-black font-medium'
                        : 'text-gray-500 hover:text-gray-900'
                      }
                    `}
                  >
                    {item.icon}
                    <span className="tracking-wide">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-300
          bg-gray-200 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto px-4">
          <ul className="flex items-center justify-around h-16">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`
                    flex flex-col items-center gap-1 py-2 px-4
                    transition-colors duration-200 relative
                    ${isActiveLink(item.path)
                      ? 'text-black'
                      : 'text-gray-500 hover:text-gray-900'
                    }
                  `}
                >
                  {item.icon}
                  <span className="text-[10px]">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
