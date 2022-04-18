import React from 'react';

type StarPropsType = {
  selected: boolean;
  onClick: (value: number) => void;
  value: number;
};
const Star: React.FC<StarPropsType> = ({ onClick, value, selected }: StarPropsType) => (
  <button onClick={() => onClick(value)}>{selected ? <b>Star</b> : 'Star'}</button>
);

type RatingPropsType = {
  value: number;
  onClick: (value: number) => void;
};
export const Rating: React.FC<RatingPropsType> = ({
  value,
  onClick,
}: RatingPropsType) => (
  <div>
    {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
    <Star selected={value > 0} onClick={onClick} value={1} />

    {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
    <Star selected={value > 1} onClick={onClick} value={2} />

    {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
    <Star selected={value > 2} onClick={onClick} value={3} />

    {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
    <Star selected={value > 3} onClick={onClick} value={4} />

    {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
    <Star selected={value > 4} onClick={onClick} value={5} />
  </div>
);
