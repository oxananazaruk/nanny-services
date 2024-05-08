import ReactModal from 'react-modal';
import sprite from '../../img/sprite.svg';

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
    padding: '40px 40px 40px 40px',
    borderRadius: '20px',
    minWidth: '982px',
    maxHeight: '850px',
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
      <div>
        <button onClick={onClose}>
          <svg>
            <use href={`${sprite}#x`} />
          </svg>
        </button>
        {children}
      </div>
    </ReactModal>
  );
};
