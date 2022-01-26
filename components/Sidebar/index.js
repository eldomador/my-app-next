import React from "react";
import Link from "next/link";
import { useIntl } from "react-intl";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  const intl = useIntl();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            {intl.formatMessage({ id: "aboutTitle" })}
          </SidebarLink>
          <SidebarLink to="my-apps" onClick={toggle}>
            {intl.formatMessage({ id: "appsTitle" })}
          </SidebarLink>
          <SidebarLink to="graphic-design" onClick={toggle}>
            {intl.formatMessage({ id: "graphicTitle" })}
          </SidebarLink>
          <SidebarLink to="film-production" onClick={toggle}>
            {intl.formatMessage({ id: "videoTitle" })}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href={"/contact"} passHref>
            <SidebarRoute onClick={toggle}>
              {intl.formatMessage({ id: "contact" })}
            </SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
