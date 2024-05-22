import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const LogBtn = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  border: ${(p) => p.theme.border.button};
  border-radius: 30px;
  padding: 4px 29px;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.main};
    border: 1px solid ${(p) => p.theme.color.price};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 39px;
  }
`;

export const RegBtn = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  border-radius: 30px;
  padding: 4px 20px;
  background-color: ${(p) => p.theme.color.main};
  border: none;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.main};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 40px;
  }
`;
