import styled from 'styled-components';

export const UserSvg = styled.svg`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const UserWrapp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.11;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const UserMenuWrapp = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 0;
    gap: 24px;
  }
`;

export const LogoutBtn = styled.button`
  border: ${(p) => p.theme.border.button};
  border-radius: 30px;
  padding: 4px 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.block};
    color: ${(p) => p.theme.color.main};
    border: 1px solid ${(p) => p.theme.color.main};
  }

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 10px 29px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 14px 39px;
  }
`;
