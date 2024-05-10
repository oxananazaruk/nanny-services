import styled from 'styled-components';

export const ModalWrapp = styled.div`
  position: relative;
  padding: 64px;
  max-height: 579px;
  overflow-y: scroll;
  overflow-x: hidden;
  @-moz-document url-prefix() {
    scrollbar {
      width: thin;
      color: #d9d9d9;
      background-color: transparent;
    }
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 12px;
    height: 264px;
  }
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
