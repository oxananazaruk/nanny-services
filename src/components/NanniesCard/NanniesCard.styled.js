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
  position: relative;
`;

export const ImgStyled = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`;

export const RoundWhite = styled.div`
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.white};
  width: 14px;
  height: 14px;
  padding: 2px;
  position: absolute;
  top: 9px;
  right: 14px;
`;

export const RoundGreen = styled.div`
  border-radius: 50%;
  background-color: #38cd3e;
  width: 10px;
  height: 10px;
`;

export const MainWrapp = styled.div`
  width: 990px;
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
  margin-bottom: 8px;
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

export const NannyName = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${(p) => p.theme.color.text};
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const DetailsItem = styled.li`
  display: flex;
  gap: 4px;
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${(p) => p.theme.color.block};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.grey};
`;

export const ItemText = styled.p`
  color: ${(p) => p.theme.color.text};
`;

export const ItemTextAge = styled.p`
  color: ${(p) => p.theme.color.text};
  text-decoration: underline;
`;

export const AboutText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.secondary};
  margin-bottom: 14px;
`;

export const AboutBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.color.text};
  border: none;
  background-color: transparent;
`;

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

export const AppointmentBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  padding: 14px 28px;
  border-radius: 30px;
  background-color: ${(p) => p.theme.color.main};
  border: none;
`;
