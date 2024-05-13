import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <svg>
        <use href={`${sprite}#user`} />
      </svg>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Log out
      </button>
    </div>
  );
};
