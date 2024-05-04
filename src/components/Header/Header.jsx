import {
  HeaderLogo,
  HeaderNav,
  HeaderStyled,
  LinkStyled,
  NavList,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderNav>
      <div className="container">
        <HeaderStyled>
          <HeaderLogo to="/">Nanny.Services</HeaderLogo>
          <NavList>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/nannies">Nannies</LinkStyled>
            <LinkStyled to="/favorites">Favorites</LinkStyled>
          </NavList>
        </HeaderStyled>
      </div>
    </HeaderNav>
  );
};
