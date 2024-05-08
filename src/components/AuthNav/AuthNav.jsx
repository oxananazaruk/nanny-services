import { useState } from 'react';
import { BtnList, LogBtn, RegBtn } from './AuthNav.styled';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import LogInForm from '../UserForms/LogInForm';
import RegistrationForm from '../UserForms/RegistrationForm';

export const AuthNav = () => {
  const [isModalLog, setIsModalLog] = useState(false);
  const [isModalReg, setIsModalReg] = useState(false);

  return (
    <>
      <BtnList>
        <li>
          <LogBtn type="button" onClick={() => setIsModalLog(true)}>
            Log In
          </LogBtn>
        </li>
        <li>
          <RegBtn type="button" onClick={() => setIsModalReg(true)}>
            Registration
          </RegBtn>
        </li>
      </BtnList>

      {isModalLog && (
        <ModalWindow isOpen={isModalLog} onClose={() => setIsModalLog(false)}>
          <LogInForm />
        </ModalWindow>
      )}

      {isModalReg && (
        <ModalWindow isOpen={isModalReg} onClose={() => setIsModalReg(false)}>
          <RegistrationForm />
        </ModalWindow>
      )}
    </>
  );
};
