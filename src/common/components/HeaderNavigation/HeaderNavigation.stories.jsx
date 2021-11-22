import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderNavigation from './HeaderNavigation';
import ReduxStateDecorator from '../../../client/redux/StateDecorator';
import data from '../../../server/models/data.json';
import PageContext from '../../context/PageContext';

storiesOf('Components | HeaderNavigation', module)
  .addDecorator((story) => <div style={{ margin: '2rem' }}>{story()}</div>)
  .add('default', () => (
    <ReduxStateDecorator
      initialState={{
        config: {
          data,
        },
      }}
    >
      <PageContext.Provider value={{ config: data }}>
        <HeaderNavigation />
      </PageContext.Provider>
    </ReduxStateDecorator>
  ));
