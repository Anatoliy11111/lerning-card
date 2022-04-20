import { useState } from 'react';

type returnType = {
  isDoubleRangeShow: boolean;
  setIsDoubleRangeShow: (isDoubleRangeShow: boolean) => void;
  setMinCardCount: (minCardCount: number) => void;
  setMaxCardCount: (maxCardCount: number) => void;
  maxCardCount: number;
  minCardCount: number;
};
export const useSettingCardCount = (minCard: number, maxCard: number): returnType => {
  const [isDoubleRangeShow, setIsDoubleRangeShow] = useState(true);
  const [minCardCount, setMinCardCount] = useState<number>(minCard);
  const [maxCardCount, setMaxCardCount] = useState<number>(maxCard);
  return {
    isDoubleRangeShow,
    setIsDoubleRangeShow,
    maxCardCount,
    minCardCount,
    setMinCardCount,
    setMaxCardCount,
  };
};
