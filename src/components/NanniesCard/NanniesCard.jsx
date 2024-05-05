import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import {
  AboutBtn,
  AboutText,
  BtnWrapp,
  DetailsItem,
  DetailsList,
  HeartBtn,
  HeartSvg,
  IconSvg,
  ImgStyled,
  ImgWrapp,
  InfoItem,
  InfoItemLast,
  InfoList,
  InfoWrapp,
  ItemText,
  ItemTextAge,
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
  const [isReadMore, setIsReadMore] = useState(false);

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    // if (!isFavorite) {
    //   dispatch(addFavorites(item));
    // } else {
    //   dispatch(removeFavorites(item._id));
    // }
  };

  const handleReadMore = () => {
    setIsReadMore(true);
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

        <DetailsList>
          <DetailsItem>
            Age: <ItemTextAge>{age}</ItemTextAge>
          </DetailsItem>
          <DetailsItem>
            Experience: <ItemText>{experience}</ItemText>
          </DetailsItem>
          <DetailsItem>
            Kids Age: <ItemText>{kids_age}</ItemText>
          </DetailsItem>
          <DetailsItem>
            Characters:{' '}
            <ItemText>
              {characters
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(', ')}
            </ItemText>
          </DetailsItem>
          <DetailsItem>
            Education: <ItemText>{education}</ItemText>
          </DetailsItem>
        </DetailsList>

        <AboutText>{about}</AboutText>

        {!isReadMore && (
          <AboutBtn type="button" onClick={handleReadMore}>
            Read more
          </AboutBtn>
        )}

        {isReadMore && (
          <>
            <ul>
              {reviews.map((review) => (
                <li key={review.reviewer}>
                  <div>
                    <p>{review.reviewer.charAt(0)}</p>
                  </div>
                  <h3>{review.reviewer}</h3>
                  <p>{review.rating}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
            <button type="button">Make an appointment</button>
          </>
        )}
      </MainWrapp>
    </NannyCard>
  );
};
