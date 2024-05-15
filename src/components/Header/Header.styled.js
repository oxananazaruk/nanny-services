import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.header`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 2;
`;

export const HeaderStyled = styled.div`
  /* padding: 20px 96px; */
  border-bottom: ${(p) => p.theme.border.button};
  padding: 10px 15px;
  @media (min-width: 768px) {
    /* padding: 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`;

export const HeaderLogo = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.white};
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
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
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: ${(p) => p.theme.color.white};
    border-radius: 50%;
  }
`;
