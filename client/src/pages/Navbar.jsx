import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">

      <div className="flex gap-4 text-gray-800">

        <button
            className="hamburger-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            ☰
        </button>

        <h1>REACT MISTAKES</h1>

      </div>
      
      {isOpen && (
        <ul className="hamburger-menu">
          <li>
            <Link to="/mistake/1" onClick={() => setIsOpen(false)}>
            Mistake 1
            </Link>
        </li>
          <li>
            <Link to="/mistake/2" onClick={() => setIsOpen(false)}>
              Mistake 2
            </Link>
          </li>
          <li>
            <Link to="/mistake/3" onClick={() => setIsOpen(false)}>
              Mistake 3
            </Link>
          </li>
          <li>
            <Link to="/mistake/4" onClick={() => setIsOpen(false)}>
              Mistake 4
            </Link>
          </li>
          <li>
            <Link to="/mistake/5" onClick={() => setIsOpen(false)}>
              Mistake 5
            </Link>
          </li>
          <li>
            <Link to="/mistake/6" onClick={() => setIsOpen(false)}>
              Mistake 6
            </Link>
          </li>
          <li>
            <Link to="/mistake/7" onClick={() => setIsOpen(false)}>
              Mistake 7
            </Link>
          </li>
          <li>
            <Link to="/mistake/8" onClick={() => setIsOpen(false)}>
              Mistake 8
            </Link>
          </li>
          <li>
            <Link to="/mistake/9" onClick={() => setIsOpen(false)}>
              Mistake 9
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;