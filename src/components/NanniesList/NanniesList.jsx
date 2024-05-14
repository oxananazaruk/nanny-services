import {
  Filter,
  FilterIcon,
  FilterOption,
  FilterSelect,
  FilterTitle,
  FilterWrap,
  HeaderBlock,
  ListWrapper,
  LoadMoreBtn,
  NannyList,
  OptionsContainer,
  WrappList,
  WrappNannies,
} from './NanniesList.styled';
import sprite from '../../img/sprite.svg';
import { useEffect, useRef, useState } from 'react';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import { useSelector } from 'react-redux';
import { selectMessage } from '../../redux/nannies/selectors';

export const NanniesList = ({ nannies, loadMore }) => {
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
  const message = useSelector(selectMessage);

  const handleDropdownFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleSelectFilter = (option) => {
    setSelectedFilter(option);
    setIsOpenFilter(false);
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
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
          <ListWrapper>
            <WrappList>
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

              <NannyList>
                {nannies.map((nanny) => (
                  <li key={nanny.id}>
                    <NanniesCard nanny={nanny} />
                  </li>
                ))}
              </NannyList>
            </WrappList>

            {message ? (
              <p>{message}</p>
            ) : (
              <LoadMoreBtn type="button" onClick={loadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </ListWrapper>
        </div>
      </WrappNannies>
    </>
  );
};
