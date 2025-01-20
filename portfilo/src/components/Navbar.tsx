import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { RiContactsLine } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { MdWork, MdSchool } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ปิด mobile menu เมื่อ resize หน้าจอ
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ป้องกันการเลื่อนหน้าเมื่อเปิด mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActiveLink = (path: string) => router.pathname === path;

  const menuItems = [
    { path: '/', icon: <AiOutlineHome className="w-5 h-5" />, label: 'Home' },
    { path: '/about', icon: <BsPerson className="w-5 h-5" />, label: 'About' },
    { path: '/skills', icon: <GiSkills className="w-5 h-5" />, label: 'Skills' },
    { path: '/experience', icon: <MdWork className="w-5 h-5" />, label: 'Experience' },
    { path: '/education', icon: <MdSchool className="w-5 h-5" />, label: 'Education' },
    { path: '/projects', icon: <GoProject className="w-5 h-5" />, label: 'Projects' },
    { path: '/blog', icon: <FaBlog className="w-5 h-5" />, label: 'Blog' },
    { path: '/contact', icon: <RiContactsLine className="w-5 h-5" />, label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50
      ${scrolled 
        ? 'bg-black/300 backdrop-blur-xl shadow-lg dark:bg-gray-900/100' 
        : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" 
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 
                bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 
                transition-all duration-300">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-xl group transition-all duration-300
                  ${isActiveLink(item.path)
                    ? 'text-white bg-gradient-to-r from-purple-600 to-blue-500'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
                <span className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                  transition-all duration-300 bg-gradient-to-r from-purple-600/10 to-blue-500/10`}>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900
              hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-500/10 
              transition-all duration-300"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
          md:hidden
        `}>
          <div 
            className={`
              absolute right-0 top-0 h-screen w-72 bg-white/90 dark:bg-gray-900/90
              backdrop-blur-xl shadow-2xl transform transition-transform duration-300
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all
                    ${isActiveLink(item.path)
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-500/10'
                    }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
