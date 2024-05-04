import { useState } from 'react';
import {
  HeaderLogo,
  HeaderNav,
  HeaderStyled,
  LinkStyled,
  NavList,
} from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <HeaderNav>
      <div className="container">
        <HeaderStyled>
          <HeaderLogo to="/">Nanny.Services</HeaderLogo>
          <NavList>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/nannies">Nannies</LinkStyled>
            {isLogedIn && <LinkStyled to="/favorites">Favorites</LinkStyled>}
          </NavList>

          {isLogedIn ? <UserMenu /> : <AuthNav />}
        </HeaderStyled>
      </div>
    </HeaderNav>
  );
};
