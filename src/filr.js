import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { globalHistory } from '@reach/router';

import HeaderPromo from '../../promo/header-promo';
import Button from '../../common/primary-button/primary-button';
import NavLink from './nav-link';

import { Container } from '../../common/common-styles';
import {
  HeaderInner,
  HeaderWrapper,
  SubMenuWrapper,
} from './navbar-desktop-styles';
import { tabLinks, linkTab } from './product-links';

import logoSVG from 'images/brand/logo2.svg';
import icons from 'images/icons/icons.svg';

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
    },
    display: 'flex',
  },
  exit: {
    opacity: 0,
    rotateX: 30,
    y: -5,
    transition: {
      duration: 0.3,
      delay: 0.2,
      type: 'tween',
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

function DesktopNav({ setLoginDrawer, showPromo, scrolled }) {
  const [hostingHover, setHostingHover] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const openHostingMenu = () => {
    setHostingHover(true);
  };
  const closeHostingMenu = () => {
    setHostingHover(false);
  };

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        if (hostingHover) closeHostingMenu();
      }
    });
  });

  return (
    <HeaderWrapper scrolled={scrolled} showPromo={showPromo}>
      <HeaderPromo />
      <Container>
        <HeaderInner scrolled={scrolled}>
          <div className="logo-menu">
            <Link to="/">
              <img src={logoSVG + '#logo'} alt="Best Buy RDP Logo" />
            </Link>
            <nav>
              <ul>
                <li>
                  <motion.div
                    className="menu"
                    onMouseEnter={openHostingMenu}
                    onMouseLeave={closeHostingMenu}
                  >
                    <div className="menu-item" tabIndex="0" role="button" ara>
                      Products
                      <svg width="12" height="18">
                        <use xlinkHref={`${icons}#down-arrow`} />
                      </svg>
                    </div>
                    <SubMenuWrapper
                      as={motion.ul}
                      className="sub-menu"
                      initial="exit"
                      animate={hostingHover ? 'enter' : 'exit'}
                      variants={subMenuAnimate}
                      style={{ originX: 0.9 }}
                    >
                      <div className="tabs">
                        {linkTab.map((tab, i) => (
                          <button
                            data-active={i === tabIndex && true}
                            onClick={() => setTabIndex(i)}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                      <div className="submenu-links">
                        <span>{linkTab[tabIndex]}</span>
                        {tabLinks[linkTab[tabIndex]].map(
                          ({ link, title, desc, icon, flag }) => (
                            <NavLink
                              title={title}
                              link={link}
                              desc={desc}
                              icon={icon}
                              flag={flag}
                            />
                          ),
                        )}
                      </div>
                    </SubMenuWrapper>
                  </motion.div>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/contact">Support</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Button
            link="/login"
            as="button"
            arrow
            onKeyPress={() => setLoginDrawer(true)}
            onClick={() => setLoginDrawer(true)}
            className="login"
          >
            Login
          </Button>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
}

export default DesktopNav;
