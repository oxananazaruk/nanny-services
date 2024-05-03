import styled from 'styled-components';
import image1x from '../../img/baby1x.jpg';
import image2x from '../../img/baby2x.jpg';
import { Link } from 'react-router-dom';

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
`;

export const WrappHome = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(p) => p.theme.color.main};
  border-radius: 30px;
`;

export const WrappTitle = styled.div`
  max-width: 517px;
  margin-left: 128px;
  padding-top: 251px;
`;

export const HomeTitle = styled.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.color.white};
`;

export const HomeText = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.white};
  margin-top: 28px;
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
`;

export const IconHome = styled.svg`
  width: 15px;
  height: 17px;
`;
