// import { createSelector } from '@reduxjs/toolkit';

export const selectNannies = (state) => state.nannies.items;

export const selectIsLoading = (state) => state.nannies.isLoading;

export const selectError = (state) => state.nannies.error;

export const selectLastKey = (state) => state.nannies.lastKey;
export const selectMessage = (state) => state.nannies.message;

// export const selectFilter = (state) => state.filters.filters;

// export const selectVisibleContacts = createSelector(
//   [selectNannies, selectFilter],
//   (nannies, filter) => {
//     return nannies.filter((nanny) =>
//       nanny.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//     );
//   }
// );
