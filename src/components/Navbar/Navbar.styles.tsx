import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #e5e5e5;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 20px;
`;

export const NavbarLeftWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const NavbarRightWrapper = styled.div`
  display: flex;
  margin-left: auto;
  position: absolute;
  right: 25px;
  top: 26px;
  color: #000000;
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLanguageMobile = styled(NavbarRightWrapper)`
  display: block;
  position: absolute;
  bottom: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconLogo = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
`;

export const Menu = styled.ul<{ isMenuOpen: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-100%')};
    flex-direction: column;
    transition: 0.5s all ease-in;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  line-height: 38px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  font-size: 20px;
  color: #000000;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #000000;
`;

export const IconLogoMobile = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    display: flex;
    position: absolute;
    z-index: 10000;
    right: 10px;
    top: 26px;
    color: #000000;
    font-size: 2rem;
  }
`;
