import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.header`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 96px;
  border-bottom: ${(p) => p.theme.border.button};
`;

export const HeaderLogo = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.white};
`;

export const NavList = styled.nav`
  display: flex;
  gap: 40px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
`;
