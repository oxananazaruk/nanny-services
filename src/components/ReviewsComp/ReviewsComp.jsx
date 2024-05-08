import {
  IconSvg,
  ReviewerLetter,
  ReviewerName,
  ReviewerRating,
  ReviewerRound,
  ReviewerWrapp,
  ReviewsBlock,
  ReviewsList,
} from './ReviewsComp.styled';
import sprite from '../../img/sprite.svg';

export const ReviewsComp = ({ reviews }) => {
  return (
    <ReviewsBlock>
      <ReviewsList>
        {reviews.map((review) => (
          <li key={review.reviewer}>
            <ReviewerWrapp>
              <ReviewerRound>
                <ReviewerLetter>{review.reviewer.charAt(0)}</ReviewerLetter>
              </ReviewerRound>
              <div>
                <ReviewerName>{review.reviewer}</ReviewerName>
                <ReviewerRating>
                  <IconSvg>
                    <use href={`${sprite}#star`} />
                  </IconSvg>
                  <span>{review.rating.toFixed(1)}</span>
                </ReviewerRating>
              </div>
            </ReviewerWrapp>
            <p>{review.comment}</p>
          </li>
        ))}
      </ReviewsList>
    </ReviewsBlock>
  );
};
