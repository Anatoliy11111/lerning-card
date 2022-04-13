import { Numbers } from 'enum/enum';

export const pageMaker = (
  pagesAr: number[],
  totalPagesCount: number,
  currentPage1: number,
): void => {
  if (totalPagesCount > Numbers.Ten) {
    if (currentPage1 > Numbers.Five) {
      for (
        let i = currentPage1 - Numbers.Four;
        i <= currentPage1 + Numbers.Five;
        i += Numbers.One
      ) {
        pagesAr.push(i);
      }
    } else {
      for (let i = 1; i <= Numbers.Ten; i += Numbers.One) {
        pagesAr.push(i);
      }
    }
  } else {
    for (let i = 1; i <= totalPagesCount; i += Numbers.One) {
      pagesAr.push(i);
    }
  }
};
