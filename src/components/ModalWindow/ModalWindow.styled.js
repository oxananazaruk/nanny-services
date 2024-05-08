import styled from 'styled-components';

export const ModalWrapp = styled.div`
  position: relative;
  padding: 64px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const ModalSvg = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${(p) => p.theme.color.text};
`;
