import React from 'react';
import * as Types from './types';

/** Write a simple component overview here. */
export const {{pascal}} = React.forwardRef<HTMLElement, Types.{{pascal}}Props>(
  (
    {
      value
    },
    ref
  ) => {
  return <div>This is a {{pascal}} component {value}</div>;
});

export * from './types';
export default {{pascal}};
