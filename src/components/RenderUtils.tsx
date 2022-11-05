import { Children, FC } from 'react';
import { IFor, IIf } from '../type';

export const For: FC<IFor> = ({ each, render }) => {
  if (!Array.isArray(each)) return null;
  return (
    <If isTrue={each.length >= 1}>
      {Children.toArray(each.map((item: any) => render(item)))}
    </If>
  );
};

export const If: FC<IIf> = ({ isTrue, children }: any) => {
  return isTrue ? children : null;
};
