import sprite from '../../img/sprite.svg';

export const NanniesCard = ({ nanny }) => {
  const {
    avatar_url,
    name,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = nanny;

  const age = Math.floor(
    (new Date() - new Date(birthday)) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <div>
      <div>
        <img src={avatar_url} alt={name} />
      </div>

      <div>
        <p>Nanny</p>
        <ul>
          <li>{location}</li>
          <li>Rating: {rating}</li>
          <li>Price / 1 hour: {price_per_hour}$</li>
        </ul>

        <btn type="button">
          <svg>
            <use href={`${sprite}#heart`} />
          </svg>
        </btn>
      </div>

      <h2>{name}</h2>

      <ul>
        <li>
          Age: <p>{age}</p>
        </li>
        <li>
          Experience: <p>{experience}</p>
        </li>
        <li>
          Kids Age: <p>{kids_age}</p>
        </li>
        <li>
          Characters:{' '}
          <p>
            {characters
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(', ')}
          </p>
        </li>
        <li>
          Education: <p>{education}</p>
        </li>
      </ul>

      <p>{about}</p>

      <button type="button">Read more</button>
    </div>
  );
};
