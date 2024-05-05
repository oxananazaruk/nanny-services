import styled from 'styled-components';

export const NannyCard = styled.div`
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background-color: ${(p) => p.theme.color.white};
  display: flex;
  gap: 24px;
`;

export const ImgWrapp = styled.div`
  border: ${(p) => p.theme.border.red};
  border-radius: 30px;
  width: 120px;
  height: 120px;
  padding: 12px;
`;

export const ImgStyled = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`;

export const MainWrapp = styled.div`
  max-width: 990px;
`;

export const NannyText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const InfoWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnWrapp = styled.div`
  display: flex;
  gap: 48px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const InfoItem = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  padding-right: 16px;
  border-right: ${(p) => p.theme.border.grey};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.text};
`;

export const InfoItemLast = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.text};
`;

export const PriceStyled = styled.p`
  color: #38cd3e;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const HeartBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const HeartSvg = styled.svg`
  width: 26px;
  height: 26px;
`;
