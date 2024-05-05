import styled from 'styled-components';

export const HeaderBlock = styled.div`
  height: 88px;
  background-color: ${(p) => p.theme.color.main};
`;

export const WrappNannies = styled.div`
  /* width: 100%; */
  height: 500px;
  background-color: ${(p) => p.theme.color.block};
`;

export const WrappList = styled.div`
  padding-left: 46px;
  padding-top: 64px;
`;

export const Filter = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const FilterWrap = styled.div`
  position: relative;
  width: 226px;
`;

export const FilterSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 14px;
  padding: 16px 18px;
  width: 226px;
  background-color: ${(p) => p.theme.color.main};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${(p) => p.theme.color.white};
`;

export const FilterIcon = styled.svg`
  fill: ${(p) => p.theme.color.white};
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
