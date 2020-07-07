import { createSelector } from '@ngrx/store';

export const selectCount = (state) => state.count;
export const selectCounts = (state) => state.counts;

export const selectFiles = createSelector(
    selectCount,
    selectCounts
    // selectAllBooks,
    // (selectedUser: User, allBooks: Book[]) => {
    //   if (selectedUser && allBooks) {
    //     return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    //   } else {
    //     return allBooks;
    //   }
    // }
  );