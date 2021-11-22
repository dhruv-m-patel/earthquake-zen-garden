import React from 'react';
import Tester from '../../../../tests/Tester';
import Page from './Page';

const tester = new Tester();

describe('Page', () => {
  test('it should render', () => {
    const snapshot = tester.getSnapshot(Page, {
      title: 'Test App',
      children: <div />,
    });
    expect(snapshot).toMatchSnapshot();
  });
});
