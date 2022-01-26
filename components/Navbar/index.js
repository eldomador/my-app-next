import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  FlagBtn,
} from "./NavbarElements";
import { LangContext } from "../../pages/_app";
import { useIntl } from "react-intl";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const { state, dispatch } = useContext(LangContext);
  const intl = useIntl();
  const changeLanguage = (lang) =>
    dispatch({ type: "CHANGE_LANG", payload: lang });

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          {state.lang === "en" ? (
            <FlagBtn img={"en"} onClick={() => changeLanguage("pl")}></FlagBtn>
          ) : (
            <FlagBtn img={"pl"} onClick={() => changeLanguage("en")}></FlagBtn>
          )}
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {intl.formatMessage({ id: "aboutTitle" })}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="my-apps"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {intl.formatMessage({ id: "appsTitle" })}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="graphic-design"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {intl.formatMessage({ id: "graphicTitle" })}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="film-production"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {intl.formatMessage({ id: "videoTitle" })}
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <Link href="contact" passHref>
                <NavBtnLink>{intl.formatMessage({ id: "contact" })}</NavBtnLink>
              </Link>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
