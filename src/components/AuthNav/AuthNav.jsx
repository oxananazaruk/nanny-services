import { useState } from 'react';
import { BtnList, LogBtn, RegBtn } from './AuthNav.styled';
import { ModalWindow } from '../ModalWindow/ModalWindow';

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
        <ModalWindow
          isOpen={isModalLog}
          onClose={() => setIsModalLog(false)}
        ></ModalWindow>
      )}
      {isModalReg && (
        <ModalWindow
          isOpen={isModalReg}
          onClose={() => setIsModalReg(false)}
        ></ModalWindow>
      )}
    </>
  );
};
