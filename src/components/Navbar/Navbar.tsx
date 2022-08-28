import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarLeftWrapper,
  NavbarRightWrapper,
  NavbarLanguage,
  NavbarLanguageMobile,
} from './Navbar.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from './NavLinks';
import Logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const Navbar = (props: Props) => {
  const isMenuOpen = useSelector((state: { isOpen: boolean }) => state.isOpen);

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLeftWrapper>
          <IconLogo src={Logo} />
          <IconLogoMobile onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu isMenuOpen={isMenuOpen}>
            {navLinks.map((link) => (
              <MenuItem key={link.id}>
                <MenuItemLink>{link.title}</MenuItemLink>
              </MenuItem>
            ))}
            <NavbarLanguageMobile>En</NavbarLanguageMobile>
          </Menu>
        </NavbarLeftWrapper>
        <NavbarRightWrapper>
          <NavbarLanguage>En/Fr</NavbarLanguage>
        </NavbarRightWrapper>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
