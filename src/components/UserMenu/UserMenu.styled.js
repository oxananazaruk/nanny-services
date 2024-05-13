import styled from 'styled-components';

export const UserSvg = styled.svg`
  width: 40px;
  height: 40px;
`;

export const UserWrapp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
`;

export const UserMenuWrapp = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  border: ${(p) => p.theme.border.button};
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
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
`;
