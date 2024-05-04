import sprite from '../../img/sprite.svg';

export const UserMenu = () => {
  return (
    <div>
      <svg>
        <use href={`${sprite}#user`} />
      </svg>
      <p>Name</p>
      <button type="button">Log out</button>
    </div>
  );
};
