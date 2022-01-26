import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding: 20px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 14px;

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
