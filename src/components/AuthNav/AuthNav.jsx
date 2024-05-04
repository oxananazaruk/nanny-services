import { BtnList, LogBtn, RegBtn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <BtnList>
      <li>
        <LogBtn>Log In</LogBtn>
      </li>
      <li>
        <RegBtn>Registration</RegBtn>
      </li>
    </BtnList>
  );
};
