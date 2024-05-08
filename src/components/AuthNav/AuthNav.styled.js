import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LogBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  border: ${(p) => p.theme.border.button};
  border-radius: 30px;
  padding: 14px 39px;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.main};}
`;

export const RegBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  border-radius: 30px;
  padding: 14px 40px;
  background-color: ${(p) => p.theme.color.main};
  border: none;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.main};}
`;
