import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 240px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 438px;
  }
`;

export const FormTile = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.color.text};
  margin-bottom: 20px;
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${(p) => p.theme.color.secondary};
  margin-bottom: 40px;
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
  width: 100%;
  position: relative;
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
    background-color: ${(p) => p.theme.color.block};
    color: ${(p) => p.theme.color.main};
    border: 1px solid ${(p) => p.theme.color.main};
  }
`;
