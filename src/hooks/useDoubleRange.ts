import { RefObject, useRef, useState } from 'react';

type UseDoubleRangeReturnType = {
  minVal: number;
  setMinVal: (minVal: number) => void;
  maxVal: number;
  setMaxVal: (maxVal: number) => void;
  minValRef: RefObject<HTMLInputElement>;
  maxValRef: RefObject<HTMLInputElement>;
  range: RefObject<HTMLDivElement>;
};

export const useDoubleRange = (min: number, max: number): UseDoubleRangeReturnType => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  return {
    minVal,
    setMinVal,
    maxVal,
    setMaxVal,
    minValRef,
    maxValRef,
    range,
  };
};
