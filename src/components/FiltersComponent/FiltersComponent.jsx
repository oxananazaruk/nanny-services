import { useEffect, useRef, useState } from 'react';
import {
  Filter,
  FilterIcon,
  FilterOption,
  FilterSelect,
  FilterTitle,
  FilterWrap,
  OptionsContainer,
} from './FiltersComponent.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch } from 'react-redux';
import { findNannies } from '../../redux/filters/slice';

export const FiltersComponent = () => {
  const filterOptions = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('A to Z');
  const filterRef = useRef(null);
  const dispatch = useDispatch();
  const handleFilter = (filters) => dispatch(findNannies(filters));

  const handleDropdownFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleSelectFilter = (option) => {
    setSelectedFilter(option);
    setIsOpenFilter(false);
    handleFilter(option);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      handleDropdownFilter();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <Filter>Filters</Filter>
      <FilterWrap>
        <FilterIcon>
          <use href={`${sprite}#down`} />
        </FilterIcon>

        <FilterSelect>
          <FilterTitle onClick={handleDropdownFilter}>
            {selectedFilter || 'A to Z'}
          </FilterTitle>
          {isOpenFilter && (
            <OptionsContainer ref={filterRef}>
              {filterOptions.map((option, index) => (
                <FilterOption
                  key={index}
                  onClick={() => handleSelectFilter(option)}
                  $isSelected={selectedFilter === option}
                >
                  {option}
                </FilterOption>
              ))}
            </OptionsContainer>
          )}
        </FilterSelect>
      </FilterWrap>
    </>
  );
};
