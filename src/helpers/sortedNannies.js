export const sortedNannies = (nannies, filterOption) => {
  let filteredNannies = [...nannies];

  switch (filterOption) {
    case 'A to Z':
      filteredNannies.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Z to A':
      filteredNannies.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'Less than 10$':
      filteredNannies = nannies
        .filter((nanny) => nanny.price_per_hour < 10)
        .sort((a, b) => b.price_per_hour - a.price_per_hour);
      break;
    case 'Greater than 10$':
      filteredNannies = nannies
        .filter((nanny) => nanny.price_per_hour > 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case 'Popular':
      filteredNannies.sort((a, b) => b.rating - a.rating);
      break;
    case 'Not popular':
      filteredNannies.sort((a, b) => a.rating - b.rating);
      break;
    case 'Show all':
      break;
    default:
      break;
  }
  return filteredNannies;
};
