import styled from 'styled-components';
import image1x from '../../img/baby1x.jpg';
import image2x from '../../img/baby2x.jpg';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div``;

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${image1x});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${image2x});
  }
  position: relative;
`;

export const WrappHome = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(p) => p.theme.color.main};

  @media (min-width: 768px) {
    border-radius: 30px;
  }
`;

export const WrappTitle = styled.div`
  max-width: 290px;
  margin-left: 18px;
  padding-top: 125px;
  @media (min-width: 768px) {
    max-width: 517px;
    margin-left: 96px;
    padding-top: 251px;
  }
`;

export const HomeTitle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.color.white};
  @media (min-width: 768px) {
    font-size: 70px;
  }
`;

export const HomeText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.white};
  margin-top: 28px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const HomeBtn = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  padding: 18px 50px;
  border: ${(p) => p.theme.border.button};
  border-radius: 30px;
  max-width: 230px;
  margin-top: 64px;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.color.price};
  }
`;

export const IconHome = styled.svg`
  width: 15px;
  height: 17px;
`;

export const StatBlock = styled.div`
  border-radius: 20px;
  width: 284px;
  height: 118px;
  background-color: ${(p) => p.theme.color.white};
  padding: 32px;
  display: flex;
  gap: 16px;
  align-items: center;
  position: absolute;
  right: 1px;
  bottom: 50px;
  @media (min-width: 768px) {
    right: 50px;
    bottom: 50px;
  }
`;

export const CheckBlock = styled.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${(p) => p.theme.color.main};
  padding: 12px;
`;

export const IconCheck = styled.svg`
  width: 30px;
  height: 30px;
`;

export const CheckText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${(p) => p.theme.color.secondary};
`;

export const CheckInfo = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${(p) => p.theme.color.text};
`;
