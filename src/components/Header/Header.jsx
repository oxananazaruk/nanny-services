import {
  HeaderBtns,
  HeaderLogo,
  HeaderNav,
  HeaderStyled,
  LinkStyled,
  NavList,
} from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderNav>
      <div className="container">
        <HeaderStyled>
          <HeaderLogo to="/">Nanny.Services</HeaderLogo>
          <HeaderBtns>
            <NavList>
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/nannies">Nannies</LinkStyled>
              {isLoggedIn && <LinkStyled to="/favorites">Favorites</LinkStyled>}
            </NavList>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </HeaderBtns>
        </HeaderStyled>
      </div>
    </HeaderNav>
  );
};
