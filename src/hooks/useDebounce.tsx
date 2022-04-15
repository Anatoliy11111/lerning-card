import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setPacNameAC } from 'redux/reducers';

export function useDebounce(value: string, delay: number, fn: () => void): () => void {
  useEffect(() => {
    const handler = setTimeout(() => {
      fn();
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return () => {};
}
