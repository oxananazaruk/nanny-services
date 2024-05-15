import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const WrappList = styled.div`
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 34px;
  @media (min-width: 768px) {
    padding-left: 91px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const ListNannies = styled.ul`
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
