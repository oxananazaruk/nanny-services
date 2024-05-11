import ReactModal from 'react-modal';
import sprite from '../../img/sprite.svg';
import { ModalCloseBtn, ModalSvg, ModalWrapp } from './ModalWindow.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
    zIndex: 120,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '20px',
    maxWidth: '600px',
    minHeight: '489px',
    backgroundColor: ' #f3f3f3',
  },
};

ReactModal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      autoFocus={true}
    >
      <ModalWrapp>
        <ModalCloseBtn onClick={onClose}>
          <ModalSvg>
            <use href={`${sprite}#x`} />
          </ModalSvg>
        </ModalCloseBtn>
        {children}
      </ModalWrapp>
    </ReactModal>
  );
};
