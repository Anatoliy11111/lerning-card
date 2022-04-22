import { ReactElement } from 'react';

import { StarIcon } from '../star/StarIcon';

import { NumberStars } from 'enum';

type RatingPropsType = {
  activeStars: number;
};

export const Rating = ({ activeStars }: RatingPropsType): ReactElement => {
  const roundActiveStars = Math.round(activeStars);

  return (
    <>
      <StarIcon isActive={roundActiveStars > NumberStars.Zero} />
      <StarIcon isActive={roundActiveStars > NumberStars.One} />
      <StarIcon isActive={roundActiveStars > NumberStars.Two} />
      <StarIcon isActive={roundActiveStars > NumberStars.Three} />
      <StarIcon isActive={roundActiveStars > NumberStars.Fore} />
    </>
  );
};
