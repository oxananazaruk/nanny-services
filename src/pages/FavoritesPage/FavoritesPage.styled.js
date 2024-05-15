import styled from 'styled-components';

export const HeaderBlock = styled.div`
  height: 88px;
  background-color: ${(p) => p.theme.color.main};
`;

export const WrappNannies = styled.div`
  background-color: ${(p) => p.theme.color.block};
  padding-bottom: 30px;
  min-height: 100vh;
`;

export const ErrorFav = styled.h2`
  color: ${(p) => p.theme.color.main};
  text-align: center;
  padding-top: 60px;
  font-weight: 500;
  font-size: 76px;
`;
