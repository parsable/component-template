import React from 'react';
import * as Types from '{{pascal}}Props';

/** Write a simple component overview here. */
export const {{pascal}} = (props: Types.{{pascal}}Props) => {
  return <div>This is a {{pascal}} component {props.value}</div>;
}

export * from './types';
export default {{pascal}};
