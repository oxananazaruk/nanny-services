import styled from 'styled-components';

export const ReviewsBlock = styled.div`
  margin-top: 48px;
`;

export const ReviewsList = styled.ul`
  margin-bottom: 48px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`;

export const ReviewerWrapp = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ReviewerRound = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.hover};
  padding: 12px;
  position: relative;
`;

export const ReviewerLetter = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${(p) => p.theme.color.main};
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ReviewerName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.text};
  margin-bottom: 4px;
`;

export const ReviewerRating = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.color.text};
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
`;
