import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = ['Home', 'About', 'Project', 'Contact'];
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    
    if (menuOpen) {
      document.querySelector('#mobile-menu-close')?.focus();
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? 'h-screen opacity-100 pointer-events-auto'
            : 'h-0 opacity-0 pointer-events-none'
        }`}
    >
      <button
        id="mobile-menu-close"
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-2xl focus:outline-none cursor-pointer hover:text-orange-500 transition-colors"
        aria-label="Close Menu"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <nav className="flex flex-col items-center">
        {menuItems.map((item, index) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transition-all duration-300 hover:text-orange-500
              ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            `}
            style={{ transitionDelay: `${menuOpen ? index * 0.1 : 0}s` }}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};