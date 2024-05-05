import styled from 'styled-components';

const getFilterColor = (props) => {
  return props.$isSelected ? props.theme.color.text : 'rgba(17, 16, 28, 0.3)';
};

export const HeaderBlock = styled.div`
  height: 88px;
  background-color: ${(p) => p.theme.color.main};
`;

export const WrappNannies = styled.div`
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

export const FilterSelect = styled.div`
  border-radius: 14px;
  padding: 16px 18px;
  width: 226px;
  background-color: ${(p) => p.theme.color.main};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${(p) => p.theme.color.white};
`;

export const FilterTitle = styled.div`
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

export const OptionsContainer = styled.ul`
  list-style: none;
  padding: 14px 18px;
  margin: 0;
  position: absolute;
  top: 60px;
  left: 0;
  width: 226px;
  border: none;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterOption = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.11;
  color: ${getFilterColor};
  cursor: pointer;
`;
