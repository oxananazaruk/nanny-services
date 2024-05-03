import {
  HomeBtn,
  HomeText,
  HomeTitle,
  IconHome,
  SectionHome,
  WrappHome,
  WrappTitle,
} from './HomeComponent.styled';
import sprite from '../../img/sprite.svg';

export const HomeComponent = () => {
  return (
    <div className="container">
      <WrappHome>
        <SectionHome>
          <WrappTitle>
            <HomeTitle>Make Life Easier for the Family:</HomeTitle>
            <HomeText>Find Babysitters Online for All Occasions</HomeText>
            <HomeBtn to="/nannies">
              Get started{' '}
              <IconHome>
                <use href={`${sprite}#arrow`} />
              </IconHome>
            </HomeBtn>
          </WrappTitle>
        </SectionHome>
      </WrappHome>
    </div>
  );
};
