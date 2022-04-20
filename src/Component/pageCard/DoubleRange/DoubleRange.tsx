import React, { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import style from 'Component/pageCard/DoubleRange/DobleRanges.module.scss';
import { DoubleRangeNumber } from 'enum/enum';

export type onChangeCountRangeType = {
  min: number;
  max: number;
};

type DoubleRangeType = {
  min: number;
  max: number;
  onChange: ({ min, max }: onChangeCountRangeType) => void;
};

export const DoubleRange: FC<DoubleRangeType> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - min) / (max - min)) * DoubleRangeNumber.percentage),
    [min, max],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(
            +event.currentTarget.value,
            maxVal - DoubleRangeNumber.minDistance,
          );
          setMinVal(value);
          event.currentTarget.value = value.toString();
        }}
        className={classnames(`${style.thumb} ${style['thumb--zIndex-3']}`, {
          [`${style['thumb--zIndex-5']}`]: minVal > max - DoubleRangeNumber.percentage,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(
            +event.target.value,
            minVal + DoubleRangeNumber.minDistance,
          );
          setMaxVal(value);
          event.currentTarget.value = value.toString();
        }}
        className={`${style.thumb} ${style['thumb--zIndex-4']}`}
      />

      <div className={style.slider}>
        <div className={style.slider__track} />
        <div ref={range} className={style.slider__range} />
        <div className={style['slider__left-value']}>{minVal}</div>
        <div className={style['slider__right-value']}>{maxVal}</div>
      </div>
    </div>
  );
};

DoubleRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
