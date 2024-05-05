import {
  Filter,
  FilterIcon,
  FilterSelect,
  FilterWrap,
  HeaderBlock,
  WrappList,
  WrappNannies,
} from './NanniesList.styled';
import sprite from '../../img/sprite.svg';

export const NanniesList = () => {
  return (
    <>
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
          <WrappList>
            <Filter>Filters</Filter>
            <FilterWrap>
              <FilterIcon>
                <use href={`${sprite}#down`} />
              </FilterIcon>
              <FilterSelect name="filters">
                <option value="AtoZ" selected>
                  A to Z
                </option>
                <option value="ZtoA">Z to A</option>
                <option value="LessThan10$">Less than 10$</option>
                <option value="GreaterThan10$">Greater than 10$</option>
                <option value="Popular">Popular</option>
                <option value="NotPopular">Not popular</option>
                <option value="ShowAll">Show all</option>
              </FilterSelect>
            </FilterWrap>
          </WrappList>
        </div>
      </WrappNannies>
    </>
  );
};
