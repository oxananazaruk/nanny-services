import styled from 'styled-components';

export const AppointTile = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.text};
  margin-bottom: 20px;
`;

export const AppointText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${(p) => p.theme.color.secondary};
  margin-bottom: 40px;
`;

export const ImgWrapp = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

export const AppointImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const ImgText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${(p) => p.theme.color.grey};
  margin-bottom: 4px;
`;

export const ImgName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${(p) => p.theme.color.text};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 240px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 472px;
  }
`;

export const FormList = styled.div`
  display: flex;
  gap: 16px 8px;
  flex-wrap: wrap;
`;

export const FormInput = styled.input`
  border: ${(p) => p.theme.border.grey};
  border-radius: 12px;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  width: 100%;
  color: ${(p) => p.theme.color.text};
  background-color: ${(p) => p.theme.color.block};
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.color.text};
  }
`;

export const FormArea = styled.textarea`
  border: ${(p) => p.theme.border.grey};
  border-radius: 12px;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  width: 100%;
  color: ${(p) => p.theme.color.text};
  background-color: ${(p) => p.theme.color.block};
  resize: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.color.text};
  }
`;

export const FormError = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.25;
  color: red;
  position: absolute;
  left: 5px;
  bottom: -14px;
`;

export const InputWrapp = styled.div`
  position: relative;
  flex-basis: calc((100% - 8px) / 2);
`;

export const FormBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.white};
  border: none;
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  background-color: ${(p) => p.theme.color.main};
  border: 1px solid transparent;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.main};
    border: 1px solid ${(p) => p.theme.color.main};
  }
`;
