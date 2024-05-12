import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import '../../styles/UI/Navbar.css';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/#">My Work</a>
        <a href="/#">Blog</a>
        <a href="/#">About Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
