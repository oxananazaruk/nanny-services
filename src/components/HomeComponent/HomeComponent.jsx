import {
  CheckBlock,
  CheckInfo,
  CheckText,
  HomeBtn,
  HomeText,
  HomeTitle,
  HomeWrapper,
  IconCheck,
  IconHome,
  SectionHome,
  StatBlock,
  WrappHome,
  WrappTitle,
} from './HomeComponent.styled';
import sprite from '../../img/sprite.svg';


export const HomeComponent = () => {

  return (
    <div className="container">
      <HomeWrapper>
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
            <StatBlock>
              <CheckBlock>
                <IconCheck>
                  <use href={`${sprite}#fe-check`} />
                </IconCheck>
              </CheckBlock>
              <div>
                <CheckText>Experienced nannies</CheckText>
                <CheckInfo>15,000</CheckInfo>
              </div>
            </StatBlock>
          </SectionHome>
        </WrappHome>
      </HomeWrapper>
    </div>
  );
};
