import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BiLogoFacebook, BiLogoVimeo, BiLogoTwitter, BiLogoPinterestAlt, BiLogoGooglePlus,
} from 'react-icons/bi';
import '../styling/NavBar.css';

const NavBar = () => {
  const params = useLocation();
  const [open, setOpen] = useState(true);

  const logOut = () => {
    localStorage.removeItem('username');
  };

  useEffect(() => {
    setOpen(true);
  }, [params]);

  const isSplashPage = params.pathname === '/';

  if (!open || isSplashPage) {
    return null; // Don't render the navbar on the SplashPage
  }

  // Check if it's the login page
  const isLoginPage = params.pathname === '/login';

  if (!open || isLoginPage) {
    // Don't render the navbar on the login page
    return null;
  }

  // Check if it's the login page
  const isRegisterPage = params.pathname === '/register';

  if (!open || isRegisterPage) {
    // Don't render the navbar on the login page
    return null;
  }

  return (
    <>
      <div className="mobile">
        <button
          className="ham-menu"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <p className="close-btn">X</p>
          ) : (
            <svg viewBox="0 0 100 80" width="20" height="20" fill="black">
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          )}
        </button>
      </div>
      <ul className={`nav ${open && 'open'}`}>
        <div className="logo">
          <div className="content">
            <h2 className="nav-h2">
              Classic Rental
              <br />
              Houses
            </h2>
          </div>
        </div>
        <div className="links">
          <li className={`${params.pathname.split('/')[1] === 'homepage' && 'active'}`}>
            <Link className="link" to="/homepage">
              HOME PAGE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationForm' && 'active'
            }`}
          >
            <Link className="link" to="/reservation-form">
              MAKE RESERVATION
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'ReservationList' && 'active'
            }`}
          >
            <Link className="link" to="/reservations">
              MY RESERVATIONS
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'add-house' && 'active'
            }`}
          >
            <Link className="link" to="/add-house">
              ADD HOUSE
            </Link>
          </li>
          <li
            className={`${params.pathname.split('/')[1] === 'delete-house' && 'active'
            }`}
          >
            <Link className="link" to="/delete-house">
              DELETE HOUSE
            </Link>
          </li>
        </div>
        <div className="lower-nav">
          <li>
            <Link className="link" onClick={logOut} to="/">
              Log Out
            </Link>
          </li>
          <li>
            <ul className="social">
              <li>
                <Link to="/#">
                  <BiLogoTwitter />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoFacebook />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoGooglePlus />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoVimeo />
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <BiLogoPinterestAlt />
                </Link>
              </li>
            </ul>
          </li>
          <li className="copyright">
            <p>© Microverse 2023</p>
          </li>
        </div>
      </ul>
    </>
  );
};

export default NavBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { BsTwitter } from 'react-icons';
// // import { BiLogoFacebook } from 'react-icons/bi';
// // import { BsVimeo } from 'react-icons/bs';
// // import { FaPinterestP, FaGooglePlusG } from 'react-icons/fa';
// import '../styling/NavBar.css';
// import '../styling/NavBar.css';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const logOut = () => {
//     localStorage.removeItem('username');
//   };

//     useEffect(() => {
//     setOpen(true);
//   }, [params]);

//   const isSplashPage = params.pathname === '/';

//   if (!open || isSplashPage) {
//         return null;
//       }

//       const isLoginPage = params.pathname === '/login';

//       if (!open || isLoginPage) {

//         return null;
//       }

//       const isRegisterPage = params.pathname === '/register';

//       if (!open || isRegisterPage) {
//         return null;
//       }

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>Classic Rental Houses</h2>
//       </div>
//       <button type="button" className="menu-icon" onClick={toggleMenu}>
//         <div className={`bar ${menuOpen ? 'open' : ''}`} />
//         <div className={`bar ${menuOpen ? 'open' : ''}`} />
//         <div className={`bar ${menuOpen ? 'open' : ''}`} />
//       </button>
//       <ul className={`menu ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           <li><Link to="/homepage">HOME PAGE</Link></li>
//           <li><Link to="/reservation-form">MAKE RESERVATION</Link></li>
//           <li><Link to="/reservations">MY RESERVATIONS</Link></li>
//           <li><Link to="/add-house">ADD HOUSE</Link></li>
//           <li><Link to="/delete-house">DELETE HOUSE</Link></li>
//           <li><Link onClick={logOut} to="/">Log Out</Link></li>
//         </ul>
//         <ul className="social">
//             <li>
//             {' '}
//             {/* <BsTwitter /> */}
//             {' '}
//           </li>
//           <li>
//             {/* <BiLogoFacebook /> */}
//             {' '}
//           </li>
//           <li>
//             {/* <FaGooglePlusG /> */}
//             {' '}
//           </li>
//           <li>
//             {/* <BsVimeo /> */}
//             {' '}
//           </li>
//           <li>
//             {/* <FaPinterestP /> */}
//             {' '}
//           </li>
//         </ul>
//         <ul className="copyright">
//           <p>© Microverse 2023</p>
//         </ul>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
