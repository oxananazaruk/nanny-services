import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import {
  BtnWrapp,
  HeartBtn,
  HeartSvg,
  IconSvg,
  ImgStyled,
  ImgWrapp,
  InfoItem,
  InfoItemLast,
  InfoList,
  InfoWrapp,
  MainWrapp,
  NannyCard,
  NannyName,
  NannyText,
  PriceStyled,
  RoundGreen,
  RoundWhite,
} from './NanniesCard.styled';

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

  const [isFavorite, setIsFavorite] = useState(false);
  const iconHeart = isFavorite ? 'heart-hover' : 'heart';

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    // if (!isFavorite) {
    //   dispatch(addFavorites(item));
    // } else {
    //   dispatch(removeFavorites(item._id));
    // }
  };

  return (
    <NannyCard>
      <ImgWrapp>
        <ImgStyled src={avatar_url} alt={name} />
        <RoundWhite>
          <RoundGreen></RoundGreen>
        </RoundWhite>
      </ImgWrapp>

      <MainWrapp>
        <InfoWrapp>
          <NannyText>Nanny</NannyText>
          <BtnWrapp>
            <InfoList>
              <InfoItem>
                <IconSvg>
                  <use href={`${sprite}#map-pin`} />
                </IconSvg>
                <p>{location}</p>
              </InfoItem>
              <InfoItem>
                <IconSvg>
                  <use href={`${sprite}#star`} />
                </IconSvg>
                <p>Rating: {rating}</p>
              </InfoItem>
              <InfoItemLast>
                Price / 1 hour: <PriceStyled>{price_per_hour}$</PriceStyled>
              </InfoItemLast>
            </InfoList>

            <HeartBtn type="button" onClick={handleSelectFavorite}>
              <HeartSvg>
                <use href={`${sprite}#${iconHeart}`} />
              </HeartSvg>
            </HeartBtn>
          </BtnWrapp>
        </InfoWrapp>

        <NannyName>{name}</NannyName>

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
      </MainWrapp>
    </NannyCard>
  );
};
