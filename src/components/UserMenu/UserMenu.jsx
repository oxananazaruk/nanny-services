import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import {
  LogoutBtn,
  UserMenuWrapp,
  UserName,
  UserSvg,
  UserWrapp,
} from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuWrapp>
      <UserWrapp>
        <UserSvg>
          <use href={`${sprite}#user`} />
        </UserSvg>
        <UserName>{user.name}</UserName>
      </UserWrapp>
      <LogoutBtn type="button" onClick={() => dispatch(logoutUser())}>
        Log out
      </LogoutBtn>
    </UserMenuWrapp>
  );
};
