import styled from 'styled-components';

export const HeaderBlock = styled.div`
  height: 88px;
  width: 100vw;
  background-color: ${(p) => p.theme.color.main};
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const WrappNannies = styled.div`
  background-color: ${(p) => p.theme.color.block};
  padding-bottom: 30px;
  min-height: 100vh;
`;

export const WrappList = styled.div`
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 34px;
  @media (min-width: 768px) {
    padding-left: 91px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const NannyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  border: none;
  border-radius: 30px;
  padding: 14px 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.main};
`;

export const NoText = styled.p`
  padding-top: 130px;
  text-align: center;
`;
