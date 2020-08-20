import React from 'react';

import {{pascal}} from '.';
import notes from '../README.md';

export default {
  title: '{{title}}',
  component: {{pascal}},
  parameters: { notes }
};

export const BasicUsage = () => <{{pascal}} />;
